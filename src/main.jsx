import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CategoryPage from "./pages/CategoryPage.jsx"; // ✅ import CategoryPage
import ArticleDetails from "./pages/ArticleDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsCondition from "./pages/TermsCondition.jsx";
import Contact from "./pages/Contact.jsx";
import Author from "./pages/Author.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category/:slug" element={<CategoryPage />} /> {/* ✅ dynamic route */}
        <Route path="/:slug" element={<ArticleDetails />} /> {/* ✅ new route */}
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-and-condition" element={<TermsCondition/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/author" element={<Author/>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
