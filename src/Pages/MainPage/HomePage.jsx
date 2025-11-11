// import React, { useEffect } from 'react';
// import AOS from 'aos'; // Import AOS
// import 'aos/dist/aos.css'; // Import AOS CSS

// import HeroSection from '../../Components/HomePageSection/HeroSection';
// import DoorstepServices from '../../Components/HomePageSection/DoorstepServices';
// import OurServicesSection from '../../Components/HomePageSection/ServicesSection/OurServicesSection';
// import ServicesSection from '../../Components/HomePageSection/ServicesSection/ServicesSection';
// import FurnitureStoreSection from '../../Components/HomePageSection/FurnitureStoreSection';
// import Testimonials from '../../Components/HomePageSection/CustomerTestimonials/Testimonials';

// const HomePage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration (in ms)
//       once: true, // Trigger animation only once when it enters the viewport
//     });
//   }, []);

//   return (
//     <>
//       <section data-aos="fade-up">
//         <HeroSection />
//       </section>

//       <section data-aos="fade-up">
//         <DoorstepServices />
//       </section>

//       <section data-aos="fade-up">
//         <OurServicesSection />
//       </section>

//       <section data-aos="fade-up">
//         <ServicesSection />
//       </section>

//       <section data-aos="fade-up">
//         <FurnitureStoreSection />
//       </section>

//       <section data-aos="fade-up">
//         <Testimonials />
//       </section>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone } from "lucide-react";

import HeroSection from "../../Components/HomePageSection/HeroSection";
import DoorstepServices from "../../Components/HomePageSection/DoorstepServices";
import OurServicesSection from "../../Components/HomePageSection/ServicesSection/OurServicesSection";
import ServicesSection from "../../Components/HomePageSection/ServicesSection/ServicesSection";
import FurnitureStoreSection from "../../Components/HomePageSection/FurnitureStoreSection";
import Testimonials from "../../Components/HomePageSection/CustomerTestimonials/Testimonials";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section data-aos="fade-up">
        <HeroSection />
      </section>

      <section data-aos="fade-up">
        <DoorstepServices />
      </section>

      <section data-aos="fade-up">
        <OurServicesSection />
      </section>

      <section data-aos="fade-up">
        <ServicesSection />
      </section>

      <section data-aos="fade-up">
        <FurnitureStoreSection />
      </section>

      <section data-aos="fade-up">
        <Testimonials />
      </section>

     {/* 🟢 Floating Call Button */}
<div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999] flex items-center justify-end group">
  {/* Floating Container */}
  <div className="relative bg-orange-500 text-white rounded-l-2xl shadow-2xl flex items-center justify-center transition-all duration-500 overflow-hidden group-hover:w-72 group-hover:h-auto w-14 h-14 cursor-pointer">
    
    {/* 📞 Phone Icon (centered + hidden on hover) */}
    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
      <Phone className="w-6 h-6 animate-pulse text-white" />
    </div>

    {/* 📨 Contact Info (hidden by default, visible on hover) */}
    <div className="opacity-0 group-hover:opacity-100 group-hover:max-w-xs max-w-0 overflow-hidden transition-all duration-500 ease-in-out px-4 py-3">
      <h4 className="text-sm uppercase tracking-wide mb-1 ">
        Call Us
      </h4>
      <p className="text-sm">📞 +91 9999-643944</p>
      <p className="text-sm">📞 +91 9911-643944</p>

      <h4 className="text-sm  uppercase tracking-wide mt-2">
        Mail
      </h4>
      <p className="text-xs leading-tight break-words">
        rajkumarnimbekar999964394@gmail.com
      </p>
    </div>
  </div>
</div>

    </>
  );
};

export default HomePage;
