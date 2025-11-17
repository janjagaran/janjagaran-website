export const onRequest = async (context) => {
  const { request, next } = context;

  console.log("Middleware running:", request.url);

  const res = await next();
  const type = res.headers.get("content-type") || "";

  if (!type.includes("text/html")) return res;

  let html = await res.text();
  const url = new URL(request.url);
  const path = url.pathname;

  const DEFAULT_OG =
    "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg";

  const excluded = [
    "/",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-condition",
    "/author",
    "/category",
  ];

  const isCategory = path.startsWith("/category");
  const isStatic = excluded.includes(path);

  const segments = path.split("/").filter(Boolean);
  const isArticle = segments.length === 1 && !isStatic;

  let meta = null;

  if (isArticle) {
    const slug = segments[0];

    try {
      let postRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      let posts = await postRes.json();

      if (!Array.isArray(posts) || posts.length === 0) {
        postRes = await fetch(
          `https://app.janjagaran.com/wp-json/wp/v2/posts?search=${encodeURIComponent(
            slug
          )}&_embed`
        );
        posts = await postRes.json();
      }

      if (Array.isArray(posts) && posts.length > 0) {
        const post = posts[0];

        const title = post.title?.rendered || "Janjagaran News";
        const desc =
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
          "Latest Odisha news on Janjagaran.";

        let img = DEFAULT_OG;

        if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
          img = post._embedded["wp:featuredmedia"][0].source_url;

          img = img.replace(
            "https://app.janjagaran.com",
            "https://cdn.janjagaran.com"
          );
        }

        meta = { title, desc, img };
      }
    } catch (e) {}
  }

  const title = meta?.title || "Janjagaran News Odisha";
  const description =
    meta?.desc ||
    "Stay updated with Odisha local news. State updates, crime, politics, India, global news.";
  const image = meta?.img || DEFAULT_OG;

  html = html
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(
      /<meta name="description"[^>]*>/i,
      `<meta name="description" content="${description}">`
    )
    .replace(
      /<meta property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${title}">`
    )
    .replace(
      /<meta property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${description}">`
    )
    .replace(
      /<meta property="og:image"[^>]*>/i,
      `<meta property="og:image" content="${image}">`
    )
    .replace(
      /<meta property="twitter:title"[^>]*>/i,
      `<meta property="twitter:title" content="${title}">`
    )
    .replace(
      /<meta property="twitter:description"[^>]*>/i,
      `<meta property="twitter:description" content="${description}">`
    )
    .replace(
      /<meta property="twitter:image"[^>]*>/i,
      `<meta property="twitter:image" content="${image}">`
    );

  return new Response(html, { headers: { "content-type": "text/html" } });
};
