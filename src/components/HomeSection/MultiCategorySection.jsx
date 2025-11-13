import React, { useEffect, useState } from "react";
import {
  getBiseshArticles,
  getRajdhaniArticles,
  getRajnitiArticles,
  getRajyaArticles,
} from "../../api/article";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const MultiCategorySection = () => {
  const [data, setData] = useState({
    bisesh: null,
    rajdhani: null,
    rajniti: null,
    rajya: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [bisesh, rajdhani, rajniti, rajya] = await Promise.all([
          getBiseshArticles(),
          getRajdhaniArticles(),
          getRajnitiArticles(),
          getRajyaArticles(),
        ]);

        setData({
          bisesh: bisesh[0] || null,
          rajdhani: rajdhani[0] || null,
          rajniti: rajniti[0] || null,
          rajya: rajya[0] || null,
        });
      } catch (err) {
        console.error("❌ Error fetching multi-category data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading categories...
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { key: "bisesh", label: "ବିଶେଷ (Bisesh)", color: "red-600", slug: "bisesh" },
          { key: "rajdhani", label: "ରାଜଧାନୀ (Rajdhani)", color: "red-600", slug: "rajdhani" },
          { key: "rajniti", label: "ରାଜନୀତି (Rajniti)", color: "red-600", slug: "rajniti" },
          { key: "rajya", label: "ରାଜ୍ୟ (Rajya)", color: "red-600", slug: "rajya" },
        ].map((section) => {
          const article = data[section.key];
          if (!article)
            return (
              <div
                key={section.key}
                className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-center items-center text-gray-400 h-[320px]"
              >
                No article found in {section.label}
              </div>
            );

          return (
            <div
              key={section.key}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="flex items-center text-lg font-semibold text-gray-900">
                  <span
                    className={`w-[2px] h-5 bg-${section.color} mr-2 rounded`}
                  ></span>
                  {section.label}
                </h2>
                <Link
                  to={`/category/${section.slug}`}
                  className="text-red-600 font-inter text-sm font-medium hover:underline"
                >
                  view all →
                </Link>
              </div>

              {/* Article Card */}
              <Link
                to={`/${article.slug}`}
                className="block rounded-xl overflow-hidden group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[180px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <p className="text-xs text-gray-900 mt-3 mb-1">
                  {section.label} ·{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                <h3 className="text-base font-bold text-black-800 leading-snug hover:text-red-500 transition line-clamp-2">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-base text-black-700 mt-1 line-clamp-2">
                    {article.description}
                  </p>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MultiCategorySection;
