export const onRequest = async (context) => {
  const url = new URL(context.request.url);

  let response = await context.next();

  if (!response.headers.get("content-type")?.includes("text/html")) {
    return response;
  }

  let html = await response.text();

  const slug = url.pathname.split("/").filter(Boolean).pop();

  let wpData = null;
  let featuredImage = null;

  if (slug) {
    try {
      const postRes = await fetch(
        `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await postRes.json();
      wpData = posts[0];

      if (wpData?.featured_media) {
        const mediaRes = await fetch(
          `https://app.janjagaran.com/wp-json/wp/v2/media/${wpData.featured_media}`
        );
        const media = await mediaRes.json();

        featuredImage =
          media.source_url ||
          media.media_details?.sizes?.full?.source_url ||
          null;
      }
    } catch (err) {}
  }

  const title = wpData?.title?.rendered || "Default Title";

  const description =
    wpData?.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
    "Latest Odisha news from Janjagaran";

  const image =
    featuredImage || 
    "https://www.janjagaran.com/default-og.jpg";

  // Replace all title fields
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

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
};
