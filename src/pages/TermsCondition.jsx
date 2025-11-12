import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsCondition = () => {
  return (
    <div className="w-full">
        <Navbar/>
        <section className="bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-28 leading-relaxed">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Terms and Conditions
        </h1>

        <p className="text-lg mb-4">
          Welcome to{" "}
          <a
            href="https://www.janjagaran.com/"
            className="text-red-600 font-semibold hover:underline"
          >
            janjagaran.com
          </a>
          !
        </p>
        <p className="text-lg mb-4">
          These terms and conditions outline the rules and regulations for the
          use of{" "}
          <a
            href="https://www.janjagaran.com/"
            className="text-red-600 font-semibold hover:underline"
          >
            Janjagaran.com’s
          </a>{" "}
          website, located at{" "}
          <a
            href="https://www.janjagaran.com"
            className="text-red-600 font-semibold hover:underline"
          >
            https://www.janjagaran.com
          </a>
          .
        </p>
        <p className="text-lg mb-4">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use{" "}
          <a
            href="https://www.janjagaran.com/"
            className="text-red-600 font-semibold hover:underline"
          >
            janjagaran.com
          </a>{" "}
          if you do not agree to take all of the terms and conditions stated on
          this page.
        </p>

        {/* Cookies Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Cookies
        </h2>
        <p className="text-lg mb-4">
          We employ the use of cookies. By accessing{" "}
          <a
            href="https://www.janjagaran.com/"
            className="text-red-600 font-semibold hover:underline"
          >
            janjagaran.com
          </a>
          , you agreed to use cookies in agreement with our Privacy Policy.
        </p>
        <p className="text-lg mb-4">
          Most interactive websites use cookies to retrieve user details for
          each visit. Cookies are used to enable certain functionalities and
          enhance user experience. Some of our affiliate or advertising partners
          may also use cookies.
        </p>

        {/* License Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          License
        </h2>
        <p className="text-lg mb-4">
          Unless otherwise stated,{" "}
          <a
            href="https://www.janjagaran.com/"
            className="text-red-600 font-semibold hover:underline"
          >
            Janjagaran.com
          </a>{" "}
          and/or its licensors own the intellectual property rights for all
          material on the website. All rights are reserved.
        </p>
        <p className="text-lg mb-4">You must not:</p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Republish material from Janjagaran.com</li>
          <li>Sell, rent or sub-license material</li>
          <li>Reproduce or copy material</li>
          <li>Redistribute content from Janjagaran.com</li>
        </ul>

        {/* Comments Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Comments
        </h2>
        <p className="text-lg mb-4">
          Users may post and exchange opinions on the website. Comments reflect
          the views of the individuals who post them, not{" "}
          <a
            href="https://www.janjagaran.com/"
            className="text-red-600 font-semibold hover:underline"
          >
            Janjagaran.com
          </a>{" "}
          or its affiliates.
        </p>
        <p className="text-lg mb-4">
          We reserve the right to monitor and remove inappropriate, offensive,
          or unlawful comments.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Comments must not infringe on intellectual property rights or
            privacy.
          </li>
          <li>
            Comments must not contain defamatory or unlawful content.
          </li>
          <li>
            Comments must not be used for solicitation or commercial promotion.
          </li>
        </ul>

        {/* Hyperlinking Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Hyperlinking to Our Content
        </h2>
        <p className="text-lg mb-4">
          Certain organizations such as government agencies, search engines, and
          news organizations may link to our website without prior approval.
        </p>
        <p className="text-lg mb-4">
          Links must not be deceptive, falsely imply sponsorship, or misrepresent
          affiliation.
        </p>

        {/* iFrames */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          iFrames
        </h2>
        <p className="text-lg mb-4">
          You may not create frames around our webpages without prior approval
          and written permission.
        </p>

        {/* Content Liability */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Content Liability
        </h2>
        <p className="text-lg mb-4">
          We are not responsible for any content that appears on your website.
          You agree to defend us against all claims arising from your website’s
          content.
        </p>

        {/* Reservation of Rights */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Reservation of Rights
        </h2>
        <p className="text-lg mb-4">
          We reserve the right to request removal of any links to our website
          and to update these terms at any time.
        </p>

        {/* Removal of Links */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Removal of Links from Our Website
        </h2>
        <p className="text-lg mb-4">
          If you find any link offensive, you are free to contact us. We may
          consider removal requests but are not obligated to do so.
        </p>

        {/* Disclaimer */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Disclaimer
        </h2>
        <p className="text-lg mb-4">
          To the fullest extent permitted by law, we exclude all representations
          and warranties relating to our website and its use.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>We are not liable for death or personal injury.</li>
          <li>We are not liable for fraud or misrepresentation.</li>
          <li>
            We are not liable for any loss or damage arising from your use of
            the website.
          </li>
        </ul>

        <p className="text-lg mt-8">
          As long as the website and its services are provided free of charge,
          we will not be liable for any loss or damage of any nature.
        </p>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default TermsCondition;
