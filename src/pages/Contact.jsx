import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full">
        <Navbar/>
        <section className="min-h-screen bg-gradient-to-br from-[#fffaf5] via-[#fefcf9] to-[#fff5f5] py-16 px-4 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#C10C2A] mb-10">
          Contact Us
        </h2>

        <form className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C10C2A] focus:outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C10C2A] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C10C2A] focus:outline-none transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium mb-1"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C10C2A] focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C10C2A] focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#C10C2A] to-[#E73C4E] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Contact;
