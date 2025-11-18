export async function onRequest(context) {
  const { request, next } = context;

  const url = new URL(request.url);
  const path = url.pathname;

  const DEFAULT_OG =
    "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg";

  const staticPaths = [
    "/",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-condition",
    "/author"
  ];

  const segments = path.split("/").filter(Boolean);
  const isArticle = segments.length === 1 && !staticPaths.includes(path);

  const res = await next();
  const type = res.headers.get("content-type") || "";

  if (!type.includes("text/html")) return res;

  let html = await res.text();

  let meta = null;

  if (isArticle) {
    const slug = segments[0];

    try {
      let wpRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      let posts = await wpRes.json();

      if (!posts?.length) {
        wpRes = await fetch(
          `https://app.janjagaran.com/wp-json/wp/v2/posts?search=${encodeURIComponent(
            slug
          )}&_embed`
        );
        posts = await wpRes.json();
      }

      if (posts?.length) {
        const post = posts[0];
        const title = post.title?.rendered || "Janjagaran News Odisha";
        const desc =
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
          "Latest Odisha news on Janjagaran.";

        let img = DEFAULT_OG;

        const media = post._embedded?.["wp:featuredmedia"]?.[0];

        if (media?.source_url) {
          img = media.source_url.replace(
            "https://app.janjagaran.com",
            "https://cdn.janjagaran.com"
          );
        }

        meta = { title, desc, img };
      }
    } catch (e) {
      meta = null;
    }
  }

  const title = meta?.title || "Janjagaran News Odisha";
  const desc =
    meta?.desc ||
    "Latest updates from Odisha. Crime, politics, local news, global news.";
  const img = meta?.img || DEFAULT_OG;

  html = html
    .replace(/<title>(.*?)<\/title>/i, `<title>${title}</title>`)
    .replace(
      /<meta name="description"[^>]*>/i,
      `<meta name="description" content="${desc}">`
    )
    .replace(
      /<meta property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${title}">`
    )
    .replace(
      /<meta property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${desc}">`
    )
    .replace(
      /<meta property="og:image"[^>]*>/i,
      `<meta property="og:image" content="${img}">`
    )
    .replace(
      /<meta property="twitter:title"[^>]*>/i,
      `<meta property="twitter:title" content="${title}">`
    )
    .replace(
      /<meta property="twitter:description"[^>]*>/i,
      `<meta property="twitter:description" content="${desc}">`
    )
    .replace(
      /<meta property="twitter:image"[^>]*>/i,
      `<meta property="twitter:image" content="${img}">`
    );

  return new Response(html, {
    headers: { "content-type": "text/html" }
  });
}