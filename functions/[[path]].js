export const onRequest = async (context) => {
    const url = new URL(context.request.url);
  
    // Continue page processing
    let response = await context.next();
  
    // Only modify HTML pages
    if (!response.headers.get("content-type")?.includes("text/html")) {
      return response;
    }
  
    let html = await response.text();
  
    // Extract post slug
    const slug = url.pathname.split("/").filter(Boolean).pop();
  
    let wpData = null;
  
    if (slug) {
      try {
        const res = await fetch(
          `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
        );
        const json = await res.json();
        wpData = json[0];
      } catch (err) {
        wpData = null;
      }
    }
  
    // Fallbacks
    const title = wpData?.title?.rendered || "Default Title";
    const description =
      wpData?.yoast_head_json?.description || "Default description";
    const image =
      wpData?.yoast_head_json?.og_image?.[0]?.url ||
      "https://www.janjagaran.com/default-og.jpg";
  
    // Replace meta tags
    html = html
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${description}">`
      )
      .replace(
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="${title}">`
      )
      .replace(
        /<meta property="og:description"[^>]*>/,
        `<meta property="og:description" content="${description}">`
      )
      .replace(
        /<meta property="og:image"[^>]*>/,
        `<meta property="og:image" content="${image}">`
      )
      .replace(
        /<meta property="twitter:title"[^>]*>/,
        `<meta property="twitter:title" content="${title}">`
      )
      .replace(
        /<meta property="twitter:description"[^>]*>/,
        `<meta property="twitter:description" content="${description}">`
      )
      .replace(
        /<meta property="twitter:image"[^>]*>/,
        `<meta property="twitter:image" content="${image}">`
      );
  
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  };
  