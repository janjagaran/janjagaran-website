// import axios from "axios";


// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337/api";

// // ✅ Derive base URL for image paths
// const BASE_URL = API_URL.replace("/api", "");


// export const getArticles = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/articles?populate=*`);
//     return res.data.data || [];
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     return [];
//   }
// };


// export async function getBreakingArticles() {
//   const res = await api.get(
//     "/articles?filters[breaking]=true&sort=publishedAt:desc&populate=*"
//   );

//   return res.data.map((item) => ({
//     id: item.id,
//     title: item.attributes.title,
//     slug: item.attributes.slug,
//     image: item.attributes.image?.url || "/placeholder.jpg",
//     category: item.attributes.category?.data?.attributes?.name || "News",
//     publishedAt: item.attributes.publishedAt,
//   }));
// }


// // ✅ Get all articles
// export const getAllArticles = async () => {
//   const res = await axios.get(`${API_URL}/articles?populate=*`);
//   return res.data.data;
// };

// // ✅ Get articles by category id
// export const getArticlesByCategoryId = async (categoryId) => {
//   const res = await axios.get(
//     `${API_URL}/articles?filters[categories][id][$eq]=${categoryId}&populate=*`
//   );
//   return res.data.data;
// };

// // ✅ Get articles by category name (Politics, Crime, etc.)
// export const getArticlesByCategoryName = async (categoryName) => {
//   const res = await axios.get(
//     `${API_URL}/articles?filters[categories][name][$eq]=${categoryName}`
//   );
//   return res.data.data;
// };


// export const getLatestArticles = async () => {
//   try {
//     const res = await axios.get(
//       `${API_URL}/articles?sort=publishedAt:desc&pagination[limit]=5&populate=cover`
//     );
//     return res.data.data.map((article) => ({
//       id: article.id,
//       title: article.title,
//       slug: article.slug,
//       description: article.description,
//       publishedAt: article.publishedAt,
//       image: article.cover?.formats?.medium?.url
//         ? BASE_URL + article.cover.formats.medium.url
//         : article.cover?.url
//         ? BASE_URL + article.cover.url
//         : "https://via.placeholder.com/800x400?text=No+Image",
//     }));
//   } catch (err) {
//     console.error("❌ Error fetching latest articles:", err);
//     return [];
//   }
// };
// export async function getArticlesByCategory(slug) {
//   const res = await axios.get(
//     `${API_URL}/articles?filters[categories][slug][$eq]=${slug}&populate=*`
//   );

//   return res.data.data.map((item) => ({
//     id: item.id,
//     title: item.attributes.title,
//     slug: item.attributes.slug, // ✅ Needed for ArticleCard
//     description: item.attributes.description,
//     image:
//       item.attributes.cover?.data?.attributes?.url
//         ? BASE_URL + item.attributes.cover.data.attributes.url
//         : "/placeholder.jpg",
//     publishedAt: item.attributes.publishedAt,
//   }));
// }

// export async function getArticleBySlug(slug) {
//   try {
//     const url = `${API_URL}/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`;
//     console.log("📡 Fetching article from:", url);

//     const res = await axios.get(url);
//     console.log("🧾 API Response:", res.data);

//     if (!res.data.data.length) {
//       console.warn("⚠️ No article found for slug:", slug);
//       return null;
//     }

//     // ✅ Strapi v5: attributes are directly on the object, not inside "attributes"
//     const article = res.data.data[0];

//     // ✅ Handle cover image safely
//     const cover =
//       article.cover?.formats?.medium?.url
//         ? BASE_URL + article.cover.formats.medium.url
//         : article.cover?.url
//         ? BASE_URL + article.cover.url
//         : "https://via.placeholder.com/800x400?text=No+Image";

//     return {
//       id: article.id,
//       title: article.title,
//       description: article.description,
//       shortDescription: article.shortDescription,
//       subDescription: article.subDescription,
//       slug: article.slug,
//       publishedAt: article.publishedAt,
//       image: cover,
//       category: article.category?.name || "Uncategorized",
//     };
//   } catch (err) {
//     console.error("❌ Error fetching article by slug:", err);
//     return null;
//   }
// }


