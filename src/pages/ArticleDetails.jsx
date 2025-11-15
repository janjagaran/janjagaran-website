// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getArticleBySlug } from "../api/article"; // ✅ your existing API function
// import { Loader2 } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import NotFound from "./NotFound";

// const ArticleDetails = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!slug) return;
//     const fetchArticle = async () => {
//       try {
//         setLoading(true);
//         const data = await getArticleBySlug(slug);
//         setArticle(data);
//       } catch (err) {
//         console.error("Error fetching article:", err);
//         setError("Failed to load the article.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [slug]);

//   if (loading)
//     return (
//       <div className="min-h-[60vh] flex justify-center items-center text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading article...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="text-center py-20 text-red-500 text-lg">{error}</div>
//     );

//     if (!article) return <NotFound />;

//   return (
//     // <div className="w-full">
//     //     <Navbar />
//     // <section className="max-w-5xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">

//     //   {/* Back Button */}
//     //   <div className="mb-6">
//     //     <Link
//     //       to={`/category/${article.category?.slug || ""}`}
//     //       className="text-red-500 text-sm font-medium hover:underline"
//     //     >
//     //       ← Back to {article.category?.name || "Articles"}
//     //     </Link>
//     //   </div>

//     //   {/* Article Header */}
//     //   <div className="mb-10">
//     //     <p className="text-sm text-gray-400 mb-2">
//     //       {article.category?.name || "News"} ·{" "}
//     //       {new Date(article.publishedAt).toLocaleDateString()}
//     //     </p>
//     //     <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//     //       {article.title}
//     //     </h1>
//     //     <p className="text-gray-600 max-w-3xl text-lg">
//     //       {article.description || ""}
//     //     </p>
//     //   </div>

//     //   {/* Article Image */}
//     //   {article.image && (
//     //     <div className="rounded-2xl overflow-hidden shadow-md mb-10">
//     //       <img
//     //         src={article.image}
//     //         alt={article.title}
//     //         className="w-full h-[480px] object-cover"
//     //       />
//     //     </div>
//     //   )}

//     //   {/* Article Body */}
//     //   <div
//     //     className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
//     //     dangerouslySetInnerHTML={{ __html: article.content }}
//     //   ></div>
//     // </section>
//     // </div>
//     <div className="w-full">
//         <Navbar/>
//         <div className="max-w-6xl mx-auto p-6 border border-gray-200 rounded-2xl bg-white mt-4 mb-6">
//       <div className="relative">
//         <img
//           src={article.image}
//           alt={article.title}
//           className="float-left mr-6 mb-4 w-full sm:w-[350px] h-auto rounded-lg object-cover"
//         />

//         <h1 className="text-2xl font-bold mb-3">{article.title}</h1>
//         <p className="text-black-400 text-base leading-relaxed text-justify font-semibold">
//           {article.description || "No description provided for this article yet."}
//         </p>

//         <div className="clear-both"></div>

//         <div className="mt-6 space-y-4">
//           {article.shortDescription && (
//             <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
//               <p>{article.shortDescription}</p>
//             </div>
//           )}
//           {article.subDescription && (
//             <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
//               <p>{article.subDescription}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default ArticleDetails;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getArticleBySlug  } from "../api/article";
// import { Loader2 } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import NotFound from "./NotFound";

// const ArticleDetails = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const liveURL = `https://www.janjagaran.com/${slug}`;

//   useEffect(() => {
//     if (!slug) return;
//     const fetchArticle = async () => {
//       try {
//         setLoading(true);
//         const data = await getArticleBySlug(slug);
//         setArticle(data);
//       } catch (err) {
//         console.error("Error fetching article:", err);
//         setError("Failed to load the article.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [slug]);

//   if (loading)
//     return (
//       <div className="min-h-[60vh] flex justify-center items-center text-gray-500">
//         <Loader2 className="animate-spin mr-2" /> Loading article...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="text-center py-20 text-red-500 text-lg">{error}</div>
//     );

//   if (!article) return <NotFound />;

//   return (
//     <div className="w-full">
//       <Navbar />

//       <div className="max-w-6xl mx-auto p-6 border border-gray-200 rounded-2xl bg-white mt-4 mb-6">
//         <div className="relative">
//           {/* Article Image */}
//           <img
//             src={article.image}
//             alt={article.title}
//             className="float-left mr-6 mb-4 w-full sm:w-[350px] h-auto rounded-lg object-cover"
//           />

//           {/* Article Title */}
//           <h1 className="text-2xl font-bold mb-3">{article.title}</h1>

//           {/* Article Description */}
//           <p className="text-black-400 text-base leading-relaxed text-justify font-semibold">
//             {article.description ||
//               "No description provided for this article yet."}
//           </p>

//           <div className="clear-both"></div>

//           {/* Extra Description Sections */}
//           <div className="mt-6 space-y-4">
//             {article.shortDescription && (
//               <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
//                 <p>{article.shortDescription}</p>
//               </div>
//             )}

