// import React, { useState } from "react";

// const businessArticles = [
//   {
//     title:
//       "Consumer Confidence Soars as Retail Sales Surge, Signaling Strong Economic Recovery",
//     date: "Sep 15, 2024",
//   },
//   {
//     title: "Virtual Reality Shopping Takes Center Stage",
//     date: "Sep 5, 2024",
//   },
//   {
//     title:
//       "Renewable Energy Sector Soars with Record Investments from Major Corporations",
//     date: "Aug 15, 2024",
//   },
//   {
//     title:
//       "Tech Giant Unveils Groundbreaking AI Platform, Revolutionizing Digital Commerce",
//     date: "Aug 5, 2024",
//   },
// ];

// const fashionArticles = [
//   {
//     img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
//     title: "Bold and Beautiful: Fall 2024 Fashion Trends to Watch",
//     date: "Sep 21, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
//     title: "Breaking Boundaries and Embracing Gender-Fluid Fashion",
//     date: "Sep 11, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
//     title: "Monochrome Magic: Mastering the Art of Single-Color Outfits",
//     date: "Sep 1, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
//     title: "Cottagecore Chic: Embracing Nostalgic & Nature-Inspired Trends",
//     date: "Sep 11, 2024",
//   },
// ];

// const realEstateArticles = [
//   {
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     title: "Mixed-Use Developments Redefine Urban Living in 2024",
//     date: "Sep 18, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//     title: "Luxury Home Demand Rises Despite Market Shifts",
//     date: "Sep 9, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
//     title: "Green Architecture: Designing for a Sustainable Future",
//     date: "Aug 28, 2024",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     title: "Smart Homes 2024: The Technology Behind the Trend",
//     date: "Aug 7, 2024",
//   },
// ];

// const BusinessSection = () => {
//   const [activeTab, setActiveTab] = useState("Fashion");

//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
//       <div className="grid lg:grid-cols-3 gap-8">
//         {/* Left Column - Business List */}
//         <div className="bg-white rounded-2xl p-5 shadow-sm">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="flex items-center text-lg font-semibold text-gray-900">
//               <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>{" "}
//               Business
//             </h2>
//             <a
//               href="#"
//               className="text-red-500 text-sm font-medium hover:underline"
//             >
//               view all →
//             </a>
//           </div>

//           <div className="space-y-4">
//             {businessArticles.map((item, i) => (
//               <div key={i} className="border-b border-gray-100 pb-3 last:border-none">
//                 <p className="text-xs text-gray-400 mb-1">
//                   Business · {item.date}
//                 </p>
//                 <h4 className="text-sm font-medium text-gray-800 leading-snug hover:text-red-500 transition">
//                   {item.title}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Middle Column - Main Business Image */}
//         <div className="relative rounded-2xl overflow-hidden shadow-sm bg-white">
//           <img
//             src="https://images.unsplash.com/photo-1761578571404-f7e0fa2ff634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
//             alt="Business feature"
//             className="w-full h-[440px] object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
//           />
//           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
//             <p className="text-xs text-gray-300 mb-1">
//               Business · Sep 15, 2024
//             </p>
//             <h3 className="text-white text-lg font-semibold leading-snug max-w-lg">
//               Consumer Confidence Soars as Retail Sales Surge, Signaling Strong
//               Economic Recovery
//             </h3>
//           </div>
//         </div>

//         {/* Right Column - Fashion / Real Estate Tabs */}
//         <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
//           {/* Tabs */}
//           <div className="flex border-b border-gray-200">
//             {["Fashion", "Real Estate"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 py-3 text-sm font-medium ${
//                   activeTab === tab
//                     ? "bg-gray-100 text-gray-900"
//                     : "text-gray-500 hover:text-gray-800"
//                 } transition`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="p-5 space-y-4">
//             {(activeTab === "Fashion" ? fashionArticles : realEstateArticles).map(
//               (item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-4 hover:bg-gray-50 rounded-lg p-2 transition"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-20 h-16 object-cover rounded-md"
//                   />
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">
//                       {activeTab} · {item.date}
//                     </p>
//                     <h4 className="text-sm font-medium leading-snug text-gray-800 hover:text-red-500 transition">
//                       {item.title}
//                     </h4>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessSection;

import React, { useEffect, useState } from "react";
import { getRegionArticles } from "../api/article";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const BusinessSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const data = await getRegionArticles();
        // Limit to 6 for clean UI
        setArticles(data.slice(0, 6));
      } catch (err) {
        console.error("❌ Failed to fetch Anchalik (Region) articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRegion();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading Anchalik (Region) news...
      </div>
    );

  if (!articles.length)
    return (
      <div className="text-center py-20 text-gray-400">
        No regional articles found.
      </div>
    );

  const [featured, ...rest] = articles;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="flex items-center text-lg font-semibold text-gray-900">
          <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span> Anchalik (Region)
        </h2>
        <Link
          to="/category/anchalik"
          className="text-red-500 text-sm font-medium hover:underline"
        >
          view all →
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Featured Article */}
        {featured && (
          <Link
            to={`/${featured.slug}`}
            className="relative block rounded-2xl overflow-hidden shadow-sm group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[360px] md:h-[680px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-b-2xl">
              <p className="text-xs text-gray-300 mb-1">
                Anchalik · {new Date(featured.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                {featured.title}
              </h3>
            </div>
          </Link>
        )}

        {/* Right Articles List */}
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
                  className="w-24 h-20 md:w-28 md:h-24 object-cover group-hover:scale-[1.05] transition-transform"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">
                  Anchalik · {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                <h4 className="text-sm md:text-base font-bold leading-snug text-black-700 group-hover:text-red-500 transition line-clamp-2">
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

export default BusinessSection;