// export const getCrimeArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=aparadh&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'Aparadh' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getRegionArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=anchalik&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'Anchalik' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getMiscellaneousArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=miscellaneous&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getZillaArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=zilla&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getBiseshArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=bisesh&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getRajdhaniArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=rajadhani&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getRajnitiArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=rajniti&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getRajyaArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=rajya&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getSahityaArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=sahitya&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// export const getKhelaArticles = async () => {
//   try {
//     // Fetch the "aparadh" category and populate its articles + cover
//     const res = await axios.get(
//       `${API_URL}/categories?filters[slug][$eq]=khela&populate[articles][populate]=cover`
//     );

//     console.log("✅ Crime API full response:", res.data);

//     const category = res.data.data[0];
//     if (!category) {
//       console.warn("⚠️ No 'miscellaneous' category found");
//       return [];
//     }

//     const articles = category.articles || category.attributes?.articles?.data || [];
//     console.log("✅ Extracted articles:", articles);

//     // Map the article structure
//     return articles.map((a) => {
//       const attrs = a.attributes || a; // handle both formats
//       const cover =
//         attrs.cover?.formats?.medium?.url
//           ? BASE_URL + attrs.cover.formats.medium.url
//           : attrs.cover?.url
//           ? BASE_URL + attrs.cover.url
//           : "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: a.id,
//         documentId: attrs.documentId,
//         title: attrs.title,
//         description: attrs.description,
//         slug: attrs.slug,
//         publishedAt: attrs.publishedAt,
//         image: cover,
//       };
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Aparadh (Crime) articles:", err);
//     return [];
//   }
// };

// wordpress api calling

// src/api/article.js
import axios from "axios";
import { cleanHTML } from "../utils/utils";

const API_URL = import.meta.env.VITE_API_URL; // https://www.janjagaran.com/wp-json/wp/v2

// ✅ Fetch all posts
export const getArticles = async (page = 1, perPage = 10) => {
  const res = await axios.get(`${API_URL}/posts?per_page=${perPage}&page=${page}&_embed`);
  return res.data.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    publishedAt: post.date,
    categoryIds: post.categories,
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    author: post._embedded?.author?.[0]?.name || "Anonymous",
    link: post.link,
  }));
};

// ✅ Get single article by slug
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const getArticleBySlug = async (slug) => {
  try {
    const res = await axios.get(`${API_URL}/posts?slug=${slug}&_embed`);
    const post = res.data?.[0];

    if (!post) return null;

    // 🔹 Extract featured image safely
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const image =
      media?.media_details?.sizes?.large?.source_url ||
      media?.media_details?.sizes?.medium?.source_url ||
      media?.source_url ||
      "https://via.placeholder.com/800x400?text=No+Image";

    return {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      // description: cleanHTML(post.excerpt?.rendered),
      description: cleanHTML(post.content?.rendered || post.excerpt?.rendered || ""),
      // content: post.content?.rendered || "",
       content: cleanHTML(post.content?.rendered),
      publishedAt: post.date,
      image, // ✅ main image
      author: post._embedded?.author?.[0]?.name || "Anonymous",
      category:
        post._embedded?.["wp:term"]?.[0]?.[0] || { name: "News", slug: "news" },
      link: post.link,
    };
  } catch (error) {
    console.error("❌ Error fetching article by slug:", error);
    return null;
  }
};


// ✅ Get posts by category ID
export const getArticlesByCategoryId = async (categoryId) => {
  const res = await axios.get(`${API_URL}/posts?categories=${categoryId}&_embed`);
  return res.data.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    publishedAt: post.date,
    link: post.link,
  }));
};

