import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

import HeroSection from '../../Components/HomePageSection/HeroSection';
import DoorstepServices from '../../Components/HomePageSection/DoorstepServices';
import OurServicesSection from '../../Components/HomePageSection/ServicesSection/OurServicesSection';
import ServicesSection from '../../Components/HomePageSection/ServicesSection/ServicesSection';
import FurnitureStoreSection from '../../Components/HomePageSection/FurnitureStoreSection';
import Testimonials from '../../Components/HomePageSection/CustomerTestimonials/Testimonials';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Trigger animation only once when it enters the viewport
    });
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
    </>
  );
};

export default HomePage;