//             {article.subDescription && (
//               <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
//                 <p>{article.subDescription}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ⭐ Social Share Buttons */}
//       <div className="max-w-6xl mx-auto px-6 mb-8">
//         <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
//           <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>
//           Share this article
//         </h4>

//         <div className="flex items-center gap-4 text-gray-600">

//           {/* Facebook */}
//           <a
//             href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//               liveURL
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
//           >
//             <i className="fa-brands fa-facebook-f text-xl"></i>
//           </a>

//           {/* Twitter */}
//           <a
//             href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
//               liveURL
//             )}&text=${encodeURIComponent(article.title)}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
//           >
//             <i className="fa-brands fa-twitter text-xl"></i>
//           </a>

//           {/* WhatsApp */}
//           <a
//             href={`https://wa.me/?text=${encodeURIComponent(
//               liveURL
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
//           >
//             <i className="fa-brands fa-whatsapp text-xl"></i>
//           </a>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ArticleDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getArticleBySlug,
  getPreviousArticle,
  getNextArticle,
} from "../api/article";

import { Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

const ArticleDetails = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const liveURL = `https://www.janjagaran.com/${slug}`;

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        // Load main article
        const data = await getArticleBySlug(slug);
        setArticle(data);

        // Load previous and next articles using WP native API
        if (data?.publishedAt) {
          const prev = await getPreviousArticle(data.publishedAt);
          const next = await getNextArticle(data.publishedAt);

          setPrevArticle(prev);
          setNextArticle(next);
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load the article.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-[60vh] flex justify-center items-center text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading article...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-500 text-lg">{error}</div>
    );

  if (!article) return <NotFound />;

  return (
    <div className="w-full">
      <Navbar />

      {/* Main Article Content */}
      <div className="max-w-6xl mx-auto p-6 border border-gray-200 rounded-2xl bg-white mt-4 mb-6">
        <div className="relative">
          {/* Article Image */}
          <img
            src={article.image}
            alt={article.title}
            className="float-left mr-6 mb-4 w-full sm:w-[350px] h-auto rounded-lg object-cover"
          />

          {/* Title */}
          <h1 className="text-2xl font-bold mb-3">{article.title}</h1>

          {/* Description */}
          <p className="text-black-400 text-base leading-relaxed text-justify font-semibold">
            {article.description}
          </p>

          <div className="clear-both"></div>

          {/* Extra Sections */}
          <div className="mt-6 space-y-4">
            {article.shortDescription && (
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p>{article.shortDescription}</p>
              </div>
            )}

            {article.subDescription && (
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p>{article.subDescription}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Social Share Buttons */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
          <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>
          Share this article
        </h4>

        <div className="flex items-center gap-4 text-gray-600">
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              liveURL
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <i className="fa-brands fa-facebook-f text-xl"></i>
          </a>

          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              liveURL
            )}&text=${encodeURIComponent(article.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(liveURL)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </a>
        </div>
      </div>

      {/* ⭐ Previous / Next Navigation */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-12 mt-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {/* Previous Article */}
          {prevArticle ? (
            <Link
              to={`/${prevArticle.slug}`}
              className="group flex-1 bg-white/80 backdrop-blur border border-gray-200 
                 hover:border-red-600 rounded-xl p-5 shadow-sm hover:shadow-md 
                 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center 
                        group-hover:bg-red-50 transition-all duration-300 shadow-sm"
                >
                  <i
                    className="fa-solid fa-arrow-left text-xl text-gray-500 
                        group-hover:text-red-600 transition-all duration-300"
                  ></i>
                </div>

                <div className="min-w-0">
                  <p className="text-black-900 text-xs uppercase tracking-wide">
                    Previous Article
                  </p>
                  <p
                    className="font-semibold text-base text-black-800 group-hover:text-red-600 
                        leading-snug line-clamp-2"
                  >
                    {prevArticle.title}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}

          {/* Next Article */}
          {nextArticle ? (
            <Link
              to={`/${nextArticle.slug}`}
              className="group flex-1 bg-white/80 backdrop-blur border border-gray-200 
                 hover:border-red-600 rounded-xl p-5 shadow-sm hover:shadow-md 
                 transition-all duration-300 hover:-translate-y-1 text-right"
            >
              <div className="flex items-center justify-end gap-4">
                <div className="min-w-0">
                  <p className="text-black-900 text-xs uppercase tracking-wide">
                    Next Article
                  </p>
                  <p
                    className="font-semibold text-base text-black-700 group-hover:text-red-600 
                        leading-snug line-clamp-2"
                  >
                    {nextArticle.title}
                  </p>
                </div>

                <div
                  className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center 
                        group-hover:bg-red-50 transition-all duration-300 shadow-sm"
                >
                  <i
                    className="fa-solid fa-arrow-right text-xl text-gray-500 
                        group-hover:text-red-600 transition-all duration-300"
                  ></i>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetails;
