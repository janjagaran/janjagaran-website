import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="w-full">
        <Navbar/>
        <section className="bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-28 leading-relaxed">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          About Us
        </h1>

        <p className="text-lg mb-6 text-gray-700">
          <span className="font-semibold text-red-600">Jan Jagaran News</span>{" "}
          is dedicated to delivering reliable and trustworthy news to our readers in
          Odisha and beyond. We strive to be a leading source of information,
          keeping you informed about local, national, and international news with
          integrity and accuracy.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            Empowering our readers through knowledge is at the heart of everything
            we do. We believe access to accurate and unbiased news is essential
            for a healthy democracy.{" "}
            <span className="font-semibold text-red-600">Jan Jagaran News</span>{" "}
            aims to provide a platform for diverse voices and perspectives,
            fostering a deeper understanding of the world around us.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Values
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Accuracy:</span> We
              fact-check our information meticulously to ensure every story we
              publish is reliable.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Objectivity:</span>{" "}
              We strive to present news fairly and impartially, without bias or
              agenda.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Integrity:</span> We
              hold ourselves to the highest ethical standards in our reporting and
              business practices.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Community:</span> We
              are committed to serving the communities we cover, giving a voice to
              the voiceless.
            </li>
          </ul>
        </div>

        <p className="text-lg mt-10 text-gray-700">
          We appreciate your interest in{" "}
          <span className="font-semibold text-red-600">Jan Jagaran News</span>.
          Let’s keep you informed!
        </p>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default AboutUs;
