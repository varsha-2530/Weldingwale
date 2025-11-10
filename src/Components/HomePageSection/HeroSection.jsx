import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  const slides = [
    {
      title: "Metal & Steel Products",
      subtitle: "Decorate Home With Elegant Fabrication",
      button: "Call Now",
      tag: "metal furniture",
      bg: "from-amber-200 to-amber-300",
      emoji: "🪴",
    },
    {
      title: "Aluminium Solutions",
      subtitle: "Premium Quality Windows & Doors",
      button: "Get Quote",
      tag: "aluminium products",
      bg: "from-blue-200 to-blue-300",
      emoji: "🪟",
    },
    {
      title: "Shutter Services",
      subtitle: "Durable Rolling & Motorized Shutters",
      button: "Contact Us",
      tag: "shutter installation",
      bg: "from-teal-200 to-teal-300",
      emoji: "🛠️",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] sm:h-[650px] md:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`w-full h-full bg-gradient-to-r ${slide.bg} flex items-center`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl text-gray-700">{slide.subtitle}</p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md text-lg font-medium shadow-md transition">
                  {slide.button}
                </button>
              </div>
              <div className="relative hidden md:flex justify-center">
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 h-[350px] flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-900/20 rounded-xl flex items-center justify-center text-6xl">
                    {slide.emoji}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows - show only on lg and above */}
      <button
        onClick={() =>
          setCurrent((p) => (p - 1 + slides.length) % slides.length)
        }
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Floating Call - stays same on all devices */}
      <div
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex items-center justify-end transition-all duration-300 ${
          hover ? "w-64" : "w-14"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`bg-orange-600 text-white rounded-l-xl shadow-lg overflow-hidden flex items-center transition-all duration-500 ${
            hover ? "p-3 w-full h-20" : "p-0 w-14 h-14 justify-center"
          }`}
        >
          <div className={`transition-all ${hover ? "mr-2" : ""}`}>
            <Phone className={`w-5 h-5 ${hover ? "" : "animate-pulse"}`} />
          </div>
          <div
            className={`transition-all duration-500 ${
              hover ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"
            } overflow-hidden`}
          >
            <div className="text-xs space-y-0.5 leading-tight">
              <p className="font-semibold">Call</p>
              <p className="font-bold text-sm">+91 7529976252</p>
              <p className="font-semibold">Mail</p>
              <p>info@weldingwale.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
