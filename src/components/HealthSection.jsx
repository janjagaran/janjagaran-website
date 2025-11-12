// import React from "react";

// const articles = [
//   {
//     img: "https://images.unsplash.com/photo-1644982641780-b9a3f5ef5f70",
//     title: "Personalized Nutrition for Chronic Disease Management",
//     date: "Sep 13, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
//     title: "Breakthrough in Diabetes Treatment: New Drug Offers Hope for Millions",
//     date: "Sep 3, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d",
//     title: "Shaping the Future of U.S. Healthcare",
//     date: "Aug 23, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1587502537404-7d88da44372e",
//     title: "Research Unveils Potential Cure for Cystic Fibrosis",
//     date: "Aug 13, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1582719478171-2a25e8e8bfb2",
//     title:
//       "Enhancing Doctor-Patient Communication for Better Health Outcomes",
//     date: "Aug 3, 2024",
//   },
// ];

// const HealthSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="flex items-center text-lg font-semibold text-gray-900">
//           <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span> Health
//         </h2>
//         <a
//           href="#"
//           className="text-red-500 text-sm font-medium hover:underline"
//         >
//           view all →
//         </a>
//       </div>

//       {/* Main Grid */}
//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Left Big Card */}
//         <div className="relative rounded-2xl overflow-hidden shadow-sm">
//           <img
//             src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
//             alt="Health main article"
//             className="w-full h-[440px] object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-b-2xl">
//             <p className="text-xs text-gray-300 mb-1">
//               Health · Sep 23, 2024
//             </p>
//             <h3 className="text-white text-lg font-semibold leading-snug max-w-lg">
//               The Future of Healthcare Workforce Shines Bright as Non-Clinical
//               Roles Evolve
//             </h3>
//           </div>
//         </div>

//         {/* Right Small Cards */}
//         <div className="flex flex-col gap-5">
//           {articles.map((item, i) => (
//             <div
//               key={i}
//               className="flex items-start gap-4 bg-white rounded-xl hover:shadow-md transition-all p-3"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-24 h-20 object-cover rounded-lg"
//               />
//               <div className="flex-1">
//                 <p className="text-xs text-gray-400 mb-1">
//                   Health · {item.date}
//                 </p>
//                 <h4 className="text-sm font-medium leading-snug text-gray-800 hover:text-red-500 transition">
//                   {item.title}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HealthSection;


// import React, { useEffect, useState } from "react";
// import { getCrimeArticles } from "../api/article";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const HealthSection = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCrime = async () => {
//       try {
//         const data = await getCrimeArticles();
//         setArticles(data);
//       } catch (err) {
//         console.error("❌ Failed to fetch Crime (Aparadh) articles:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCrime();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-20 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading Aparadh (Crime) articles...
//       </div>
//     );

//   if (!articles.length)
//     return (
//       <div className="text-center py-20 text-gray-400">
//         No crime articles found.
//       </div>
//     );

//   // Separate featured + list
//   const [featured, ...rest] = articles;

//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="flex items-center text-lg font-semibold text-gray-900">
//           <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span> Aparadh (Crime)
//         </h2>
//         <Link
//           to="/category/aparadh"
//           className="text-red-500 text-sm font-medium hover:underline"
//         >
//           view all →
//         </Link>
//       </div>

//       {/* Main Grid */}
//       <div className="grid lg:grid-cols-2 gap-8 items-stretch">
//         {/* Left Big Card */}
//         {featured && (
//           <Link
//             to={`/article/${featured.slug}`}
//             className="relative rounded-2xl overflow-hidden shadow-sm group h-full"
//           >
//             <img
//               src={featured.image}
//               alt={featured.title}
//               className="w-full h-20px object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-b-2xl">
//               <p className="text-xs text-gray-300 mb-1">
//                 Aparadh ·{" "}
//                 {new Date(featured.publishedAt).toLocaleDateString()}
//               </p>
//               <h3 className="text-white text-lg font-semibold leading-snug max-w-lg">
//                 {featured.title}
//               </h3>
//             </div>
//           </Link>
//         )}

//         {/* Right Small Cards */}
//         <div className="flex flex-col gap-5">
//           {rest.map((item, i) => (
//             <Link
//               key={i}
//               to={`/article/${item.slug}`}
//               className="flex items-start gap-4 bg-white rounded-xl hover:shadow-md transition-all p-3"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-24 h-20 object-cover rounded-lg"
//               />
//               <div className="flex-1">
//                 <p className="text-xs text-gray-400 mb-1">
//                   Aparadh · {new Date(item.publishedAt).toLocaleDateString()}
//                 </p>
//                 <h4 className="text-sm font-medium leading-snug text-gray-800 hover:text-red-500 transition">
//                   {item.title}
//                 </h4>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HealthSection;


