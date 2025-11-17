export const onRequest = async ({ request, next }) => {
  const res = await next();
  const contentType = res.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) return res;

  let html = await res.text();
  const url = new URL(request.url);

  let meta = null;

  // Detect article pages like: /news/my-article-slug
  if (url.pathname.startsWith("/news/")) {
    const slug = url.pathname.split("/").pop();

    try {
      const apiRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
      );
      const data = await apiRes.json();

      if (Array.isArray(data) && data.length > 0) {
        const post = data[0];

        const title = post.title?.rendered || "Janjagaran News";

        const image =
          post.yoast_head_json?.og_image?.[0]?.url ||
          post.featured_media_url ||
          "https://www.janjagaran.com/default-og.jpg";

        const desc =
          post.yoast_head_json?.og_description ||
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
          "Latest Odisha news from Janjagaran";

        meta = { title, image, desc };
      }
    } catch (e) {}
  }

  // -----------------------------------------------------------
  // REPLACE ALL TITLE FIELDS GLOBALLY (Fixes Default Title)
  // -----------------------------------------------------------

  if (meta) {
    const safeTitle = meta.title.replace(/"/g, "");

    html = html
      .replace(/<title>(.*?)<\/title>/gi, `<title>${safeTitle}</title>`)
      .replace(
        /property="og:title" content="(.*?)"/gi,
        `property="og:title" content="${safeTitle}"`
      )
      .replace(
        /property="twitter:title" content="(.*?)"/gi,
        `property="twitter:title" content="${safeTitle}"`
      );
  } else {
    const defaultTitle = "Janjagaran News, Odisha Local News";

    html = html
      .replace(/<title>(.*?)<\/title>/gi, `<title>${defaultTitle}</title>`)
      .replace(
        /property="og:title" content="(.*?)"/gi,
        `property="og:title" content="${defaultTitle}"`
      )
      .replace(
        /property="twitter:title" content="(.*?)"/gi,
        `property="twitter:title" content="${defaultTitle}"`
      );
  }

  // -----------------------------------------------------------
  // BUILD OG TAGS FOR ARTICLE PAGES
  // -----------------------------------------------------------

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

  // -----------------------------------------------------------
  // COPY AND RIGHT CLICK PROTECTION
  // -----------------------------------------------------------

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

  window.addEventListener("mousedown", e => {
    if (e.button === 2) block(e);
  }, true);

  window.addEventListener("keydown", e => {
    const key = (e.key || "").toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && ["c","x","s","u","a","p","i"].includes(key)) return block(e);
    if (e.keyCode === 123) return block(e);
    if (ctrl && e.shiftKey && ["i","j","k"].includes(key)) return block(e);
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

  // -----------------------------------------------------------
  // INSERT OG TAGS AND PROTECTION
  // -----------------------------------------------------------

  const insert = og + protect;

  if (html.includes("</head>")) {
    html = html.replace("</head>", insert + "</head>");
  } else if (html.includes("</body>")) {
    html = html.replace("</body>", insert + "</body>");
  } else {
    html = insert + html;
  }

  const headers = new Headers(res.headers);
  headers.delete("content-length");

  return new Response(html, {
    status: res.status,
    headers,
  });
};
