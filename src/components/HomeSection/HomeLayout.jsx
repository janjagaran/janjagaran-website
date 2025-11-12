// import React from "react";
// import FeaturedMain from "./FeaturedMain";
// import LatestNews from "./LatestNews";
// import TopStories from "./TopStories";
// import SidebarFinance from "./SidebarFinance";

// const HomeLayout = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid lg:grid-cols-3 gap-10">
//       {/* Left Side */}
//       <div className="lg:col-span-2 space-y-10">
//         <FeaturedMain />
//         <LatestNews />
//         <TopStories />
//       </div>

//       {/* Right Sidebar */}
//       <SidebarFinance />
//     </section>
//   );
// };

// export default HomeLayout;

import React from "react";
import FeaturedMain from "./FeaturedMain";
import LatestNews from "./LatestNews";
import TopStories from "./TopStories";
import SidebarFinance from "./SidebarFinance";

const HomeLayout = () => {
  return (
    <section
      className="
        max-w-7xl mx-auto 
        px-3 sm:px-5 lg:px-10 
        py-8 sm:py-12 
        grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10
      "
    >
      {/* Left Side (Main Content) */}
      <div className="lg:col-span-2 space-y-8 sm:space-y-10">
        <LatestNews />
        <FeaturedMain />
        
        <TopStories />
      </div>

      {/* Right Sidebar */}
      <SidebarFinance />
    </section>
  );
};

export default HomeLayout;

