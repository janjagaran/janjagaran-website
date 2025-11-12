import React, { useEffect, useState } from "react";
import { getMiscellaneousArticles } from "../../api/article.js";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PodcastSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMisc = async () => {
      try {
        const data = await getMiscellaneousArticles();
        setArticles(data.slice(0, 5)); // Limit total to 5 (1 left + 4 right)
      } catch (err) {
        console.error("❌ Failed to fetch Miscellaneous articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMisc();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        <Loader2 className="animate-spin mr-2" /> Loading miscellaneous articles...
      </div>
    );

  if (!articles.length)
    return (
      <div className="text-center py-20 text-gray-400">
        No miscellaneous articles found.
      </div>
    );

  const [featured, ...rest] = articles;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="flex items-center text-lg font-semibold text-gray-900">
          <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span> Miscellaneous
        </h2>
        <Link
          to="/category/miscellaneous"
          className="text-red-500 text-sm font-medium hover:underline"
        >
          view all →
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* LEFT SIDE: Featured Image */}
        {featured && (
          <Link
            to={`/${featured.slug}`}
            className="block rounded-2xl overflow-hidden shadow-sm group relative"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-[420px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 rounded-b-2xl">
              <h3 className="text-white text-lg font-semibold leading-snug">
                {featured.title}
              </h3>
              <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                {featured.description || ""}
              </p>
            </div>
          </Link>
        )}

        {/* RIGHT SIDE: 4 Filtered Articles */}
        <div className="flex flex-col gap-4">
          {rest.slice(0, 4).map((item, i) => (
            <Link
              key={i}
              to={`/${item.slug}`}
              className="flex items-start gap-4 bg-white rounded-xl p-3 hover:shadow-md transition-all group"
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
                  Miscellaneous ·{" "}
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                <h4 className="text-sm md:text-base font-medium leading-snug text-gray-800 group-hover:text-red-500 transition line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
