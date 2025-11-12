import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
        <Navbar/>
        <section className="bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-28 leading-relaxed">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Privacy Policy
        </h1>

        <p className="text-lg mb-6 text-gray-700">
          This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
        </p>
        <p className="text-lg mb-6 text-gray-700">
          We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        {/* Interpretation and Definitions */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Interpretation and Definitions</h2>
        <p className="text-lg mb-4">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. These definitions apply regardless of singular or plural usage.
        </p>

        {/* Definitions */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Definitions</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li><strong>Account:</strong> A unique account created for you to access our Service or parts of it.</li>
          <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
          <li><strong>Company:</strong> Refers to <span className="text-red-600 font-semibold">Janjagaran.com</span>, Sargiguda, Titilagarh, 767033.</li>
          <li><strong>Cookies:</strong> Small files placed on your device by a website, containing browsing details.</li>
          <li><strong>Country:</strong> Refers to Orissa, India.</li>
          <li><strong>Device:</strong> Any device that can access the Service, such as a computer or smartphone.</li>
          <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</li>
          <li><strong>Service:</strong> Refers to the website Janjagaran.com.</li>
          <li><strong>Service Provider:</strong> Third-party companies or individuals employed to facilitate the Service.</li>
          <li><strong>Usage Data:</strong> Data collected automatically when using the Service.</li>
        </ul>

        {/* Collecting and Using Data */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Collecting and Using Your Personal Data</h2>

        <h3 className="text-xl font-semibold mb-3 text-gray-900">Types of Data Collected</h3>
        <p className="text-lg mb-4">
          We may ask you to provide personally identifiable information, such as:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Email address</li>
          <li>Usage Data</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-900">Usage Data</h3>
        <p className="text-lg mb-4">
          Usage Data is collected automatically and may include your IP address, browser type, pages visited, time spent, and other diagnostic data.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-900">Tracking Technologies and Cookies</h3>
        <p className="text-lg mb-4">
          We use Cookies, beacons, and similar technologies to track activity on our Service. You can control cookie usage through your browser settings.
        </p>

        {/* Use of Personal Data */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Use of Your Personal Data</h2>
        <p className="text-lg mb-4">
          The Company may use Personal Data for purposes such as:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          <li>Providing and maintaining our Service</li>
          <li>Managing your account and registration</li>
          <li>Contacting you regarding updates or offers</li>
          <li>Managing your requests</li>
          <li>Business transfers and legal obligations</li>
          <li>Improving our Service and marketing performance</li>
        </ul>

        {/* Retention */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Retention of Your Personal Data</h2>
        <p className="text-lg mb-4">
          We retain Personal Data only as long as necessary to comply with legal obligations or for legitimate business purposes.
        </p>

        {/* Transfer */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Transfer of Your Personal Data</h2>
        <p className="text-lg mb-4">
          Your information may be transferred to and maintained on computers outside your country where data protection laws differ. We ensure secure handling of your data.
        </p>

        {/* Delete */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Delete Your Personal Data</h2>
        <p className="text-lg mb-4">
          You can request deletion or modification of your data by contacting us or through your account settings.
        </p>

        {/* Disclosure */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Disclosure of Your Personal Data</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Business Transactions:</strong> Your data may be transferred during mergers or acquisitions.</li>
          <li><strong>Law Enforcement:</strong> Data may be disclosed if required by law.</li>
          <li><strong>Legal Requirements:</strong> We may disclose data to protect rights, safety, or prevent fraud.</li>
        </ul>

        {/* Security */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Security of Your Personal Data</h2>
        <p className="text-lg mb-4">
          We use commercially acceptable means to protect your data but cannot guarantee absolute security due to Internet risks.
        </p>

        {/* Children */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Children’s Privacy</h2>
        <p className="text-lg mb-4">
          Our Service does not address anyone under 13. If you believe your child has shared data with us, please contact us for removal.
        </p>

        {/* Links */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Links to Other Websites</h2>
        <p className="text-lg mb-4">
          Our Service may contain links to other websites. We are not responsible for their content or privacy practices.
        </p>

        {/* Changes */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Changes to this Privacy Policy</h2>
        <p className="text-lg mb-4">
          We may update this Privacy Policy and notify you by posting the new version on this page. You are encouraged to review it periodically.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Contact Us</h2>
        <p className="text-lg">
          If you have any questions about this Privacy Policy, please contact us at:{" "}
          <a
            href="mailto:editor.janjagaran@gmail.com"
            className="text-red-600 font-semibold hover:underline"
          >
            editor.janjagaran@gmail.com
          </a>
        </p>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
