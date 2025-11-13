// import React, { useEffect, useState } from "react";
// import { getKhelaArticles } from "../../api/article";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const TopStories = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchKhela = async () => {
//       try {
//         const data = await getKhelaArticles();
//         setArticles(data.slice(0, 4)); // limit to 4 (1 main + 3 side)
//       } catch (err) {
//         console.error("❌ Error fetching Khela articles:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchKhela();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-20 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading Khela articles...
//       </div>
//     );

//   if (!articles.length)
//     return (
//       <div className="text-center py-20 text-gray-400">
//         No Khela articles found.
//       </div>
//     );

//   const [mainArticle, ...sideArticles] = articles;

//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="flex items-center text-lg font-semibold text-gray-900">
//           <span className="w-[3px] h-5 bg-red-600 mr-2 rounded"></span> ଖେଳ (Khela)
//         </h2>
//         <Link
//           to="/category/khela"
//           className="text-red-500 text-sm font-medium hover:underline"
//         >
//           view all →
//         </Link>
//       </div>

//       {/* Layout */}
//       <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition">
//         {/* LEFT SIDE: Main Article */}
//         {mainArticle && (
//           <Link
//             to={`/article/${mainArticle.slug}`}
//             className="block group overflow-hidden rounded-2xl relative"
//           >
//             <img
//               src={mainArticle.image}
//               alt={mainArticle.title}
//               className="w-full h-[340px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.05]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
//               <p className="text-xs text-gray-300 mb-1">
//                 {new Date(mainArticle.publishedAt).toLocaleDateString()}
//               </p>
//               <h3 className="text-white text-xl font-semibold leading-snug mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
//                 {mainArticle.title}
//               </h3>
//               <p className="text-gray-300 text-sm line-clamp-2">
//                 {mainArticle.description}
//               </p>
//             </div>
//           </Link>
//         )}

//         {/* RIGHT SIDE: 3 Small Articles */}
//         <div className="space-y-5">
//           {sideArticles.map((item, i) => (
//             <Link
//               key={i}
//               to={`/article/${item.slug}`}
//               className="flex items-start gap-4 group"
//             >
//               <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-lg">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.05]"
//                 />
//               </div>
//               <div className="flex-1">
//                 <p className="text-xs text-gray-400 mb-1">
//                   {new Date(item.publishedAt).toLocaleDateString()}
//                 </p>
//                 <h4 className="text-sm md:text-base font-medium text-gray-800 leading-snug group-hover:text-red-500 transition line-clamp-2">
//                   {item.title}
//                 </h4>
//                 <p className="text-xs text-gray-500 mt-1 line-clamp-2">
//                   {item.description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopStories;

import React, { useEffect, useState } from "react";
import { getKhelaArticles } from "../../api/article";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const TopStories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKhela = async () => {
      try {
        const data = await getKhelaArticles();
        setArticles(data.slice(0, 4));
      } catch (err) {
        console.error("❌ Error fetching Khela articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchKhela();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading Khela articles...
      </div>
    );

  if (!articles.length)
    return <div className="text-center py-20 text-gray-400">No Khela articles found.</div>;

  const [mainArticle, ...sideArticles] = articles;

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="flex items-center text-base sm:text-lg font-semibold text-gray-900">
          <span className="w-[2px] h-5 bg-red-600 mr-2 rounded" /> ଖେଳ (Khela)
        </h2>
        <Link to="/category/khela" className="text-red-600 text-xs sm:text-sm font-medium hover:underline font-inter">
          view all →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
        {/* LEFT MAIN */}
        {mainArticle && (
          <Link
            to={`/${mainArticle.slug}`}
            className="block group overflow-hidden rounded-2xl relative"
          >
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="w-full h-60 sm:h-72 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <p className="text-[11px] sm:text-xs text-gray-300 mb-1">
                {new Date(mainArticle.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug line-clamp-2 group-hover:text-red-400 transition">
                {mainArticle.title}
              </h3>
            </div>
          </Link>
        )}

        {/* RIGHT SIDEBAR ARTICLES */}
        <div className="space-y-4 sm:space-y-5">
          {sideArticles.map((item, i) => (
            <Link key={i} to={`/${item.slug}`} className="flex items-start gap-3 sm:gap-4 group">
              <div className="flex-shrink-0 w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex-1">
                <p className="text-[11px] sm:text-xs text-gray-400 mb-1">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                <h4 className="text-sm sm:text-base font-bold text-black-800 line-clamp-2 group-hover:text-red-500 transition">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStories;

