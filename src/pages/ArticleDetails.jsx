import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleBySlug } from "../api/article"; // ✅ your existing API function
import { Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

const ArticleDetails = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load the article.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
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
    // <div className="w-full">
    //     <Navbar />
    // <section className="max-w-5xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
        
    //   {/* Back Button */}
    //   <div className="mb-6">
    //     <Link
    //       to={`/category/${article.category?.slug || ""}`}
    //       className="text-red-500 text-sm font-medium hover:underline"
    //     >
    //       ← Back to {article.category?.name || "Articles"}
    //     </Link>
    //   </div>

    //   {/* Article Header */}
    //   <div className="mb-10">
    //     <p className="text-sm text-gray-400 mb-2">
    //       {article.category?.name || "News"} ·{" "}
    //       {new Date(article.publishedAt).toLocaleDateString()}
    //     </p>
    //     <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    //       {article.title}
    //     </h1>
    //     <p className="text-gray-600 max-w-3xl text-lg">
    //       {article.description || ""}
    //     </p>
    //   </div>

    //   {/* Article Image */}
    //   {article.image && (
    //     <div className="rounded-2xl overflow-hidden shadow-md mb-10">
    //       <img
    //         src={article.image}
    //         alt={article.title}
    //         className="w-full h-[480px] object-cover"
    //       />
    //     </div>
    //   )}

    //   {/* Article Body */}
    //   <div
    //     className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
    //     dangerouslySetInnerHTML={{ __html: article.content }}
    //   ></div>
    // </section>
    // </div>
    <div className="w-full">
        <Navbar/>
        <div className="max-w-6xl mx-auto p-6 border border-gray-200 rounded-2xl bg-white mt-4 mb-6">
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="float-left mr-6 mb-4 w-full sm:w-[350px] h-auto rounded-lg object-cover"
        />

        <h1 className="text-2xl font-bold mb-3">{article.title}</h1>
        <p className="text-black-400 text-base leading-relaxed text-justify font-semibold">
          {article.description || "No description provided for this article yet."}
        </p>

        <div className="clear-both"></div>

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
    <Footer/>
    </div>
  );
};

export default ArticleDetails;
