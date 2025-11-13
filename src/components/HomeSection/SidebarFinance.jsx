// import React, { useEffect, useState } from "react";
// import { getZillaArticles } from "../../api/article.js";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const SidebarFinance = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchZilla = async () => {
//       try {
//         const data = await getZillaArticles();
//         setArticles(data.slice(0, 4)); // only 4 for sidebar
//       } catch (err) {
//         console.error("❌ Error fetching Zilla articles:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchZilla();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-10 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading Zilla articles...
//       </div>
//     );

//   if (!articles.length)
//     return (
//       <aside className="bg-white rounded-2xl p-6 text-center text-gray-400 shadow-sm">
//         No Zilla articles found.
//       </aside>
//     );

//   return (
//     <aside className="space-y-6">
//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         {/* Header */}
//         <div className="p-5 pb-2 flex justify-between items-center border-b">
//           <h3 className="font-semibold text-gray-900 flex items-center gap-2">
//             <span className="w-[2px] h-5 bg-red-600 rounded"></span> ଜିଲ୍ଲା (Zilla)
//           </h3>
//           <Link
//             to="/category/zilla"
//             className="text-red-500 text-sm font-medium hover:underline"
//           >
//             view all →
//           </Link>
//         </div>

//         {/* Article List */}
//         <ul className="p-5 space-y-4 text-sm text-gray-700">
//           {articles.map((item, i) => (
//             <li
//               key={i}
//               className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-none"
//             >
//               <Link
//                 to={`/article/${item.slug}`}
//                 className="block w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover hover:scale-[1.05] transition-transform"
//                 />
//               </Link>
//               <div className="flex-1">
//                 <Link
//                   to={`/article/${item.slug}`}
//                   className="block font-medium text-gray-800 hover:text-red-500 line-clamp-2"
//                 >
//                   {item.title}
//                 </Link>
//                 <p className="text-xs text-gray-500 mt-1 line-clamp-2">
//                   {item.description}
//                 </p>
//                 <p className="text-[11px] text-gray-400 mt-1">
//                   {new Date(item.publishedAt).toLocaleDateString()}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default SidebarFinance;


import React, { useEffect, useState } from "react";
import { getZillaArticles } from "../../api/article";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const SidebarFinance = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchZilla = async () => {
      try {
        const data = await getZillaArticles();
        setArticles(data.slice(0, 14));
      } catch (err) {
        console.error("❌ Error fetching Zilla articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchZilla();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-10 text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading Zilla articles...
      </div>
    );

  if (!articles.length)
    return (
      <aside className="bg-white rounded-2xl p-6 text-center text-gray-400 shadow-sm">
        No Zilla articles found.
      </aside>
    );

  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 sm:p-5 pb-2 flex justify-between items-center border-b">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-2">
            <span className="w-[2px] h-5 bg-red-600 rounded"></span> ଜିଲ୍ଲା (Zilla)
          </h3>
          <Link to="/category/zilla" className="text-red-500 text-xs sm:text-sm hover:underline font-inter">
            view all →
          </Link>
        </div>

        <ul className="p-4 sm:p-5 space-y-4 text-sm text-gray-700">
          {articles.map((item, i) => (
            <li key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-none">
              <Link to={`/${item.slug}`} className="block w-24 h-20 sm:w-28 sm:h-24 overflow-hidden rounded-lg flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-[1.05] transition-transform"
                />
              </Link>
              {/* <div className="flex-1">
                <Link to={`/${item.slug}`} className="block font-bold text-black-700 hover:text-red-500 line-clamp-2">
                  {item.title}
                </Link>
                <p className="text-[12px] sm:text-base text-black-700 mt-1 line-clamp-2 text-semibold">
                  {item.description}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
              </div> */}
              <div className="flex-1 min-w-0">
  <Link
    to={`/${item.slug}`}
    className="block font-semibold text-gray-900 hover:text-red-600 text-[13px] sm:text-[14px] leading-snug line-clamp-2 transition-colors font-inter"
  >
    {item.title}
  </Link>

  {/* Description (short and neat) */}
  {item.description && (
    <p
      className="text-[11px] sm:text-[14px] text-black-800 leading-tight mt-1 line-clamp-1 sm:line-clamp-2 font-inter"
      title={item.description} // Tooltip for full text
    >
      {item.description}
    </p>
  )}

  {/* Date */}
  <p className="text-[10px] text-gray-400 mt-1 whitespace-nowrap">
    {new Date(item.publishedAt).toLocaleDateString()}
  </p>
</div>

            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFinance;

