export const onRequest = async (context) => {
  console.log("🔥 Middleware is running", context.request.url);
export const onRequest = async ({ request, next }) => {
  const res = await next();
  const type = res.headers.get("content-type") || "";
  if (!type.includes("text/html")) return res;

  let html = await res.text();
  const url = new URL(request.url);
  const path = url.pathname;

  const DEFAULT_OG = "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg";

  // Excluded pages
  const excludedPaths = [
    "/", 
    "/about-us",
    "/author",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-condition"
  ];

  const isCategory = path.startsWith("/category");
  const isStatic = excludedPaths.includes(path) || isCategory;

  // Article detection: ANY single slug path that isn’t static
  const segments = path.split("/").filter(Boolean);
  const isArticle = segments.length === 1 && !isStatic;

  let meta = null;
  let schema = null;

  if (isArticle) {
    const slug = segments[0];

    try {
      const postRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      let posts = await postRes.json();

      // If no slug match, try WP search (fallback for unusual slugs)
      if ((!posts || posts.length === 0) && slug) {
        const searchRes = await fetch(
          `https://app.janjagaran.com/wp-json/wp/v2/posts?search=${encodeURIComponent(slug)}&_embed`
        );
        const searchPosts = await searchRes.json();
        if (Array.isArray(searchPosts) && searchPosts.length > 0) {
          posts = searchPosts;
        }
      }

      if (Array.isArray(posts) && posts.length > 0) {
        const post = posts[0];
        const title = post.title?.rendered || "Janjagaran News";

        // Featured image detection
        let image = null;
        const embedMedia = post._embedded?.["wp:featuredmedia"]?.[0];

        if (embedMedia) {
          image =
            embedMedia.source_url ||
            embedMedia.media_details?.sizes?.full?.source_url ||
            null;
        }

        if (!image && post.featured_media) {
          const mediaRes = await fetch(
            `https://app.janjagaran.com/wp-json/wp/v2/media/${post.featured_media}`
          );
          const media = await mediaRes.json();
          image = media.source_url || media.media_details?.sizes?.full?.source_url || null;
        }

        if (image?.startsWith("https://app.janjagaran.com")) {
          image = image.replace(
            "https://app.janjagaran.com",
            "https://cdn.janjagaran.com"
          );
        }

        if (!image) image = DEFAULT_OG;

        const desc =
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
          "Latest Odisha news from Janjagaran";

        const datePublished = post.date;
        const authorName = post._embedded?.author?.[0]?.name || "Janjagaran";

        meta = { title, image, desc, datePublished, authorName, slug };

        // JSON-LD schema
        schema = {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url.href },
          "headline": title,
          "image": [image],
          "datePublished": datePublished,
          "author": {
            "@type": "Person",
            "name": authorName
          },
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
    } catch (e) {}
  }

  // UPDATE META TAGS
  if (meta) {
    const safeTitle = meta.title.replace(/"/g, "");
    const safeDesc = meta.desc.replace(/"/g, "");

    html = html
      .replace(/<title>(.*?)<\/title>/i, `<title>${safeTitle}</title>`)
      .replace(/property="og:title" content="(.*?)"/i, `property="og:title" content="${safeTitle}"`)
      .replace(/property="twitter:title" content="(.*?)"/i, `property="twitter:title" content="${safeTitle}"`)
      .replace(/property="og:description" content="(.*?)"/i, `property="og:description" content="${safeDesc}"`)
      .replace(/property="twitter:description" content="(.*?)"/i, `property="twitter:description" content="${safeDesc}"`)
      .replace(/property="og:image" content="(.*?)"/i, `property="og:image" content="${meta.image}"`)
      .replace(/property="twitter:image" content="(.*?)"/i, `property="twitter:image" content="${meta.image}"`);

    const canonical = `<link rel="canonical" href="${url.href}">`;
    const schemaTag = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

    html = html.replace("</head>", canonical + schemaTag + "</head>");
  } else {
    // DEFAULT OG FOR STATIC PAGES
    html = html.replace(
      /property="og:image" content="(.*?)"/i,
      `property="og:image" content="${DEFAULT_OG}"`
    );
    html = html.replace(
      /property="twitter:image" content="(.*?)"/i,
      `property="twitter:image" content="${DEFAULT_OG}"`
    );

    const canonical = `<link rel="canonical" href="${url.href}">`;
    html = html.replace("</head>", canonical + "</head>");
  }

  // CDN REWRITE
  html = html.replace(/https:\/\/app\.janjagaran\.com/gi, "https://cdn.janjagaran.com");

  // COPY PROTECTION
  const protect = `
<style>
  html, body, * { user-select: none !important; }
</style>
<script>
  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("copy", e => e.preventDefault());
  document.addEventListener("selectstart", e => e.preventDefault());
</script>
`;

  html = html.replace("</head>", protect + "</head>");

  const headers = new Headers(res.headers);

  // PRELOAD header for article image
  if (meta?.image) {
    headers.set("Link", `<${meta.image}>; rel=preload; as=image`);
  }

  // CACHE
  headers.set("Cache-Control", "public, max-age=60, s-maxage=300");
  headers.delete("content-length");

  return new Response(html, { status: res.status, headers });
};
