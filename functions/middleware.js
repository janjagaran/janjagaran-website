export const onRequest = async ({ request, next }) => {
  const res = await next();
  const type = res.headers.get("content-type") || "";
  if (!type.includes("text/html")) return res;

  let html = await res.text();
  const url = new URL(request.url);

  let meta = null;

  // Detect article URLs
  if (url.pathname.startsWith("/news/")) {
    const slug = url.pathname.split("/").filter(Boolean).pop();

    try {
      // Fetch WordPress post
      const postRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await postRes.json();

      if (Array.isArray(posts) && posts.length > 0) {
        const post = posts[0];

        const title = post.title?.rendered || "Janjagaran News";

        // Fetch featured image
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

            // Rewrite app. → cdn.
            if (image && image.startsWith("https://app.janjagaran.com")) {
              image = image.replace(
                "https://app.janjagaran.com",
                "https://cdn.janjagaran.com"
              );
            }
          } catch (err) {}
        }

        // Fallback
        if (!image) {
          image = "https://www.janjagaran.com/default-og.jpg";
        }

        const desc =
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
          "Latest Odisha news from Janjagaran";

        meta = { title, image, desc };
      }
    } catch (e) {}
  }

  // ------------------------------------------------------
  // REPLACE ALL TITLE VARIANTS
  // ------------------------------------------------------
  if (meta) {
    const safe = meta.title.replace(/"/g, "");

    html = html
      .replace(/<title>(.*?)<\/title>/gi, `<title>${safe}</title>`)
      .replace(
        /property="og:title" content="(.*?)"/gi,
        `property="og:title" content="${safe}"`
      )
      .replace(
        /property="twitter:title" content="(.*?)"/gi,
        `property="twitter:title" content="${safe}"`
      );
  } else {
    const def = "Janjagaran News, Odisha Local News";

    html = html
      .replace(/<title>(.*?)<\/title>/gi, `<title>${def}</title>`)
      .replace(
        /property="og:title" content="(.*?)"/gi,
        `property="og:title" content="${def}"`
      )
      .replace(
        /property="twitter:title" content="(.*?)"/gi,
        `property="twitter:title" content="${def}"`
      );
  }

  // ------------------------------------------------------
  // FORCE REPLACE ALL EXISTING IMAGE TAGS
  // ------------------------------------------------------
  if (meta) {
    html = html
      .replace(
        /property="og:image" content="(.*?)"/gi,
        `property="og:image" content="${meta.image}"`
      )
      .replace(
        /property="twitter:image" content="(.*?)"/gi,
        `property="twitter:image" content="${meta.image}"`
      );
  }

  // ------------------------------------------------------
  // INSERT CLEAN NEW OG TAG BLOCK
  // ------------------------------------------------------
  let og = "";
  if (meta) {
    og = `
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.desc}">
<meta property="og:image" content="${meta.image}">
<meta property="og:url" content="${url.href}">
<meta property="og:type" content="article">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.desc}">
<meta name="twitter:image" content="${meta.image}">
`;
  }

  // ------------------------------------------------------
  // COPY PROTECTION
  // ------------------------------------------------------
  const protect = `
<style>
  html, body, * { user-select: none !important; }
  img, video { user-drag: none !important; -webkit-user-drag: none !important; }
</style>

<script>
(function(){
  function block(e){ e.preventDefault(); e.stopImmediatePropagation(); return false; }
  const ev = ["copy","cut","contextmenu","selectstart","dragstart"];
  ev.forEach(a => window.addEventListener(a, block, true));

  window.addEventListener("mousedown", e => { if (e.button === 2) block(e); }, true);

  window.addEventListener("keydown", e => {
    const k = (e.key || "").toLowerCase();
    const c = e.ctrlKey || e.metaKey;
    if (c && ["c","x","s","u","a","p","i"].includes(k)) return block(e);
    if (e.keyCode === 123) return block(e);
    if (c && e.shiftKey && ["i","j","k"].includes(k)) return block(e);
  }, true);

  document.addEventListener("dblclick", block, true);

  setInterval(() => {
    const s = window.getSelection();
    if (s && s.toString().length) s.removeAllRanges();
  }, 150);

  document.documentElement.setAttribute("oncontextmenu", "return false");
})();
</script>
`;

  const add = og + protect;

  if (html.includes("</head>")) {
    html = html.replace("</head>", add + "</head>");
  } else {
    html = add + html;
  }

  const headers = new Headers(res.headers);
  headers.delete("content-length");

  return new Response(html, { status: res.status, headers });
};
