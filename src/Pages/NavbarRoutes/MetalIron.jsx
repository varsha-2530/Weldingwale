import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // 👈 Import AOS CSS

export default function MetalIron() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ✅ Hero Slides
  const slides = [
    {
      title: "Premium Aluminium Solutions",
      subtitle: "High-Quality Windows, Doors & Partitions",
      button: "Get Free Quote",
      tag: "Aluminium Works",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    },
    {
      title: "Custom Metal Fabrication",
      subtitle: "Gates, Railings, Furniture & Structural Works",
      button: "View Portfolio",
      tag: "Metal & Steel",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80",
    },
    {
      title: "Shutter Installation",
      subtitle: "Rolling Shutters, Security Doors & Motorized Systems",
      button: "Contact Us",
      tag: "Shutters",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    },
  ];

  // ✅ Shutter Types Grid Data
  const shutterTypes = [
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", name: "Rolling Shutter" },
    { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop", name: "Steel Rolling Shutter" },
    { image: "https://images.unsplash.com/photo-1530639831749-74d88b1cc94e?w=400&h=300&fit=crop", name: "Mall Rolling Shutter" },
    { image: "https://images.unsplash.com/photo-1603808033192-082d7d62b3ec?w=400&h=300&fit=crop", name: "Handle Rolling Shutter" },
    { image: "https://images.unsplash.com/photo-1595246139365-e23f6a6b19c1?w=400&h=300&fit=crop", name: "Automatic Shutter" },
    { image: "https://images.unsplash.com/photo-1621605815687-83f257d1e8aa?w=400&h=300&fit=crop", name: "Shop Rolling Shutter" },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", name: "Window Rolling Shutter" },
    { image: "https://images.unsplash.com/photo-1621605815687-83f257d1e8aa?w=400&h=300&fit=crop", name: "Industrial Rolling Shutter" },
  ];

  // ✅ Furniture Products (carousel)
  const furnitureProducts = [
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=400", title: "Industrial Shutter" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=401", title: "Automatic Shutter" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=402", title: "Manual Shutter" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=403", title: "Rolling Door" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=404", title: "Garage Shutter" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=405", title: "Office Shutter" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=406", title: "Mall Shutter" },
    { image: "https://images.unsplash.com/photo-1581091012184-5c1af10d0a2b?w=407", title: "Steel Gate Shutter" },
  ];

  const getVisibleProducts = () => {
    const start = currentSlide * 4;
    return furnitureProducts.slice(start, start + 4);
  };

  // ✅ Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // ✅ Touch handlers for mobile
  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].screenX);
  const handleTouchMove = (e) => setTouchEndX(e.changedTouches[0].screenX);
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ HERO SLIDER */}
      <div
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[80vh] sm:h-[90vh] overflow-hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
                <div
                  className="max-w-xl text-left space-y-5 sm:space-y-7 text-white"
                  data-aos="fade-right"
                >
                  <span className="bg-orange-500/90 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {slide.tag}
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all z-20"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all z-20"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-orange-500 w-8" : "bg-white/60 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ✅ STEEL SERVICES GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl text-center text-gray-900 mb-10 uppercase tracking-wide"
            data-aos="zoom-in"
          >
            <span className="text-orange-500">STEEL</span> Services
          </h2>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {shutterTypes.map((shutter, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={shutter.image}
                    alt={shutter.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-white text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {shutter.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ ADDITIONAL CAROUSEL SECTION */}
          <section
            className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 mt-16"
            data-aos="fade-up"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-12" data-aos="zoom-in">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
                  STEEL WELDING SERVICES
                </h2>
                <p className="text-orange-500 max-w-4xl mx-auto text-sm sm:text-base">
                  Quality Work | Professional worker | Small and Big repairs |
                  Charges after work | Fixed on same day | New steel products
                  manufacturing | Old steel products Repairing
                </p>
              </div>

              {/* Carousel */}
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {getVisibleProducts().map((product, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white transform hover:-translate-y-2"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-3 sm:p-4 bg-white border-t-4 border-orange-500">
                      <h3 className="text-xs sm:text-sm md:text-base text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: Math.ceil(furnitureProducts.length / 4) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-orange-500 w-8 h-3"
                          : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