// ✅ Get latest posts
export const getLatestArticles = async (limit = 6) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?per_page=${limit}&orderby=date&_embed`
    );

    console.log("📰 Latest Articles Response:", res.data);

    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        image, // ✅ main image for UI
        featuredImage: media?.source_url || null, // optional backup
        publishedAt: post.date,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching latest articles:", error);
    return [];
  }
};


// export const getAparadhArticles = async (page = 1, perPage = 20) => {
//   try {
//     const res = await axios.get(
//       `${API_URL}/posts?categories=36&_embed&per_page=${perPage}&page=${page}`
//     );
//     console.log("✅ Fetched Aparadh articles:", res.data);
    

//     // Transform response for easier frontend use
//     return res.data.map((post) => ({
//       id: post.id,
//       title: post.title.rendered,
//       slug: post.slug,
//       excerpt: post.excerpt.rendered,
//       content: post.content.rendered,
//       date: post.date,
//       featuredImage:
//         post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
//       author: post._embedded?.author?.[0]?.name || "Anonymous",
//       link: post.link,
//     }));
//   } catch (error) {
//     console.error("❌ Error fetching Aparadh articles:", error);
//     return [];
//   }
// };
// export const getAparadhArticles = async (page = 1, perPage = 20) => {
//   try {
//     const res = await axios.get(
//       `${API_URL}/posts?categories=36&_embed&per_page=${perPage}&page=${page}`
//     );

//     console.log("✅ Fetched Aparadh articles:", res.data);

//     // Transform response for easier frontend use
//     return res.data.map((post) => {
//       // 🔹 Extract featured image safely from _embedded
//       const media = post._embedded?.["wp:featuredmedia"]?.[0];
//       const image =
//         media?.media_details?.sizes?.large?.source_url ||
//         media?.media_details?.sizes?.medium?.source_url ||
//         media?.source_url ||
//         "https://via.placeholder.com/800x400?text=No+Image";

//       return {
//         id: post.id,
//         title: post.title.rendered,
//         slug: post.slug,
//         excerpt: post.excerpt.rendered,
//         content: post.content.rendered,
//         date: post.date,
//         image, // ✅ This is your main UI image field
//         featuredImage: media?.source_url || null, // (optional, still available)
//         author: post._embedded?.author?.[0]?.name || "Anonymous",
//         link: post.link,
//       };
//     });
//   } catch (error) {
//     console.error("❌ Error fetching Aparadh articles:", error);
//     return [];
//   }
// };

// latest with the desc and asec
export const getAparadhArticles = async (page = 1, perPage = 20) => {
  try {
    // ✅ Added orderby=date&order=desc to get latest first
    const res = await axios.get(
      `${API_URL}/posts?categories=36&_embed&orderby=date&order=desc&per_page=${perPage}&page=${page}`
    );

    // console.log("✅ Latest Aparadh articles fetched:", res.data);

    // 🧠 Transform response
    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];

      // 🖼️ Always get the best available image
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      // 🧹 Clean description (remove HTML tags)
      const cleanExcerpt = post.excerpt?.rendered
        ? post.excerpt.rendered.replace(/<[^>]+>/g, "").trim()
        : "";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: cleanExcerpt,
        content: post.content.rendered,
        publishedAt: post.date,
        image, // ✅ main image for UI
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Aparadh articles:", error);
    return [];
  }
};



export const getKhelaArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=500&_embed&per_page=${perPage}&page=${page}`
    );

    // console.log("✅ Fetched Aparadh articles:", res.data);

    // Transform response for easier frontend use
    return res.data.map((post) => {
      // 🔹 Extract featured image safely from _embedded
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        publishedAt: post.date,
        image, // ✅ This is your main UI image field
        featuredImage: media?.source_url || null, // (optional, still available)
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Aparadh articles:", error);
    return [];
  }
};

// export const getSahityaArticles = async (page = 1, perPage = 20) => {
//   try {
//     const res = await axios.get(
//       `${API_URL}/posts?categories=501&_embed&per_page=${perPage}&page=${page}`
//     );

//     console.log("✅ Fetched Aparadh articles:", res.data);

//     // Transform response for easier frontend use
//     return res.data.map((post) => {
//       // 🔹 Extract featured image safely from _embedded
//       const media = post._embedded?.["wp:featuredmedia"]?.[0];
//       const image =
//         media?.media_details?.sizes?.large?.source_url ||
//         media?.media_details?.sizes?.medium?.source_url ||
//         media?.source_url ||
//         "https://via.placeholder.com/800x400?text=No+Image";
        

//       return {
//         id: post.id,
//         title: post.title.rendered,
//         slug: post.slug,
//         excerpt: post.excerpt.rendered,
//         content: post.content.rendered,
//         date: post.date,
//         image, // ✅ This is your main UI image field
//         featuredImage: media?.source_url || null, // (optional, still available)
//         author: post._embedded?.author?.[0]?.name || "Anonymous",
//         link: post.link,
//       };
//     });
//   } catch (error) {
//     console.error("❌ Error fetching Aparadh articles:", error);
//     return [];
//   }
// };

