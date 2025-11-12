// import React, { useEffect, useState } from "react";
// import { Search } from "lucide-react";

// const Navbar = () => {
//   const [time, setTime] = useState("");
//   const [weather, setWeather] = useState({ city: "New York, US", temp: "9.4°C" });

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString("en-US", {
//         month: "short",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//       setTime(formatted.replace(",", " -"));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     "Latest News",
//     "Business",
//     "Finance",
//     "Health",
//     "Politics",
//     "Fashion",
//     "Real Estate",
//     "Travel",
//     "Entertainment",
//     "Sports",
//     "Tech",
//     "Podcast",
//   ];

//   return (
//     <header className="w-full">
//       {/* Top White Bar */}
//       <div className="border-b border-gray-200 bg-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 lg:px-10 text-sm text-gray-600">
//           <div>{time}</div>
//           <h1 className="text-2xl font-extrabold tracking-tight">
//             news<span className="text-red-600">flash</span>
//           </h1>
//           <div className="text-blue-600 font-medium">
//             {weather.city}: <span className="text-gray-800">{weather.temp}</span>
//           </div>
//         </div>
//       </div>

//       {/* Red Category Bar */}
//       <div className="bg-red-600 text-white">
//         <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 lg:px-10">
//           <ul className="flex flex-wrap items-center gap-5 text-sm font-medium">
//             {categories.map((cat, i) => (
//               <li
//                 key={i}
//                 className="hover:underline cursor-pointer flex items-center"
//               >
//                 {cat}
//                 {i !== categories.length - 1 && (
//                   <span className="mx-3 opacity-40">|</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <button className="p-1 rounded-full border border-white/40 hover:bg-white/20 transition">
//             <Search size={18} />
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Search, Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { getCategories } from "../api/category.js";

// const Navbar = () => {
//   const [categories, setCategories] = useState([]);
//   const [time, setTime] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getCategories();
//       setCategories(data || []);
//     };
//     fetch();
//   }, []);

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString("en-US", {
//         month: "short",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//       setTime(formatted.replace(",", " -"));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="w-full border-b border-gray-200 shadow-sm">
//       {/* Top White Bar */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 lg:px-10 text-sm text-gray-600">
//           <div>{time}</div>

//           <Link
//             to="/"
//             className="text-2xl font-extrabold tracking-tight text-gray-900"
//           >
//             news<span className="text-red-600">flash</span>
//           </Link>

//           <button
//             onClick={() => setMenuOpen((prev) => !prev)}
//             className="xl:hidden text-gray-700 hover:text-red-600 transition"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           <div className="hidden xl:block text-blue-600 font-medium">
//             Odisha, IN: <span className="text-gray-800">27.2°C</span>
//           </div>
//         </div>
//       </div>

//       {/* Red Category Bar (Desktop) */}
//       <div className="bg-red-600 text-white hidden xl:block">
//         <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 lg:px-10">
//           <ul className="flex flex-wrap items-center gap-5 text-sm font-medium">
//             {categories.length > 0 ? (
//               categories.map((cat, i) => (
//                 <li key={cat.id || i}>
//                   <Link
//                     to={`/category/${cat.slug || cat.name}`}
//                     className={`hover:underline transition ${
//                       location.pathname === `/category/${cat.slug}` ? "font-semibold" : ""
//                     }`}
//                   >
//                     {cat.name}
//                   </Link>
//                   {i !== categories.length - 1 && (
//                     <span className="mx-3 opacity-40">|</span>
//                   )}
//                 </li>
//               ))
//             ) : (
//               <li className="text-white/70">Loading categories...</li>
//             )}
//           </ul>
//           <button className="p-1 rounded-full border border-white/40 hover:bg-white/20 transition">
//             <Search size={18} />
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`xl:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-6 py-4 space-y-3 text-gray-800 text-sm font-medium">
//           {categories.map((cat, i) => (
//             <Link
//               key={cat.id || i}
//               to={`/category/${cat.slug || cat.name}`}
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-red-600 transition"
//             >
//               {cat.name}
//             </Link>
//           ))}
//           <div className="border-t pt-3 flex justify-between items-center">
//             <span className="text-gray-600 text-xs">{time}</span>
//             <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
//               <Search size={16} /> Search
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Search, Menu, X, ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { getCategories } from "../api/category.js";

// const Navbar = () => {
//   const [categories, setCategories] = useState([]);
//   const [time, setTime] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showDistricts, setShowDistricts] = useState(false);
//   const location = useLocation();

//   // 🏙️ District Names
//   const districtNames = [
//     "ଅନୁଗୁଳ", "ବଲାଙ୍ଗିର", "ବାଲେଶ୍ଵର", "ବରଗଡ଼", "ଭଦ୍ରକ", "ବୌଦ୍ଧ", "କଟକ",
//     "ଦେବଗଡ଼", "ଢେଙ୍କାନାଳ", "ଗଜପତି", "ଗଞ୍ଜାମ", "ଜଗତସିଂହପୁର", "ଝାରସୁଗୁଡା",
//     "କଳାହାଣ୍ଡି", "କେନ୍ଦୁଝର", "କେନ୍ଦ୍ରାପଡ଼ା", "ଖୋର୍ଦ୍ଧା", "କୋରାପୁଟ",
//     "ମାଲକାନଗିରି", "ମୟୂରଭଞ୍ଜ", "ନବରଙ୍ଗପୁର", "ନୟାଗଡ଼", "ନୂଆପଡ଼ା", "ପୁରୀ",
//     "ରାୟଗଡ଼ା", "ସମ୍ବଲପୁର", "ସୁବର୍ଣ୍ଣପୁର", "ସୁନ୍ଦରଗଡ଼", "ଟିଟିଲାଗଡ଼", "ଯାଜପୁର",
//   ];

//   // 🧭 Fetch categories from Strapi
//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getCategories();
//       setCategories(data || []);
//     };
//     fetch();
//   }, []);

//   // 🧮 Split categories
//   const districtCategories = categories.filter((c) =>
//     districtNames.includes(c.name?.trim())
//   );
//   const otherCategories = categories.filter(
//     (c) => !districtNames.includes(c.name?.trim()) && c.name !== "ଜିଲ୍ଲା"
//   );

//   // 🕒 Update Time
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString("en-US", {
//         month: "short",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//       setTime(formatted.replace(",", " -"));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="w-full border-b border-gray-200 shadow-sm relative z-[100]">
//       {/* 🔹 Top White Bar */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 lg:px-10 text-sm text-gray-600">
//           {/* Left: Time */}
//           <div>{time}</div>

//           {/* Center: Logo */}
//           <Link
//             to="/"
//             className="text-2xl font-extrabold tracking-tight text-gray-900"
//           >
//             news<span className="text-red-600">flash</span>
//           </Link>

//           {/* Right: Weather + Menu */}
//           <div className="flex items-center gap-4">
//             <div className="hidden xl:block text-blue-600 font-medium">
//               Odisha, IN: <span className="text-gray-800">27.2°C</span>
//             </div>
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="xl:hidden text-gray-700 hover:text-red-600 transition"
//             >
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🔴 Red Category Bar (Desktop) */}
//       <div className="bg-red-600 text-white hidden xl:block">
//         <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 lg:px-10">
//           <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
//             {otherCategories.map((cat, i) => (
//               <li key={cat.id || i}>
//                 <Link
//                   to={`/category/${cat.slug || cat.name}`}
//                   className={`hover:underline transition ${
//                     location.pathname === `/category/${cat.slug}`
//                       ? "font-semibold"
//                       : ""
//                   }`}
//                 >
//                   {cat.name}
//                 </Link>
//               </li>
//             ))}

//             {/* 🏙️ District Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => setShowDistricts(true)}
//               onMouseLeave={() => setShowDistricts(false)}
//             >
//               <button className="flex items-center gap-1 hover:underline">
//                 ଜିଲ୍ଲା{" "}
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform ${
//                     showDistricts ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {/* Dropdown - aligned slightly left, compact, no scroll */}
//               <div
//                 className={`absolute left-[42%] -translate-x-1/2 top-full bg-white text-gray-900 border-t w-[550px] mt-2 shadow-lg transition-all duration-300 rounded-lg overflow-hidden ${
//                   showDistricts
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }`}
//                 style={{
//                   overflowX: "hidden",
//                   overflowY: "hidden",
//                 }}
//               >
//                 <div className="grid grid-cols-3 gap-x-6 gap-y-3 p-6 text-sm font-medium">
//                   {districtCategories.map((dist) => (
//                     <Link
//                       key={dist.id}
//                       to={`/category/${dist.slug || dist.name}`}
//                       className="hover:text-red-600 whitespace-nowrap truncate"
//                     >
//                       {dist.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </li>
//           </ul>

//           {/* 🔍 Search Icon */}
//           <button className="p-1 rounded-full border border-white/40 hover:bg-white/20 transition">
//             <Search size={18} />
//           </button>
//         </nav>
//       </div>

//       {/* 📱 Mobile Dropdown Menu */}
//       <div
//         className={`xl:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-6 py-4 space-y-3 text-gray-800 text-sm font-medium">
//           {otherCategories.map((cat, i) => (
//             <Link
//               key={cat.id || i}
//               to={`/category/${cat.slug || cat.name}`}
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-red-600 transition"
//             >
//               {cat.name}
//             </Link>
//           ))}

//           {/* 🏙️ Mobile District Toggle */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full hover:text-red-600"
//               onClick={() => setShowDistricts((s) => !s)}
//             >
//               ଜିଲ୍ଲା
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform ${
//                   showDistricts ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             <div
//               className={`${
//                 showDistricts ? "max-h-[400px] mt-3" : "max-h-0"
//               } overflow-hidden transition-all duration-300`}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 {districtCategories.map((dist) => (
//                   <Link
//                     key={dist.id}
//                     to={`/category/${dist.slug || dist.name}`}
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowDistricts(false);
//                     }}
//                     className="block hover:text-red-600"
//                   >
//                     {dist.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="border-t pt-3 flex justify-between items-center">
//             <span className="text-gray-600 text-xs">{time}</span>
//             <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
//               <Search size={16} /> Search
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useEffect, useState } from "react";
// import { Search, Menu, X, ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { getCategories } from "../api/category.js";

// const Navbar = () => {
//   const [categories, setCategories] = useState([]);
//   const [time, setTime] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showDistricts, setShowDistricts] = useState(false);
//   const location = useLocation();

//   const districtNames = [
//     "ଅନୁଗୁଳ","ବଲାଙ୍ଗିର","ବାଲେଶ୍ଵର","ବରଗଡ଼","ଭଦ୍ରକ","ବୌଦ୍ଧ","କଟକ",
//     "ଦେବଗଡ଼","ଢେଙ୍କାନାଳ","ଗଜପତି","ଗଞ୍ଜାମ","ଜଗତସିଂହପୁର","ଝାରସୁଗୁଡା",
//     "କଳାହାଣ୍ଡି","କେନ୍ଦୁଝର","କେନ୍ଦ୍ରାପଡ଼ା","ଖୋର୍ଦ୍ଧା","କୋରାପୁଟ",
//     "ମାଲକାନଗିରି","ମୟୂରଭଞ୍ଜ","ନବରଙ୍ଗପୁର","ନୟାଗଡ଼","ନୂଆପଡ଼ା","ପୁରୀ",
//     "ରାୟଗଡ଼ା","ସମ୍ବଲପୁର","ସୁବର୍ଣ୍ଣପୁର","ସୁନ୍ଦରଗଡ଼","ଟିଟିଲାଗଡ଼","ଯାଜପୁର"
//   ];

//   // ✅ Fetch categories
//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getCategories();
//       setCategories(data || []);
//     };
//     fetch();
//   }, []);

//   // ✅ Filter districts vs others
//   const districtCategories = categories.filter((c) =>
//     districtNames.includes(c.name?.trim())
//   );
//   const otherCategories = categories.filter(
//     (c) => !districtNames.includes(c.name?.trim()) && c.name !== "ଜିଲ୍ଲା"
//   );

//   // ✅ Live Time
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString("en-US", {
//         month: "short",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//       setTime(formatted.replace(",", " -"));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="w-full relative z-[100] shadow-sm border-b border-gray-100 bg-white/80 backdrop-blur-md">
//       {/* 🔹 Top Bar */}
//       <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-10 text-xs sm:text-sm font-medium tracking-wide">
//           <span className="opacity-90">{time}</span>

//           <Link
//             to="/"
//             className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold"
//           >
//             <img
//               src="/logo.png"
//               alt="Janjagaran"
//               className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md p-1"
//             />
//             {/* <span className="text-white font-semibold">
//               Jan<span className="text-yellow-300">Jagaran</span>
//             </span> */}
//           </Link>

//           <div className="flex items-center gap-3">
//             <span className="hidden md:inline-block text-yellow-200 font-semibold">
//               Odisha, IN <span className="text-white">27.2°C</span>
//             </span>
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="xl:hidden p-1 text-white hover:text-yellow-300 transition"
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🔴 Main Navigation (Desktop) */}
//       <nav className="hidden xl:flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-10 py-2 bg-white text-gray-800 font-medium">
//         <ul className="flex flex-wrap items-center gap-6 text-[15px]">
//           {otherCategories.map((cat, i) => (
//             <li key={cat.id || i}>
//               <Link
//                 to={`/category/${cat.slug || cat.name}`}
//                 className={`hover:text-red-600 transition-colors ${
//                   location.pathname === `/category/${cat.slug}` ? "text-red-600 font-semibold" : ""
//                 }`}
//               >
//                 {cat.name}
//               </Link>
//             </li>
//           ))}

//           {/* 🏙️ District Dropdown */}
//           <li
//             className="relative"
//             onMouseEnter={() => setShowDistricts(true)}
//             onMouseLeave={() => setShowDistricts(false)}
//           >
//             <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
//               ଜିଲ୍ଲା
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform duration-300 ${
//                   showDistricts ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             {/* Dropdown */}
//             <div
//               className={`absolute left-1/2 -translate-x-1/2 top-full bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl w-[600px] mt-2 rounded-2xl transition-all duration-300 overflow-hidden ${
//                 showDistricts
//                   ? "opacity-100 visible translate-y-0"
//                   : "opacity-0 invisible -translate-y-2"
//               }`}
//             >
//               <div className="grid grid-cols-3 gap-x-6 gap-y-3 p-6 text-sm text-gray-800">
//                 {districtCategories.map((dist) => (
//                   <Link
//                     key={dist.id}
//                     to={`/category/${dist.slug || dist.name}`}
//                     className="hover:text-red-600 whitespace-nowrap transition-colors"
//                   >
//                     {dist.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </li>
//         </ul>

//         <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
//           <Search size={18} />
//         </button>
//       </nav>

//       {/* 📱 Mobile Dropdown */}
//       <div
//         className={`xl:hidden bg-white overflow-hidden transition-all duration-500 border-t ${
//           menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-5 py-4 space-y-4 text-gray-800 text-sm font-medium">
//           {otherCategories.map((cat, i) => (
//             <Link
//               key={cat.id || i}
//               to={`/category/${cat.slug || cat.name}`}
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-red-600 transition"
//             >
//               {cat.name}
//             </Link>
//           ))}

//           {/* Districts Mobile */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full hover:text-red-600"
//               onClick={() => setShowDistricts((s) => !s)}
//             >
//               ଜିଲ୍ଲା
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform ${
//                   showDistricts ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             <div
//               className={`${
//                 showDistricts ? "max-h-[400px] mt-3" : "max-h-0"
//               } overflow-hidden transition-all duration-300`}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 {districtCategories.map((dist) => (
//                   <Link
//                     key={dist.id}
//                     to={`/category/${dist.slug || dist.name}`}
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowDistricts(false);
//                     }}
//                     className="block hover:text-red-600 transition text-sm border-b border-gray-100 pb-1"
//                   >
//                     {dist.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="border-t pt-3 flex justify-between items-center text-gray-600">
//             <span className="text-xs">{time}</span>
//             <button className="flex items-center gap-2 hover:text-red-600 transition">
//               <Search size={16} /> Search
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Search, Menu, X, ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { getCategories } from "../api/category.js";

// const Navbar = () => {
//   const [categories, setCategories] = useState([]);
//   const [time, setTime] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showDistricts, setShowDistricts] = useState(false);
//   const location = useLocation();

//   const districtNames = [
//     "ଅନୁଗୁଳ", "ବଲାଙ୍ଗିର", "ବାଲେଶ୍ଵର", "ବରଗଡ଼", "ଭଦ୍ରକ", "ବୌଦ୍ଧ", "କଟକ",
//     "ଦେବଗଡ଼", "ଢେଙ୍କାନାଳ", "ଗଜପତି", "ଗଞ୍ଜାମ", "ଜଗତସିଂହପୁର", "ଝାରସୁଗୁଡା",
//     "କଳାହାଣ୍ଡି", "କେନ୍ଦୁଝର", "କେନ୍ଦ୍ରାପଡ଼ା", "ଖୋର୍ଦ୍ଧା", "କୋରାପୁଟ",
//     "ମାଲକାନଗିରି", "ମୟୂରଭଞ୍ଜ", "ନବରଙ୍ଗପୁର", "ନୟାଗଡ଼", "ନୂଆପଡ଼ା", "ପୁରୀ",
//     "ରାୟଗଡ଼ା", "ସମ୍ବଲପୁର", "ସୁବର୍ଣ୍ଣପୁର", "ସୁନ୍ଦରଗଡ଼", "ଟିଟିଲାଗଡ଼", "ଯାଜପୁର"
//   ];

//   const special =[
//     "ସାହିତ୍ୟ" , "ମନୋରଞ୍ଜନ" , "ସ୍ବାସ୍ଥ୍ୟ" , "ଶିକ୍ଷା"
//   ]

//   // Fetch categories
//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getCategories();
//       setCategories(data || []);
//     };
//     fetch();
//   }, []);

//   const districtCategories = categories.filter((c) =>
//     districtNames.includes(c.name?.trim())
//   );
//   const otherCategories = categories.filter(
//     (c) => !districtNames.includes(c.name?.trim()) && c.name !== "ଜିଲ୍ଲା"
//   );

//   // Clock
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString("en-US", {
//         month: "short",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//       setTime(formatted.replace(",", " -"));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="sticky top-0 z-[100] w-full bg-white shadow-md">
//       {/* 🔹 Top Info Bar */}
//       <div className="bg-[#BADFDB] border-b border-gray-200">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-10 text-gray-700 text-sm">
//           <span>{time}</span>
//           <Link to="/" className="flex items-center justify-center">
//             <img
//               src="/logo.png"
//               alt="Janjagaran"
//               className="h-12 sm:h-14 w-auto"
//             />
//           </Link>
//           <div className="flex items-center gap-3">
//             <div className="hidden md:block text-blue-700 font-medium text-xs sm:text-sm">
//               Odisha, IN: <span className="text-gray-900">27.2°C</span>
//             </div>
//             {/* ✅ Hamburger visible only <1024px */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="block lg:hidden text-gray-700 hover:text-red-600 transition"
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🔴 Category Navigation Bar */}
//       <div className="max-[768px]:hidden min-[769px]:block bg-[#FCF9EA] border-y border-gray-200 text-gray-900">
//   <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-10 ">
//           {/* ✅ Single-line Scrollable Category Row */}
//           <ul className="flex items-center gap-6 text-sm font-medium whitespace-nowrap">
//             {otherCategories.map((cat, i) => (
//               <li key={cat.id || i}>
//                 <Link
//                   to={`/category/${cat.slug || cat.name}`}
//                   className={`hover:text-red-600 transition ${
//                     location.pathname === `/category/${cat.slug}`
//                       ? "font-semibold text-red-600"
//                       : ""
//                   }`}
//                 >
//                   {cat.name}
//                 </Link>
//               </li>
//             ))}

//             {/* 🏙️ District Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => setShowDistricts(true)}
//               onMouseLeave={() => setShowDistricts(false)}
//             >
//               <button className="flex items-center gap-1 hover:text-red-600 transition">
//                 ଜିଲ୍ଲା
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform ${
//                     showDistricts ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {/* Dropdown */}
//               <div
//                 className={`absolute left-[50%] -translate-x-1/2 top-full bg-white text-gray-900 border shadow-lg w-[600px] mt-2 rounded-xl transition-all duration-300 ${
//                   showDistricts
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }`}
//               >
//                 <div className="grid grid-cols-3 gap-x-6 gap-y-3 p-6 text-sm font-medium">
//                   {districtCategories.map((dist) => (
//                     <Link
//                       key={dist.id}
//                       to={`/category/${dist.slug || dist.name}`}
//                       className="hover:text-red-600 whitespace-nowrap truncate"
//                     >
//                       {dist.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </li>
//           </ul>

//           {/* Search Icon */}
//           <button className="flex-shrink-0 ml-4 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
//             <Search size={18} />
//           </button>
//         </nav>
//       </div>

//       {/* 📱 Mobile Dropdown */}
//       <div
//         className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-4 sm:px-6 py-4 space-y-3 text-gray-800 text-sm font-medium">
//           {otherCategories.map((cat, i) => (
//             <Link
//               key={cat.id || i}
//               to={`/category/${cat.slug || cat.name}`}
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-red-600 transition"
//             >
//               {cat.name}
//             </Link>
//           ))}

//           {/* 🏙️ Mobile District Dropdown */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full hover:text-red-600"
//               onClick={() => setShowDistricts((s) => !s)}
//             >
//               ଜିଲ୍ଲା
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform ${
//                   showDistricts ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             <div
//               className={`${
//                 showDistricts ? "max-h-[540px] mt-3" : "max-h-0"
//               } overflow-y-auto transition-all duration-300 border-t border-gray-100`}
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-2 py-3">
//                 {districtCategories.map((dist) => (
//                   <Link
//                     key={dist.id}
//                     to={`/category/${dist.slug || dist.name}`}
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowDistricts(false);
//                     }}
//                     className="block py-1 text-[13px] sm:text-sm hover:text-red-600"
//                   >
//                     {dist.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="border-t pt-3 flex justify-between items-center">
//             <span className="text-gray-600 text-xs">{time}</span>
//             <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
//               <Search size={16} /> Search
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// 2//11/2025 

// import React, { useEffect, useState } from "react";
// import { Search, Menu, X, ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { getCategories } from "../api/category.js";

// const Navbar = () => {
//   const [categories, setCategories] = useState([]);
//   const [time, setTime] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showDistricts, setShowDistricts] = useState(false);
//   const [showSpecial, setShowSpecial] = useState(false);
//   const location = useLocation();

//   const districtNames = [
//     "ଅନୁଗୁଳ", "ବଲାଙ୍ଗିର", "ବାଲେଶ୍ଵର", "ବରଗଡ଼", "ଭଦ୍ରକ", "ବୌଦ୍ଧ", "କଟକ",
//     "ଦେବଗଡ଼", "ଢେଙ୍କାନାଳ", "ଗଜପତି", "ଗଞ୍ଜାମ", "ଜଗତସିଂହପୁର", "ଝାରସୁଗୁଡା",
//     "କଳାହାଣ୍ଡି", "କେନ୍ଦୁଝର", "କେନ୍ଦ୍ରାପଡ଼ା", "ଖୋର୍ଦ୍ଧା", "କୋରାପୁଟ",
//     "ମାଲକାନଗିରି", "ମୟୂରଭଞ୍ଜ", "ନବରଙ୍ଗପୁର", "ନୟାଗଡ଼", "ନୂଆପଡ଼ା",
//     "ପୁରୀ", "ରାୟଗଡ଼ା", "ସମ୍ବଲପୁର", "ସୁବର୍ଣ୍ଣପୁର", "ସୁନ୍ଦରଗଡ଼",
//     "ଟିଟିଲାଗଡ଼", "ଯାଜପୁର"
//   ];

//   const special = ["ସାହିତ୍ୟ", "ମନୋରଞ୍ଜନ", "ସ୍ବାସ୍ଥ୍ୟ", "ଶିକ୍ଷା"];

//   // Fetch categories
//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getCategories();
//       setCategories(data || []);
//     };
//     fetch();
//   }, []);

//   const districtCategories = categories.filter((c) =>
//     districtNames.includes(c.name?.trim())
//   );

//   const otherCategories = categories.filter(
//     (c) =>
//       !districtNames.includes(c.name?.trim()) &&
//       c.name !== "ଜିଲ୍ଲା" &&
//       c.name.toLowerCase() !== "miscellaneous" &&
//       !special.includes(c.name?.trim())
//   );

//   // Clock
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString("en-US", {
//         month: "short",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//       });
//       setTime(formatted.replace(",", " -"));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-md shadow-md transition-all duration-300">
//       {/* 🔹 Top Header */}
//       <div className="bg-gradient-to-r from-red-600 to-rose-500 text-white border-b border-white/20">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-10 text-xs sm:text-sm font-medium">
//           <span className="opacity-90">{time}</span>

//           <Link to="/" className="flex items-center justify-center">
//             <img src="/janjagaran.png" alt="Janjagaran" className="h-12 sm:h-16 w-auto rounded-md" />
//           </Link>

//           <div className="flex items-center gap-3">
//             <span className="hidden md:block text-yellow-200 font-semibold">
//               Odisha, IN <span className="text-white">27.2°C</span>
//             </span>
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="block lg:hidden text-white hover:text-yellow-300 transition"
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🔴 Category Bar (Desktop) */}
//       <div className="hidden md:block bg-[#FCF9EA] border-y border-gray-200">
//         <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 lg:px-10">
//           <ul className="flex items-center gap-6 text-[15px] font-medium text-gray-900 whitespace-nowrap">
//             {otherCategories.map((cat, i) => (
//               <li key={cat.id || i}>
//                 <Link
//                   to={`/category/${cat.slug || cat.name}`}
//                   className={`hover:text-red-600 transition-colors ${
//                     location.pathname === `/category/${cat.slug}`
//                       ? "text-red-600 font-semibold"
//                       : ""
//                   }`}
//                 >
//                   {cat.name}
//                 </Link>
//               </li>
//             ))}

//             {/* 🏙️ District Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => setShowDistricts(true)}
//               onMouseLeave={() => setShowDistricts(false)}
//             >
//               <button className="flex items-center gap-1 hover:text-red-600 transition">
//                 ଜିଲ୍ଲା
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform duration-300 ${
//                     showDistricts ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               <div
//                 className={`absolute left-1/2 -translate-x-1/2 top-full bg-white text-gray-900 border shadow-lg w-[600px] mt-2 rounded-2xl transition-all duration-300 ${
//                   showDistricts
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }`}
//               >
//                 <div className="grid grid-cols-3 gap-x-6 gap-y-3 p-6 text-sm font-medium">
//                   {districtCategories.map((dist) => (
//                     <Link
//                       key={dist.id}
//                       to={`/category/${dist.slug || dist.name}`}
//                       className="hover:text-red-600 whitespace-nowrap truncate transition-colors"
//                     >
//                       {dist.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </li>

//             {/* 🌟 Special Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => setShowSpecial(true)}
//               onMouseLeave={() => setShowSpecial(false)}
//             >
//               <button className="flex items-center gap-1 hover:text-red-600 transition">
//                 ବିଶେଷ
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform duration-300 ${
//                     showSpecial ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               <div
//                 className={`absolute left-1/2 -translate-x-1/2 top-full bg-white text-gray-900 border shadow-lg w-[280px] mt-2 rounded-xl transition-all duration-300 ${
//                   showSpecial
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }`}
//               >
//                 <div className="grid grid-cols-2 gap-4 p-4 text-sm font-medium">
//                   {special.map((item, i) => (
//                     <Link
//                       key={i}
//                       to={`/category/${item}`}
//                       className="hover:text-red-600 whitespace-nowrap"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </li>
//           </ul>

//           <button className="flex-shrink-0 ml-4 p-2 rounded-full border border-gray-400 hover:bg-gray-100 transition">
//             <Search size={18} />
//           </button>
//         </nav>
//       </div>

//       {/* 📱 Mobile Menu */}
//       <div
//         className={`lg:hidden bg-white overflow-hidden border-t transition-all duration-500 ${
//           menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-6 py-4 space-y-4 text-gray-800 text-sm font-medium">
//           {otherCategories.map((cat, i) => (
//             <Link
//               key={cat.id || i}
//               to={`/category/${cat.slug || cat.name}`}
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-red-600 transition"
//             >
//               {cat.name}
//             </Link>
//           ))}

//           {/* Districts on Mobile */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full hover:text-red-600"
//               onClick={() => setShowDistricts((s) => !s)}
//             >
//               ଜିଲ୍ଲା
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform ${
//                   showDistricts ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             <div
//               className={`transition-all duration-300 ${
//                 showDistricts ? "max-h-[400px] mt-3" : "max-h-0"
//               } overflow-hidden`}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 {districtCategories.map((dist) => (
//                   <Link
//                     key={dist.id}
//                     to={`/category/${dist.slug || dist.name}`}
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowDistricts(false);
//                     }}
//                     className="block hover:text-red-600"
//                   >
//                     {dist.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Special Dropdown Mobile */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full hover:text-red-600"
//               onClick={() => setShowSpecial((s) => !s)}
//             >
//               ବିଶେଷ
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform ${
//                   showSpecial ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             <div
//               className={`transition-all duration-300 ${
//                 showSpecial ? "max-h-[300px] mt-3" : "max-h-0"
//               } overflow-hidden`}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 {special.map((item, i) => (
//                   <Link
//                     key={i}
//                     to={`/category/${item}`}
//                     onClick={() => {
//                       setMenuOpen(false);
//                       setShowSpecial(false);
//                     }}
//                     className="block hover:text-red-600"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="border-t pt-3 flex justify-between items-center text-gray-600">
//             <span className="text-xs">{time}</span>
//             <button className="flex items-center gap-2 hover:text-red-600 transition">
//               <Search size={16} /> Search
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



// wordpress

import React, { useEffect, useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getCategories } from "../api/category.js";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDistricts, setShowDistricts] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const location = useLocation();

  // 🏙️ District & Special Category Names
  const districtNames = [
    "ଅନୁଗୁଳ", "ବଲାଙ୍ଗିର", "ବାଲେଶ୍ଵର", "ବରଗଡ଼", "ଭଦ୍ରକ", "ବୌଦ୍ଧ", "କଟକ",
    "ଦେବଗଡ଼", "ଢେଙ୍କାନାଳ", "ଗଜପତି", "ଗଞ୍ଜାମ", "ଜଗତସିଂହପୁର", "ଝାରସୁଗୁଡା",
    "କଳାହାଣ୍ଡି", "କେନ୍ଦୁଝର", "କେନ୍ଦ୍ରାପଡ଼ା", "ଖୋର୍ଦ୍ଧା", "କୋରାପୁଟ",
    "ମାଲକାନଗିରି", "ମୟୂରଭଞ୍ଜ", "ନବରଙ୍ଗପୁର", "ନୟାଗଡ଼", "ନୂଆପଡ଼ା",
    "ପୁରୀ", "ରାୟଗଡ଼ା", "ସମ୍ବଲପୁର", "ସୁବର୍ଣ୍ଣପୁର", "ସୁନ୍ଦରଗଡ଼",
    "ଟିଟିଲାଗଡ଼", "ଯାଜପୁର"
  ];

  const specialNames = ["ସାହିତ୍ୟ", "ମନୋରଞ୍ଜନ", "ସ୍ବାସ୍ଥ୍ୟ", "ଶିକ୍ଷା"];

  // ✅ Normalize Odia text for consistent matching
  const normalize = (text = "") =>
    text.normalize("NFC").replace(/\s+/g, "").trim();

  // ✅ Fetch all categories from WordPress
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Categorize categories
  const districtCategories = categories.filter((c) =>
    districtNames.some((name) => normalize(c.name) === normalize(name))
  );

  const specialCategories = categories.filter((c) =>
    specialNames.some((name) => normalize(c.name) === normalize(name))
  );

  const otherCategories = categories.filter(
    (c) =>
      !districtNames.some((name) => normalize(c.name) === normalize(name)) &&
      !specialNames.some((name) => normalize(c.name) === normalize(name)) &&
      c.name !== "ଜିଲ୍ଲା" &&
      normalize(c.name.toLowerCase()) !== "miscellaneous"
  );

  // 🕒 Live Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted.replace(",", " -"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-md shadow-md">
      {/* 🔹 Top Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-500 text-white border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-10 text-xs sm:text-sm font-medium">
          <span className="opacity-90">{time}</span>

          <Link to="/" className="flex items-center justify-center">
            <img
              src="/janjagaran.png"
              alt="Janjagaran"
              className="h-12 sm:h-16 w-auto rounded-md"
            />
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden md:block text-yellow-200 font-semibold">
              Odisha, IN <span className="text-white">27.2°C</span>
            </span>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="block lg:hidden text-white hover:text-yellow-300 transition"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔴 Category Bar (Desktop) */}
      <div className="hidden md:block bg-[#FCF9EA] border-y border-gray-200">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 lg:px-10">
          <ul className="flex items-center gap-6 text-[15px] font-medium text-gray-900 whitespace-nowrap">
            {/* 🔸 Other Main Categories */}
            {otherCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/category/${cat.slug || cat.name}`}
                  className={`hover:text-red-600 transition-colors ${
                    location.pathname === `/category/${cat.slug}`
                      ? "text-red-600 font-semibold"
                      : ""
                  }`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}

            {/* 🏙️ District Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShowDistricts(true)}
              onMouseLeave={() => setShowDistricts(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-600 transition">
                ଜିଲ୍ଲା
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showDistricts ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full bg-white text-gray-900 border shadow-lg w-[600px] mt-2 rounded-2xl transition-all duration-300 ${
                  showDistricts
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="grid grid-cols-3 gap-x-6 gap-y-3 p-6 text-sm font-medium">
                  {districtCategories.map((dist) => (
                    <Link
                      key={dist.id}
                      to={`/category/${dist.slug}`}
                      className="hover:text-red-600 whitespace-nowrap truncate transition"
                    >
                      {dist.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* 🌟 Special Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShowSpecial(true)}
              onMouseLeave={() => setShowSpecial(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-600 transition">
                ବିଶେଷ
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showSpecial ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full bg-white text-gray-900 border shadow-lg w-[280px] mt-2 rounded-xl transition-all duration-300 ${
                  showSpecial
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="grid grid-cols-2 gap-4 p-4 text-sm font-medium">
                  {specialCategories.map((item) => (
                    <Link
                      key={item.id}
                      to={`/category/${item.slug}`}
                      className="hover:text-red-600 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <button className="flex-shrink-0 ml-4 p-2 rounded-full border border-gray-400 hover:bg-gray-100 transition">
            <Search size={18} />
          </button>
        </nav>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden border-t transition-all duration-500 ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 space-y-4 text-gray-800 text-sm font-medium">
          {otherCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-600 transition"
            >
              {cat.name}
            </Link>
          ))}

          {/* 🏙️ Districts on Mobile */}
          <div>
            <button
              className="flex items-center justify-between w-full hover:text-red-600"
              onClick={() => setShowDistricts((s) => !s)}
            >
              ଜିଲ୍ଲା
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showDistricts ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ${
                showDistricts ? "max-h-[400px] mt-3" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="grid grid-cols-2 gap-3">
                {districtCategories.map((dist) => (
                  <Link
                    key={dist.id}
                    to={`/category/${dist.slug}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setShowDistricts(false);
                    }}
                    className="block hover:text-red-600"
                  >
                    {dist.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 🌟 Specials on Mobile */}
          <div>
            <button
              className="flex items-center justify-between w-full hover:text-red-600"
              onClick={() => setShowSpecial((s) => !s)}
            >
              ବିଶେଷ
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showSpecial ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ${
                showSpecial ? "max-h-[300px] mt-3" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="grid grid-cols-2 gap-3">
                {specialCategories.map((item) => (
                  <Link
                    key={item.id}
                    to={`/category/${item.slug}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setShowSpecial(false);
                    }}
                    className="block hover:text-red-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t pt-3 flex justify-between items-center text-gray-600">
            <span className="text-xs">{time}</span>
            <button className="flex items-center gap-2 hover:text-red-600 transition">
              <Search size={16} /> Search
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;














