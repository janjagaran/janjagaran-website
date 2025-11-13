import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      {/* Illustration */}
      {/* <img
        src="https://illustrations.popsy.co/purple/error.svg"
        alt="Not found"
        className="w-full max-w-sm mb-8 animate-fadeIn"
      /> */}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
        404 - Page Not Found
      </h1>

      {/* Message */}
      <p className="text-gray-600 text-lg md:text-xl max-w-md mb-8 animate-fadeIn">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-medium transition"
        >
          ⟵ Go Back
        </button>

        <Link
          to="/"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition"
        >
          Go to Home
        </Link>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
