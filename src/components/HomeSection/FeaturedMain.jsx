// import React, { useEffect, useState } from "react";
// import { getSahityaArticles } from "../../api/article";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const FeaturedMain = () => {
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSahitya = async () => {
//       try {
//         const data = await getSahityaArticles();
//         setArticle(data[0] || null); // Only 1 article
//       } catch (err) {
//         console.error("❌ Error fetching Sahitya article:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSahitya();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-20 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading Sahitya article...
//       </div>
//     );

//   if (!article)
//     return (
//       <div className="text-center py-20 text-gray-400">
//         No Sahitya article found.
//       </div>
//     );

//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
//       <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
//         {/* LEFT: Image */}
//         <div className="md:w-1/2 relative overflow-hidden group">
//           <Link to={`/article/${article.slug}`}>
//             <img
//               src={article.image}
//               alt={article.title}
//               className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
//             />
//           </Link>
//           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
//             <div className="text-white text-sm font-semibold mb-1">
//               ସାହିତ୍ୟ (Sahitya)
//             </div>
//             <div className="text-gray-300 text-xs mb-2">
//               {new Date(article.publishedAt).toLocaleDateString()}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Text Info */}
//         <div className="p-6 md:w-1/2 flex flex-col justify-center">
//           <div className="text-red-500 text-sm font-semibold mb-2">
//             ସାହିତ୍ୟ (Sahitya)
//           </div>
//           <div className="text-gray-400 text-xs mb-3">
//             {new Date(article.publishedAt).toLocaleDateString()}
//           </div>
//           <Link to={`/article/${article.slug}`}>
//             <h2 className="text-2xl font-bold leading-snug mb-3 hover:text-red-600 transition line-clamp-2">
//               {article.title}
//             </h2>
//           </Link>
//           {article.description && (
//             <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//               {article.description}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedMain;

// import React, { useEffect, useState } from "react";
// import { getSahityaArticles } from "../../api/article";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const FeaturedMain = () => {
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSahitya = async () => {
//       try {
//         const data = await getSahityaArticles();
//         setArticle(data[0] || null);
//       } catch (err) {
//         console.error("❌ Error fetching Sahitya article:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSahitya();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-20 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading Sahitya article...
//       </div>
//     );

//   if (!article)
//     return (
//       <div className="text-center py-20 text-gray-400">
//         No Sahitya article found.
//       </div>
//     );

//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
//       <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
//         {/* LEFT: Featured Image */}
//         <div className="md:w-1/2 relative group overflow-hidden">
//           <Link to={`/article/${article.slug}`}>
//             <img
//               src={article.image}
//               alt={article.title}
//               className="h-80 w-full object-cover transform transition-transform duration-700 group-hover:scale-[1.08]"
//             />
//           </Link>

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
//             <div className="text-white text-xs uppercase tracking-wide font-medium mb-2 opacity-90">
//               ସାହିତ୍ୟ (Sahitya)
//             </div>
//             <h2 className="text-white text-xl md:text-2xl font-semibold leading-tight line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
//               {article.title}
//             </h2>
//             <p className="text-gray-200 text-sm mt-2 line-clamp-2">
//               {article.description}
//             </p>
//             <div className="mt-3 text-xs text-gray-400">
//               {new Date(article.publishedAt).toLocaleDateString()}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Text Info */}
//         <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
//           <div className="text-red-600 text-sm font-semibold mb-3">
//             ସାହିତ୍ୟ (Sahitya)
//           </div>

//           <Link to={`/article/${article.slug}`}>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4 hover:text-red-600 transition-colors duration-300 line-clamp-2">
//               {article.title}
//             </h1>
//           </Link>

//           {article.description && (
//             <p className="text-gray-700 text-base leading-relaxed line-clamp-3 mb-5">
//               {article.description}
//             </p>
//           )}

//           <div className="flex items-center justify-between mt-auto">
//             <div className="text-xs text-gray-500">
//               Published on{" "}
//               <span className="font-medium text-gray-700">
//                 {new Date(article.publishedAt).toLocaleDateString()}
//               </span>
//             </div>

//             <Link
//               to={`/article/${article.slug}`}
//               className="text-red-600 font-medium text-sm hover:underline flex items-center gap-1"
//             >
//               Read full article →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedMain;

import React, { useEffect, useState } from "react";
import { getSahityaArticles } from "../../api/article";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { block } from "million/react";   // ← ADD THIS

const FeaturedMain = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSahitya = async () => {
      try {
        const data = await getSahityaArticles();
        setArticle(data[0] || null);
      } catch (err) {
        console.error("❌ Error fetching Sahitya article:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSahitya();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500 text-sm">
        <Loader2 className="animate-spin mr-2" /> Loading Sahitya article...
      </div>
    );

  if (!article)
    return (
      <div className="text-center py-20 text-gray-400 text-sm">
        No Sahitya article found.
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-8 sm:py-14">
      <div
        className="
          flex flex-col md:flex-row
          bg-white rounded-2xl overflow-hidden
          shadow-md hover:shadow-lg transition-all duration-500
        "
      >
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 relative group overflow-hidden">
          <Link to={`/${article.slug}`}>
            <img
              src={article.image}
              alt={article.title}
              className="
                w-full h-60 sm:h-72 md:h-80 lg:h-96 
                object-cover 
                transform transition-transform duration-700 group-hover:scale-[1.08]
              "
            />
          </Link>

          {/* Gradient + Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
            <div className="text-white text-[11px] sm:text-xs uppercase tracking-wide mb-1 opacity-90">
              ସାହିତ୍ୟ (Sahitya)
            </div>
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">
              {article.title}
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 line-clamp-2">
               {article.description}
            </p>
            <div className="mt-2 text-[11px] sm:text-xs text-gray-400">
              {new Date(article.publishedAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* RIGHT TEXT INFO */}
        <div className="md:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="text-red-600 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            ସାହିତ୍ୟ (Sahitya)
          </div>

          <Link to={`/${article.slug}`}>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3 hover:text-red-600 transition-colors duration-300 line-clamp-2">
              {article.title}
            </h1>
          </Link>

          {article.description && (
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
              {article.description}
            </p>
          )}

          <div className="flex items-center justify-between mt-auto">
            <span className="text-[11px] sm:text-xs text-gray-500">
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
            <Link
              to={`/${article.slug}`}
              className="text-red-600 text-xs sm:text-sm font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMain;

