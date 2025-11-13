import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Pen } from "lucide-react";

const Author = () => {
  return (
    <div className="w-full">
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-8 text-center border border-gray-100">
        {/* Pen Icon */}
        <div className="flex justify-center mb-4">
          <Pen size={40} />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-blue-800 mb-1">
          Manoj Kumar Satpathy
        </h1>

        {/* Title */}
        <p className="text-gray-600 text-sm italic mb-6">
          Journalist (MSW, M.A. Journalism & Mass Communication)
        </p>

        {/* Contact Info */}
        <div className="text-left text-gray-700 leading-relaxed space-y-3">
          <p>
            <span className="font-semibold">Office:</span> Daily Market Complex,
            Stall No. 10, Titilagarh, Balangir - 767033
          </p>
          <p>
            <span className="font-semibold">Tel (O):</span> 06655-220705
          </p>
          <p>
            <span className="font-semibold">Mobile:</span> 94373 86625
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:mksatapathy01@gmail.com"
              className="text-blue-600 hover:underline"
            >
              mksatapathy01@gmail.com
            </a>
          </p>
        </div>

        {/* Footer Line */}
        <div className="mt-8 border-t border-gray-200 pt-3 text-xs text-gray-500">
          © {new Date().getFullYear()} Manoj Kumar Satpathy
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Author;
