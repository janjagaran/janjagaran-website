import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CategoryPage from "./pages/CategoryPage.jsx"; // ✅ import CategoryPage
import ArticleDetails from "./pages/ArticleDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category/:slug" element={<CategoryPage />} /> {/* ✅ dynamic route */}
        <Route path="/:slug" element={<ArticleDetails />} /> {/* ✅ new route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
