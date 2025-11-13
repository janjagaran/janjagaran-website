// import React from "react";

// const latest = [
//   {
//     img: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
//     title: "The Future of Healthcare Workforce Shines Bright",
//     date: "Sep 25, 2024",
//     cat: "Health",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
//     title: "Bold and Beautiful: Fall 2024 Fashion Trends to Watch",
//     date: "Sep 21, 2024",
//     cat: "Fashion",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     title: "Mixed-Use Developments: The Future of Urban Living",
//     date: "Sep 20, 2024",
//     cat: "Real Estate",
//   },
// ];

// const LatestNews = () => {
//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold flex items-center">
//           <span className="text-red-500 mr-2">●</span> Latest News
//         </h3>
//         <a href="#" className="text-red-500 text-sm font-medium hover:underline">
//           view all →
//         </a>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {latest.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
//           >
//             <img src={item.img} alt={item.title} className="h-44 w-full object-cover" />
//             <div className="p-4">
//               <p className="text-sm text-gray-400">
//                 {item.cat} · {item.date}
//               </p>
//               <h4 className="text-base font-semibold mt-1">{item.title}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestNews;



// import React, { useEffect, useState } from "react";
// import { getLatestArticles } from "../../api/article.js";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const LatestNews = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLatest = async () => {
//       try {
//         const data = await getLatestArticles();
//         setArticles(data);
//       } catch (err) {
//         console.error("❌ Failed to load latest articles:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLatest();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-20 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading latest news...
//       </div>
//     );

//   if (!articles.length)
//     return (
//       <div className="text-center py-20 text-gray-400">
//         No latest articles found.
//       </div>
//     );

//   return (
//     <div>
//       {/* Section Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold flex items-center">
//           <span className="text-red-500 mr-2">●</span> Latest News
//         </h3>
//         <Link
//           to="/category/latest"
//           className="text-red-500 text-sm font-medium hover:underline"
//         >
//           view all →
//         </Link>
//       </div>

//       {/* Article Grid */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {articles.map((item) => (
//           <Link
//             to={`/article/${item.slug}`}
//             key={item.id}
//             className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition group"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="h-44 w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
//             />
//             <div className="p-4">
//               <p className="text-xs text-gray-400 mb-1">
//                 {new Date(item.publishedAt).toLocaleDateString()}
//               </p>
//               <h4 className="text-base font-semibold text-gray-800 group-hover:text-red-600 transition line-clamp-2">
//                 {item.title}
//               </h4>
//               {item.description && (
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                   {item.description}
//                 </p>
//               )}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestNews;


// src/components/LatestNews.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";
// import { getLatestArticles } from "../../api/article"; // adjust path if needed

// const LatestNews = ({ limit = 6 }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;
//     const fetch = async () => {
//       try {
//         setLoading(true);
//         const data = await getLatestArticles();
//         if (!mounted) return;
//         // limit results for UI (so mobile stays clean)
//         setArticles((data || []).slice(0, limit));
//       } catch (err) {
//         console.error("❌ Error loading latest articles:", err);
//         if (mounted) setArticles([]);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };
//     fetch();
//     return () => {
//       mounted = false;
//     };
//   }, [limit]);

//   if (loading) {
//     return (
//       <section className="max-w-7xl mx-auto px-3 sm:px-6 py-8">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-base sm:text-lg font-semibold">Latest News</h2>
//           <div className="text-sm text-gray-400">loading...</div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Array.from({ length: limit }).map((_, i) => (
//             <div
//               key={i}
//               className="rounded-lg bg-white shadow-sm animate-pulse p-3"
//               style={{ minHeight: 160 }}
//             />
//           ))}
//         </div>
//       </section>
//     );
//   }

//   if (!articles.length) {
//     return (
//       <section className="max-w-7xl mx-auto px-3 sm:px-6 py-8">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-base sm:text-lg font-semibold">Latest News</h2>
//           <Link to="/latest" className="text-sm text-red-600 font-medium">
//             view all →
//           </Link>
//         </div>
//         <div className="text-center text-gray-500 py-8">No latest articles available.</div>
//       </section>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto px-3 sm:px-6 py-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-base sm:text-lg font-semibold flex items-center gap-3">
//           <span className="w-1.5 h-5 bg-red-600 rounded-sm inline-block" />
//           Latest News
//         </h2>

//         <Link to="/latest" className="text-sm text-red-600 font-medium hover:underline">
//           view all →
//         </Link>
//       </div>

//       {/* Grid */}
//       <div
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           md:grid-cols-3
//           gap-4
//           sm:gap-5
//           md:gap-6
//         "
//       >
//         {articles.map((a) => (
//           <article
//             key={a.id}
//             className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
//           >
//             <Link to={`/article/${a.slug}`} className="block">
//               {/* image */}
//               <div className="w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-100">
//                 <img
//                   src={a.image}
//                   alt={a.title}
//                   className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-[1.03]"
//                   loading="lazy"
//                 />
//               </div>

//               {/* content */}
//               <div className="p-3 sm:p-4">
//                 <div className="text-xs text-gray-400 mb-1">
//                   {/* category & date - if category available */}
//                   {a.category ? `${a.category} • ` : ""}
//                   {a.publishedAt ? new Date(a.publishedAt).toLocaleDateString() : ""}
//                 </div>

//                 <h3
//                   className="
//                     text-sm sm:text-base font-semibold text-gray-900 
//                     mb-1 leading-tight
//                     line-clamp-2
//                   "
//                 >
//                   {a.title}
//                 </h3>

//                 {a.description && (
//                   <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-3">
//                     {a.description}
//                   </p>
//                 )}

//                 <div className="flex items-center justify-between">
//                   <span className="text-xs text-gray-500">
//                     Read → 
//                   </span>
//                   <span className="text-xs text-gray-400">
//                     {/* keep a subtle date again at right for small screens */}
//                     {a.publishedAt ? new Date(a.publishedAt).toLocaleDateString() : ""}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LatestNews;


// Already mostly responsive, just tweaked spacing and height
// Replace your file contents with this:
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLatestArticles } from "../../api/article";

const LatestNews = ({ limit = 6 }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getLatestArticles();
        setArticles((data || []).slice(0, limit));
      } catch (err) {
        console.error("❌ Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [limit]);

  if (loading) return <p className="text-center py-8 text-gray-400">Loading...</p>;
  if (!articles.length)
    return <p className="text-center py-8 text-gray-400">No latest articles found.</p>;

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
          <span className="w-1.5 h-4 sm:h-5 bg-red-600 rounded-sm" />
          Latest News
        </h2>
        <Link to="/category/aparadh" className="text-red-600 text-xs sm:text-sm hover:underline font-inter">
          view all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {articles.map((a) => (
          <Link
            key={a.id}
            to={`/${a.slug}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-44 sm:h-52 overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 sm:p-4">
              <p className="text-xs text-gray-400 mb-1">
                {a.category ? `${a.category} • ` : ""}
                {a.publishedAt ? new Date(a.publishedAt).toLocaleDateString() : ""}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-black-800 line-clamp-2 mb-1">
                {a.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{a.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;



