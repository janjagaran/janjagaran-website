// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getCategoryArticles } from "../api/category.js";
// import Navbar from "../components/Navbar.jsx";

// const CategoryPage = () => {
//   const { slug } = useParams(); // ✅ get "aparadh" from URL
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       //  console.log("Fetching articles for category:", slug);
//       setLoading(true);
//       const data = await getCategoryArticles(slug); // ✅ pass slug, not documentId
//       // console.log("Fetched articles:", data);
//       // console.log("articles," , articles)
//       setArticles(data);
//       setLoading(false);
//     };
//     fetchArticles();
//   }, [slug]);

//   if (loading) return <p className="text-center py-10">Loading articles...</p>;

//   return (
    
//     <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="w-full">
//         <Navbar />
//         </div>
//       <h1 className="text-3xl font-bold mb-8 text-center capitalize">
//         {slug.replace(/-/g, " ")}
//       </h1>

//       {articles.length === 0 ? (
//         <p className="text-gray-500 text-center">No articles found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {articles.map((article) => (
//             <div
//               key={article.id}
//               className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
//             >
//               <Link
//                 // to={`/articles/${article.documentId}`}
//                 to={`/article/${article.slug}`}
//                 // target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold mb-2 hover:text-red-600">
//                     {article.title}
//                   </h2>
//                   <p className="text-gray-600 text-sm line-clamp-3 mb-3">
//                     {article.description || "No description available."}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {new Date(article.publishedAt).toLocaleDateString("en-IN")}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCategoryArticles } from "../api/category.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const CategoryPage = () => {
  const { slug } = useParams(); // ✅ get "aparadh" from URL
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getCategoryArticles(slug); // ✅ fetch by slug
      setArticles(data);
      setLoading(false);
    };
    fetchArticles();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading articles...</p>;

  return (
    <div className="w-full">
      {/* ✅ Navbar now full-width */}
      <Navbar />

      {/* ✅ Category Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        {articles.length === 0 ? (
          <p className="text-gray-500 text-center">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <Link
                  to={`/${article.slug}`}
                  rel="noopener noreferrer"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-red-600">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                      {article.description || "No description available."}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
