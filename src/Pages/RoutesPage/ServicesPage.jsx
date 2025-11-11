import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Home, Users } from "lucide-react";

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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

  const services = [
    {
      name: "Shutter",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      name: "Metal Gates",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      name: "Stainless Steel Gates",
      image:
        "https://images.unsplash.com/photo-1597007067824-c2d5f4b8b798?w=400&h=300&fit=crop",
    },
    {
      name: "Railing & Grills",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      name: "Staircase",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      name: "Metal/Steel Furniture",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      name: "Sheds",
      image:
        "https://images.unsplash.com/photo-1597007067824-c2d5f4b8b798?w=400&h=300&fit=crop",
    },
    {
      name: "Garden Pergolas",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      name: "Tree Guard",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      name: "Unipole Structure",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      name: "False Ceiling Services",
      image:
        "https://images.unsplash.com/photo-1597007067824-c2d5f4b8b798?w=400&h=300&fit=crop",
    },
    {
      name: "Wire Fencing",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      name: "Anchor Fastner",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      name: "Elevation Work",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      name: "Aluminium Work",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Swipe handlers for mobile
  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].screenX);
  const handleTouchMove = (e) => setTouchEndX(e.changedTouches[0].screenX);
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ HERO SLIDER */}
      {/* ✅ HERO SLIDER (Improved Design) */}
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

            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
                <div className="max-w-xl text-left space-y-5 sm:space-y-7 text-white">
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

        {/* Navigation Arrows */}
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

      {/* ✅ SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl sm:text-4xl  text-center text-gray-900 mb-8">
          OUR <span className="text-orange-500">SERVICES</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ INDIA’S FIRST SECTION */}
      <section className="py-12 text-center bg-gradient-to-t from-gray-50 to-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
          INDIA'S FIRST ONLINE METAL SERVICES PROVIDER
        </h2>
        <p className="text-base sm:text-lg text-orange-500 max-w-3xl mx-auto">
          We provide doorstep services for Metal & Steel Fabrication and
          Repairs. Getting a professional welder is now easier than ever.
        </p>
      </section>

      {/* ✅ TRUSTED BANNER */}
      <section className="bg-gradient-to-r from-orange-300 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT TEXT */}
          <div className="flex-1 text-center lg:text-left lg:pl-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl text-gray-900 leading-tight">
              Trusted
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              Complete Welding Services
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-orange-600 my-2">
              *Doorstep*
            </p>
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Get reliable and expert welding solutions at your home or
              business. Our certified welders ensure precision, durability, and
              premium quality.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md">
              Book Now
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* First Image */}
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop"
                alt="Welder"
                className="rounded-2xl shadow-2xl w-80 sm:w-96 lg:w-[420px] object-cover transform sm:-translate-x-6 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CONTRACT TYPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Home Building */}
          <div className="bg-gradient-to-br from-orange-300 to-orange-50 rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <Home className="w-16 h-16 text-orange-500" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-orange-500">
                Home Building
              </h3>
              <p className="text-orange-500 text-xl  mb-2">Contracts</p>
              <p className="text-gray-600 mb-4">Fabrication & Maintenance</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Corporate */}
          <div className="bg-gradient-to-br from-orange-200 to-indigo-50 rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <Users className="w-16 h-16 text-orange-500" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-orange-500   ">
                Corporate
              </h3>
              <p className="text-orange-500 text-xl  mb-2">Contracts</p>
              <p className="text-gray-600 mb-4">Welding & Maintenance</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
