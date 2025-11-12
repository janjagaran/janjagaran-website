// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;
// const BASE_URL = API_URL.replace("/api", "");

// // ✅ Get all categories
// export const getCategories = async () => {
//   const res = await axios.get(`${API_URL}/categories?pagination[page]=1&pagination[pageSize]=46`);
//   return res.data.data;
// };

// export const getCategoryArticles = async (slug) => {
//   try {
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=${slug}&populate[articles][sort][0]=createdAt:desc&populate[articles][populate]=cover`
//     );

//     console.log("✅ API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No category found for slug:", slug);
//       return [];
//     }

//     // ✅ FIX: Your API returns articles directly, not nested in attributes
//     const articles = category.articles || [];

//     console.log("✅ Extracted articles:", articles);

//     return articles.map((a) => {
//       const cover =
//         a.cover?.formats?.medium?.url
//           ? BASE_URL + a.cover.formats.medium.url
//           : a.cover?.url
//           ? BASE_URL + a.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: a.documentId,
//         title: a.title,
//         slug: a.slug, // ✅ ADDED THIS LINE
//         description: a.description,
//         publishedAt: a.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching category articles:", err);
//     return [];
//   }
// };

// src/api/category.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const slugMap = {
  zilla: "%e0%ac%9c%e0%ac%bf%e0%ac%b2%e0%ad%8d%e0%ac%b2%e0%ac%be",
  aparadh: "%e0%ac%85%e0%ac%aa%e0%ac%b0%e0%ac%be%e0%ac%a7",
  sahitya: "%e0%ac%b8%e0%ac%be%e0%ad%83%e0%ac%bf%e0%ac%a4%e0%acd%e0%ac%af",
  rajdhani: "%e0%ac%86%e0%ac%9e%e0%ad%8d%e0%ac%9a%e0%ac%b3%e0%ac%bf%e0%ac%95",
   miscellaneous: "miscellaneous",
   khela : "%e0%ac%96%e0%ad%87%e0%ac%b3",
    Rajdhani: "%e0%ac%86%e0%ac%9e%e0%ad%8d%e0%ac%9a%e0%ac%b3%e0%ac%bf%e0%ac%95",
    rajya: "%e0%ac%b0%e0%ac%be%e0%ac%9c%e0%ad%8d%e0%ad%9f",
     rajniti: "%e0%ac%b0%e0%ac%be%e0%ac%9c%e0%ac%a8%e0%ad%80%e0%ac%a4%e0%ac%bf",
     bisesh: "%e0%ac%ac%e0%ac%bf%e0%ac%b6%e0%ad%87%e0%ac%b7",
    anchalik: "%e0%ac%86%e0%ac%9e%e0%ad%8d%e0%ac%9a%e0%ac%b3%e0%ac%bf%e0%ac%95",

    // rajya : "%e0%ac%95%e0%ac%be%e0%ac%b0%e0%ac%b2%e0%ac%b5%e0%ac%be%e0%ac%b0" 
  // add more as neede
};


// ✅ Fetch all categories
export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/categories?per_page=100`);
  console.log("✅ Fetched categories:", res.data);
  return res.data.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    count: cat.count,
    link: cat.link,
  }));
};

// ✅ Fetch posts by category slug
export const getCategoryArticles = async (slug) => {
  try {
     // Use mapped WP slug if available
    const wpSlug = slugMap[slug] || slug;
    // Step 1: Find the category by slug
    // const categoryRes = await axios.get(`${API_URL}/categories?slug=${slug}`);
    const categoryRes = await axios.get(`${API_URL}/categories?slug=${wpSlug}`);
    const category = categoryRes.data[0];
    if (!category) {
      console.warn(`⚠️ No category found for slug: ${slug}`);
      return [];
    }

    // Step 2: Fetch posts using category ID
    const postsRes = await axios.get(
      `${API_URL}/posts?categories=${category.id}&_embed`
    );

    console.log(`✅ Fetched posts for category [${slug}]:`, postsRes.data);

    // Step 3: Transform response
    return postsRes.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];

      // 🖼️ Safely get the best available image
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt?.rendered || "",
        content: post.content?.rendered || "",
        publishedAt: post.date,
        image, // ✅ main image field for UI
        featuredImage: media?.source_url || null, // backup if needed
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error(`❌ Error fetching articles for category ${slug}:`, error);
    return [];
  }
};
