export const onRequest = async ({ request, next }) => {
  const res = await next();
  const type = res.headers.get("content-type") || "";
  if (!type.includes("text/html")) return res;

  let html = await res.text();
  const url = new URL(request.url);
  const path = url.pathname;

  // Default OG image
  const DEFAULT_OG =
    "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg";

  // Excluded pages
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

  // ARTICLE DETECTION:
  // Your routes use: "/:slug"
  // So article must:
  //  - Be a single-segment URL
  //  - Not be excluded
  //  - Not be a category
  const segments = path.split("/").filter(Boolean);
  const isArticle =
    segments.length === 1 && !isStaticExcluded && !isCategory;

  let meta = null;

  // ---------- FETCH WORDPRESS ARTICLE ----------
  if (isArticle) {
    const slug = segments[0];

    try {
      const postRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await postRes.json();

      if (Array.isArray(posts) && posts.length > 0) {
        const post = posts[0];

        const title = post.title?.rendered || "Janjagaran News";

        // Fetch featured media
        let image = null;

        if (post.featured_media) {
          try {
            const mediaRes = await fetch(
              `https://app.janjagaran.com/wp-json/wp/v2/media/${post.featured_media}`
            );
            const media = await mediaRes.json();

            image =
              media.source_url ||
              media.media_details?.sizes?.full?.source_url ||
              null;

            // Rewrite app → cdn
            if (
              image &&
              image.startsWith("https://app.janjagaran.com")
            ) {
              image = image.replace(
                "https://app.janjagaran.com",
                "https://cdn.janjagaran.com"
              );
            }
          } catch (e) {}
        }

        if (!image) image = DEFAULT_OG;

        const desc =
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
          "Latest Odisha news from Janjagaran";

        meta = { title, image, desc };
      }
    } catch (e) {}
  }

  // ---------- META REPLACEMENT ----------
  if (meta) {
    const safeTitle = meta.title.replace(/"/g, "");

    html = html
      // Title
      .replace(/<title>(.*?)<\/title>/gi, `<title>${safeTitle}</title>`)

      // OG Title
      .replace(
        /property="og:title" content="(.*?)"/gi,
        `property="og:title" content="${safeTitle}"`
      )

      // Twitter Title
      .replace(
        /property="twitter:title" content="(.*?)"/gi,
        `property="twitter:title" content="${safeTitle}"`
      )

      // Image
      .replace(
        /property="og:image" content="(.*?)"/gi,
        `property="og:image" content="${meta.image}"`
      )
      .replace(
        /property="twitter:image" content="(.*?)"/gi,
        `property="twitter:image" content="${meta.image}"`
      )

      // Description
      .replace(
        /property="og:description" content="(.*?)"/gi,
        `property="og:description" content="${meta.desc}"`
      )
      .replace(
        /property="twitter:description" content="(.*?)"/gi,
        `property="twitter:description" content="${meta.desc}"`
      );
  } else {
    // ---------- DEFAULT OG ----------
    html = html
      .replace(
        /property="og:image" content="(.*?)"/gi,
        `property="og:image" content="${DEFAULT_OG}"`
      )
      .replace(
        /property="twitter:image" content="(.*?)"/gi,
        `property="twitter:image" content="${DEFAULT_OG}"`
      );
  }

  // ---------- CDN REWRITE ----------
  html = html.replace(
    /https:\/\/app\.janjagaran\.com/gi,
    "https://cdn.janjagaran.com"
  );

  // ---------- COPY / RIGHT-CLICK DISABLE ----------
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

  const headers = new Headers(res.headers);
  headers.delete("content-length");

  return new Response(html, { status: res.status, headers });
};
