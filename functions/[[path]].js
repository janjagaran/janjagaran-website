// export async function onRequest(context) {
//   const url = new URL(context.request.url);
//   const path = url.pathname;

//   // Ignore assets, images, icons, API calls, etc.
//   if (
//     path.startsWith("/assets") ||
//     path.startsWith("/images") ||
//     path.startsWith("/api") ||
//     path.startsWith("/favicon") ||
//     path === "/"               // homepage
//   ) {
//     return context.next();
//   }

//   // Extract slug (remove leading /)
//   const slug = path.replace("/", "");

//   // Fetch the WordPress post by slug
//   const postRes = await fetch(
//     `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
//   );

//   const postData = await postRes.json();
//   if (!postData.length) {
//     return context.next(); // If no post found, return normal page
//   }

//   const post = postData[0];

//   // Fetch featured image (OG Image)
  
// //   let ogImage = "https://janjagaran.com/default-og.jpg";
//   let ogImage = "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg"
//   if (post.featured_media) {
//     const mediaRes = await fetch(
//       `https://app.janjagaran.com/wp-json/wp/v2/media/${post.featured_media}`
//     );
//     const mediaData = await mediaRes.json();
//     if (mediaData?.source_url) ogImage = mediaData.source_url;
//   }

//   const title = post.title.rendered;
//   const description = post.excerpt.rendered.replace(/<[^>]+>/g, "");

//   // Get original HTML
//   let html = await context.next().then(res => res.text());

//   // Inject OG Tags dynamically
//   html = html.replace(
//     "</head>",
//     `
// <meta property="og:title" content="${title}" />
// <meta property="og:description" content="${description}" />
// <meta property="og:image" content="${ogImage}" />
// <meta property="og:url" content="https://janjagaran.com/${slug}" />

// <meta property="twitter:title" content="${title}" />
// <meta property="twitter:description" content="${description}" />
// <meta property="twitter:image" content="${ogImage}" />
// <meta property="twitter:card" content="summary_large_image" />

// </head>`
//   );

//   return new Response(html, {
//     headers: { "Content-Type": "text/html" },
//   });
// }


export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Ignore non-article URLs
  if (
    path === "/" ||
    path.startsWith("/assets") ||
    path.startsWith("/images") ||
    path.startsWith("/api") ||
    path.startsWith("/favicon") ||
    path.endsWith(".js") ||
    path.endsWith(".css") ||
    path.endsWith(".png") ||
    path.endsWith(".jpg")
  ) {
    return context.next();
  }

  // Extract slug like "advocate-council-member-elected"
  const slug = path.replace("/", "");

  // Fetch article from WordPress by slug
  const postRes = await fetch(
    `https://app.janjagaran.com/wp-json/wp/v2/posts?slug=${slug}`
  );

  const postData = await postRes.json();
  if (!postData.length) {
    return context.next();
  }

  const post = postData[0];

  // Default OG image
//   let ogImage = "https://cdn.janjagaran.com/default-og.jpg";
  let ogImage = "https://cdn.janjagaran.com/wp-content/uploads/2025/11/og-janjagaran.jpg"

  // If featured media exists, fetch it
  if (post.featured_media) {
    const mediaRes = await fetch(
      `https://app.janjagaran.com/wp-json/wp/v2/media/${post.featured_media}`
    );
    const mediaData = await mediaRes.json();

    if (mediaData?.media_details?.sizes?.medium?.source_url) {
      ogImage = mediaData.media_details.sizes.medium.source_url;
    } else if (mediaData?.source_url) {
      ogImage = mediaData.source_url;
    }

    // Convert app domain to CDN domain
    ogImage = ogImage.replace(
      "https://app.janjagaran.com",
      "https://cdn.janjagaran.com"
    );
  }

  const title = post.title.rendered;
  const description = post.excerpt.rendered.replace(/<[^>]+>/g, "");

  // Read original HTML content
  let html = await context.next().then((res) => res.text());

  // Inject OG tags dynamically
  html = html.replace(
    "</head>",
    `
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:url" content="https://janjagaran.com/${slug}" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="${title}" />
<meta property="twitter:description" content="${description}" />
<meta property="twitter:image" content="${ogImage}" />
</head>`
  );

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
