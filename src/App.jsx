import React from "react";
import Navbar from "./components/Navbar";
import HomeLayout from "./components/HomeSection/HomeLayout";
import HealthSection from "./components/HealthSection";
import BusinessSection from "./components/BusinessSection";
import PodcastSection from "./components/HomeSection/PodcastSection";
import MultiCategorySection from "./components/HomeSection/MultiCategorySection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* More sections will go below */}
      <HomeLayout />
      <HealthSection />
       <BusinessSection />
       <PodcastSection />
       <MultiCategorySection />
       <Footer/>
    </div>
  );
};

export default App;