export const getSahityaArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=501&_embed&per_page=${perPage}&page=${page}`
    );

    // console.log("✅ Fetched Sahitya articles:", res.data);

    return res.data.map((post) => {
      // 🔹 Extract featured image safely
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      // 🔹 Use cleanHTML to remove all HTML tags
      const description = cleanHTML(
        post.excerpt?.rendered || post.content?.rendered || ""
      );

      return {
        id: post.id,
        title: cleanHTML(post.title?.rendered),
        slug: post.slug,
        description, // ✅ now added for UI
        content: cleanHTML(post.content?.rendered || ""),
        publishedAt: post.date, // ✅ rename for consistency
        image, // ✅ safe for UI
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Sahitya articles:", error);
    return [];
  }
};


export const getRegionArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=32&_embed&per_page=${perPage}&page=${page}`
    );

    // console.log("✅ Fetched Aparadh articles:", res.data);

    // Transform response for easier frontend use
    return res.data.map((post) => {
      // 🔹 Extract featured image safely from _embedded
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        publishedAt: post.date,
        image, // ✅ This is your main UI image field
        featuredImage: media?.source_url || null, // (optional, still available)
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Aparadh articles:", error);
    return [];
  }
};


export const getMiscellaneousArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=1&_embed&per_page=${perPage}&page=${page}`
    );

    // console.log("✅ Fetched Aparadh articles:", res.data);

    // Transform response for easier frontend use
    return res.data.map((post) => {
      // 🔹 Extract featured image safely from _embedded
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        publishedAt: post.date,
        image, // ✅ This is your main UI image field
        featuredImage: media?.source_url || null, // (optional, still available)
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Aparadh articles:", error);
    return [];
  }
};


export const getBiseshArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=497&_embed&per_page=${perPage}&page=${page}`
    );
    // console.log("✅ Fetched Bisesh articles:", res.data);

    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        // description: post.excerpt?.rendered || "", // ✅ added
        // content: post.content?.rendered || "",
        description: cleanHTML(post.excerpt?.rendered),
        content: cleanHTML(post.content?.rendered),
        publishedAt: post.date, // ✅ renamed for UI
        image, // ✅ main image
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Bisesh articles:", error);
    return [];
  }
};

export const getRajdhaniArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=32&_embed&per_page=${perPage}&page=${page}`
    );
    // console.log("✅ Fetched Rajdhani articles:", res.data);

    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        description: cleanHTML(post.excerpt?.rendered),
        content: cleanHTML(post.content?.rendered),
        publishedAt: post.date,
        image,
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Rajdhani articles:", error);
    return [];
  }
};

export const getRajnitiArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=31&_embed&per_page=${perPage}&page=${page}`
    );
    // console.log("✅ Fetched Rajniti articles:", res.data);

    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        description: cleanHTML(post.excerpt?.rendered),
        content: cleanHTML(post.content?.rendered),
        publishedAt: post.date,
        image,
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Rajniti articles:", error);
    return [];
  }
};

export const getRajyaArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=34&_embed&per_page=${perPage}&page=${page}`
    );
    // console.log("✅ Fetched Rajya articles:", res.data);

    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        description: cleanHTML(post.excerpt?.rendered),
        content: cleanHTML(post.content?.rendered),
        publishedAt: post.date,
        image,
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Rajya articles:", error);
    return [];
  }
};

export const getZillaArticles = async (page = 1, perPage = 20) => {
  try {
    const res = await axios.get(
      `${API_URL}/posts?categories=33&_embed&per_page=${perPage}&page=${page}`
    );
    // console.log("✅ Fetched Zilla articles:", res.data);

    return res.data.map((post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image";

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        // description: post.excerpt?.rendered || "",
        // content: post.content?.rendered || "",
        description: cleanHTML(post.excerpt?.rendered),
        content: cleanHTML(post.content?.rendered),
        publishedAt: post.date,
        image,
        author: post._embedded?.author?.[0]?.name || "Anonymous",
        link: post.link,
      };
    });
  } catch (error) {
    console.error("❌ Error fetching Zilla articles:", error);
    return [];
  }
};

// GET Previous Article by date
export const getPreviousArticle = async (publishedAt) => {
  const res = await axios.get(
    `${API_URL}/posts?before=${publishedAt}&orderby=date&order=desc&per_page=1&_embed`
  );

  const post = res.data?.[0];
  if (!post) return null;

  return {
    title: post.title.rendered,
    slug: post.slug,
  };
};

// GET Next Article by date
export const getNextArticle = async (publishedAt) => {
  const res = await axios.get(
    `${API_URL}/posts?after=${publishedAt}&orderby=date&order=asc&per_page=1&_embed`
  );

  const post = res.data?.[0];
  if (!post) return null;

  return {
    title: post.title.rendered,
    slug: post.slug,
  };
};
