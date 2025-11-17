export const onRequest = async ({ request, next }) => {
  // let the Pages runtime generate the base HTML
  const originResponse = await next();

  // only handle HTML
  const contentType = originResponse.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return originResponse;

  const url = new URL(request.url);
  const path = url.pathname;

  // Cache key (use a separate GET request key)
  const cacheKey = new Request("middleware-cache:" + url.href, { method: "GET" });
  try {
    const cached = await caches.default.match(cacheKey);
    if (cached) return cached.clone();
  } catch (e) {
    // ignore cache errors
  }

  // read HTML
  let html = await originResponse.text();

  // defaults & exclusions
  const DEFAULT_OG = "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg";
  const excludedPaths = [
    "/", // homepage only
    "/about-us",
    "/author",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-condition"
  ];
  const isCategory = path.startsWith("/category");
  const isStaticExcluded = excludedPaths.includes(path) || isCategory;

  // article detection for your routing: "/:slug"
  const segments = path.split("/").filter(Boolean);
  const isArticle = segments.length === 1 && !isStaticExcluded && !isCategory;

  let meta = null;
  let schemaJsonLd = null;

  if (isArticle) {
    const slug = segments[0];

    try {
      // Use _embed so WP returns author and featured media when available
      const postRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
      );
      const posts = await postRes.json();

      if (Array.isArray(posts) && posts.length > 0) {
        const post = posts[0];

        const title = post.title?.rendered || "Janjagaran News";

        // Try to get featured image from _embedded first
        let image = null;

        try {
          // check embedded featured media
          const embeddedMedia = post._embedded?.["wp:featuredmedia"]?.[0];
          if (embeddedMedia) {
            image = embeddedMedia.source_url || embeddedMedia.media_details?.sizes?.full?.source_url || null;
          }
        } catch (e) {}

        // fallback to featured_media endpoint if embedded missing
        if (!image && post.featured_media) {
          try {
            const mediaRes = await fetch(
              `https://app.janjagaran.com/wp-json/wp/v2/media/${post.featured_media}`
            );
            const media = await mediaRes.json();
            image =
              media.source_url ||
              media.media_details?.sizes?.full?.source_url ||
              null;
          } catch (e) {}
        }

        // rewrite app -> cdn
        if (image && image.startsWith("https://app.janjagaran.com")) {
          image = image.replace("https://app.janjagaran.com", "https://cdn.janjagaran.com");
        }

        if (!image) image = DEFAULT_OG;

        const desc = post.yoast_head_json?.og_description
          || (post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "").trim()
          || "Latest Odisha news from Janjagaran";

        // optional structured data fields
        const datePublished = post.date || null;
        const authorName = post._embedded?.author?.[0]?.name || null;

        meta = { title, image, desc, datePublished, authorName, slug };

        // build Article JSON-LD schema
        schemaJsonLd = {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url.href
          },
          "headline": title,
          "image": [image],
          "datePublished": datePublished || undefined,
          "author": authorName ? { "@type": "Person", "name": authorName } : undefined,
          "publisher": {
            "@type": "Organization",
            "name": "Janjagaran",
            "logo": {
              "@type": "ImageObject",
              "url": DEFAULT_OG
            }
          },
          "description": desc
        };
      }
    } catch (e) {
      // ignore fetch errors
    }
  }

  // ---------- REPLACE / INJECT META ----------
  // Replace title + OG + Twitter fields if present in template
  if (meta) {
    const safeTitle = meta.title.replace(/"/g, "");
    const safeDesc = (meta.desc || "").replace(/"/g, "");

    html = html
      .replace(/<title>(.*?)<\/title>/gi, `<title>${safeTitle}</title>`)
      .replace(/property="og:title" content="(.*?)"/gi, `property="og:title" content="${safeTitle}"`)
      .replace(/property="twitter:title" content="(.*?)"/gi, `property="twitter:title" content="${safeTitle}"`)
      .replace(/property="og:description" content="(.*?)"/gi, `property="og:description" content="${safeDesc}"`)
      .replace(/property="twitter:description" content="(.*?)"/gi, `property="twitter:description" content="${safeDesc}"`)
      .replace(/property="og:image" content="(.*?)"/gi, `property="og:image" content="${meta.image}"`)
      .replace(/property="twitter:image" content="(.*?)"/gi, `property="twitter:image" content="${meta.image}"`);

    // inject canonical, schema, and OG block if not present or to ensure presence
    const canonicalTag = `<link rel="canonical" href="${url.href}">`;
    const ogBlock = `
<link rel="canonical" href="${url.href}">
<meta property="og:title" content="${safeTitle}">
<meta property="og:description" content="${safeDesc}">
<meta property="og:image" content="${meta.image}">
<meta property="og:url" content="${url.href}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${safeTitle}">
<meta name="twitter:description" content="${safeDesc}">
<meta name="twitter:image" content="${meta.image}">
`;

    // inject JSON-LD schema
    const schemaTag = `<script type="application/ld+json">${JSON.stringify(schemaJsonLd)}</script>`;

    // Insert canonical/OG/schema before </head>
    if (html.includes("</head>")) {
      // ensure we don't duplicate canonical if already present (best-effort)
      html = html.replace("</head>", ogBlock + schemaTag + "</head>");
    } else {
      html = ogBlock + schemaTag + html;
    }
  } else {
    // not an article -> ensure default OG images for excluded pages
    html = html
      .replace(/property="og:image" content="(.*?)"/gi, `property="og:image" content="${DEFAULT_OG}"`)
      .replace(/property="twitter:image" content="(.*?)"/gi, `property="twitter:image" content="${DEFAULT_OG}"`);

    // Also inject canonical for homepage and static pages
    const canonicalTag = `<link rel="canonical" href="${url.href}">`;
    if (html.includes("</head>")) {
      html = html.replace("</head>", canonicalTag + "</head>");
    } else {
      html = canonicalTag + html;
    }
  }

  // ---------- GLOBAL CDN REWRITE ----------
  html = html.replace(/https:\/\/app\.janjagaran\.com/gi, "https://cdn.janjagaran.com");

  // ---------- COPY PROTECTION (unchanged) ----------
  const protect = `
<style>
  html, body, * { user-select: none !important; }
  img, video { user-drag: none !important; -webkit-user-drag: none !important; }
</style>

<script>
(function(){
  function block(e){ e.preventDefault(); e.stopImmediatePropagation(); return false; }
  const events = ["copy","cut","contextmenu","selectstart","dragstart"];
  events.forEach(ev => window.addEventListener(ev, block, true));
  window.addEventListener("mousedown", e => { if (e.button === 2) block(e); }, true);
  window.addEventListener("keydown", e => {
    const k = (e.key || "").toLowerCase();
    const combo = e.ctrlKey || e.metaKey;
    if (combo && ["c","x","s","u","a","p","i"].includes(k)) return block(e);
    if (e.keyCode === 123) return block(e);
    if (combo && e.shiftKey && ["i","j","k"].includes(k)) return block(e);
  }, true);
  document.addEventListener("dblclick", block, true);
  setInterval(() => {
    const sel = window.getSelection();
    if (sel && sel.toString().length) sel.removeAllRanges();
  }, 150);
  document.documentElement.setAttribute("oncontextmenu", "return false");
})();
</script>
`;

  if (html.includes("</head>")) {
    html = html.replace("</head>", protect + "</head>");
  } else {
    html = protect + html;
  }

  // ---------- BUILD RESPONSE HEADERS ----------
  const headers = new Headers(originResponse.headers);

  // preload header for article image
  if (meta && meta.image) {
    const preload = `<${meta.image}>; rel=preload; as=image`;
    // if Link already exists, append
    const existingLink = headers.get("Link");
    headers.set("Link", existingLink ? existingLink + ", " + preload : preload);
  }

  // add Cache-Control for the client and edge
  headers.set("Cache-Control", "public, max-age=60, s-maxage=300");

  // remove content-length because HTML changed
  headers.delete("content-length");

  const finalResp = new Response(html, {
    status: originResponse.status,
    headers
  });

  // cache transformed response at edge (best-effort)
  try {
    await caches.default.put(cacheKey, finalResp.clone());
  } catch (e) {
    // ignore cache put errors
  }

  return finalResp;
};