// import React, { useEffect, useState } from "react";
// import { getCrimeArticles } from "../api/article";
// import { Link } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const HealthSection = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCrime = async () => {
//       try {
//         const data = await getCrimeArticles();
//         // Limit to 6 articles
//         setArticles(data.slice(0, 6));
//       } catch (err) {
//         console.error("❌ Failed to fetch Crime (Aparadh) articles:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCrime();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center py-20 text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading Aparadh (Crime) articles...
//       </div>
//     );

//   if (!articles.length)
//     return (
//       <div className="text-center py-20 text-gray-400">
//         No crime articles found.
//       </div>
//     );

//   const [featured, ...rest] = articles;

//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="flex items-center text-lg font-semibold text-gray-900">
//           <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span> Aparadh (Crime)
//         </h2>
//         <Link
//           to="/category/aparadh"
//           className="text-red-500 text-sm font-medium hover:underline"
//         >
//           view all →
//         </Link>
//       </div>

//       {/* Main Grid */}
//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Left: Featured Article */}
//         {featured && (
//           <Link
//             to={`/article/${featured.slug}`}
//             className="relative block rounded-2xl overflow-hidden shadow-sm group"
//           >
//             <div className="overflow-hidden rounded-2xl">
//               <img
//                 src={featured.image}
//                 alt={featured.title}
//                 className="w-full h-[360px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
//               />
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-b-2xl">
//               <p className="text-xs text-gray-300 mb-1">
//                 Aparadh · {new Date(featured.publishedAt).toLocaleDateString()}
//               </p>
//               <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
//                 {featured.title}
//               </h3>
//             </div>
//           </Link>
//         )}

//         {/* Right: Article List */}
//         <div className="flex flex-col gap-4">
//           {rest.map((item, i) => (
//             <Link
//               key={i}
//               to={`/article/${item.slug}`}
//               className="flex items-start gap-4 bg-white rounded-xl hover:shadow-md transition-all p-3 group"
//             >
//               <div className="flex-shrink-0 overflow-hidden rounded-lg">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-24 h-20 md:w-28 md:h-24 object-cover group-hover:scale-[1.05] transition-transform"
//                 />
//               </div>
//               <div className="flex-1">
//                 <p className="text-xs text-gray-400 mb-1">
//                   Aparadh · {new Date(item.publishedAt).toLocaleDateString()}
//                 </p>
//                 <h4 className="text-sm md:text-base font-medium leading-snug text-gray-800 group-hover:text-red-500 transition line-clamp-2">
//                   {item.title}
//                 </h4>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HealthSection;

import React, { useEffect, useState } from "react";
// import { getCrimeArticles } from "../api/article";
import {getAparadhArticles} from "../api/article";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const HealthSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrime = async () => {
      try {
        const data = await getAparadhArticles();
        setArticles(data.slice(0, 6));
      } catch (err) {
        console.error("❌ Failed to fetch Crime (Aparadh) articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCrime();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading Aparadh (Crime) articles...
      </div>
    );

  if (!articles.length)
    return (
      <div className="text-center py-20 text-gray-400">
        No crime articles found.
      </div>
    );

  const [featured, ...rest] = articles;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="flex items-center text-lg sm:text-xl font-semibold text-gray-900">
          <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span> Aparadh (Crime)
        </h2>
        <Link
          to="/category/aparadh"
          className="text-red-500 text-sm sm:text-base font-medium hover:underline"
        >
          view all →
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* ✅ Featured Article - edge-to-edge modern style */}
        {featured && (
          <Link
            to={`/${featured.slug}`}
            className="relative block overflow-hidden rounded-2xl group shadow-lg"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug mb-2 drop-shadow-md group-hover:text-red-400 transition-colors duration-300">
                  {featured.title}
                </h3>
                {featured.description && (
                  <p className="text-gray-200 text-sm leading-snug mb-1 line-clamp-2 drop-shadow-md">
                    {featured.description}
                  </p>
                )}
                <p className="text-gray-300 text-xs">
                  Aparadh • {new Date(featured.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* ✅ Right Side Article List */}
        <div className="flex flex-col gap-4">
          {rest.map((item, i) => (
            <Link
              key={i}
              to={`/${item.slug}`}
              className="flex items-start gap-4 bg-white rounded-xl hover:shadow-md transition-all p-3 group"
            >
              <div className="flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-20 sm:w-28 sm:h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">
                  Aparadh • {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                <h4 className="text-sm sm:text-base font-medium leading-snug text-gray-800 group-hover:text-red-500 transition line-clamp-2">
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

export default HealthSection;




