import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center w-full h-[520px] sm:h-[470px] md:h-[520px] lg:h-[540px] flex items-center justify-center text-center mt-5"
      style={{
        backgroundImage: `url("https://i.pinimg.com/1200x/95/d8/35/95d835d5aa95793000662f90f4265a82.jpg")`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl  mb-4 leading-snug tracking-wide"
          data-aos="fade-down"
        >
          Welding & Fabrication <br className="hidden sm:block" />
          <span className="text-orange-400">Insights & Expert Tips</span>
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 opacity-90 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore the world of modern welding, fabrication techniques, and metalwork craftsmanship.
        </p>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          From safety practices to advanced technology — stay updated with industry trends.
        </p>

        {/* Buttons */}
        <div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg  shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore Blogs
          </button>

          <button className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-white text-orange-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg  shadow-lg transform hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
