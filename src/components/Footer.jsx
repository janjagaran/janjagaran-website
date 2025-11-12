import React from "react";
// Old FontAwesome 5 imports (kept for reference)
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-300 pt-14 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-4 gap-10">
        {/* Subscribe Section */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-white mb-3">
            <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>
            Subscribe to Janjagaran
          </h3>
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
          Jan Jagaran News is dedicated to delivering reliable and trustworthy news to our readers in Odisha and beyond. We strive to be a leading source of information, keeping you informed about local, national, and international news with integrity and accuracy.
          </p>

          <div className="text-sm text-gray-400 mb-1 leading-relaxed">GST: 21AVIPS5975M1ZV</div>

          <form className="flex bg-transparent border border-gray-700 rounded-md overflow-hidden w-full max-w-md mb-3">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-grow px-3 py-2 text-sm bg-transparent outline-none text-gray-100 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500">
            We don’t spam, promised. Only two emails every month, you can opt
            out anytime with just one click.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="flex items-center text-lg font-semibold text-white mb-3">
            <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["About", "Careers", "Authors", "Advertise", "Contact"].map(
              (item, i) => (
                <li key={i} className="hover:text-red-500 cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="flex items-center text-lg font-semibold text-white mb-3">
            <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>
            Categories
          </h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-400">
            {[
              "Business",
              "Finance",
              "Health",
              "Politics",
              "Fashion",
              "Real Estate",
              "Travel",
              "Entertainment",
              "Sports",
              "Tech",
            ].map((item, i) => (
              <li key={i} className="hover:text-red-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="flex items-center text-lg font-semibold text-white mb-3">
            <span className="w-[2px] h-5 bg-red-600 mr-2 rounded"></span>
            Social Media
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
              <FaLinkedinIn /> LinkedIn
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
              <FaYoutube /> YouTube
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © 2025 • All Rights Reserved</p>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <p>
              Made with <span className="text-red-500">♥</span> Trackepay
            </p>
            {/* <button className="bg-[#f5f5f5] text-black text-xs px-3 py-1 rounded-full font-medium hover:bg-gray-200 transition">
              Made in Trackepay
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
