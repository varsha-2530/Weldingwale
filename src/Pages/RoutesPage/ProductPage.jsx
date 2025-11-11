import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Home, Users } from "lucide-react";

export default function ProductPage() {
  const [current, setCurrent] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const furnitureProducts = [
    {
      image:
        "https://i.pinimg.com/736x/a6/e5/79/a6e5797442935dd549262cba8fc3c07e.jpg",
      title: "Metal/Steel Rack",
    },
    {
      image:
        "https://i.pinimg.com/1200x/1d/7e/d0/1d7ed0afcbee9ea9e612b56da420eee5.jpg",
      title: "School Benches",
    },
    {
      image:
        "https://i.pinimg.com/1200x/67/68/32/676832c0350202049a9d6e635e3ee477.jpg",
      title: "Metal Benches",
    },
    {
      image:
        "https://i.pinimg.com/1200x/26/60/02/2660022d7f815a9fdcaf1ca2a28b3581.jpg",
      title: "Advertisement banner",
    },
    {
      image:
        "https://i.pinimg.com/736x/a3/7f/7e/a37f7e4cd4a1000241836224cf6b929d.jpg",
      title: "Office Furniture",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Furniture products auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % furnitureProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [furnitureProducts.length]);

  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].screenX);
  const handleTouchMove = (e) => setTouchEndX(e.changedTouches[0].screenX);
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const getVisibleProducts = () => {
    const itemsPerPage = window.innerWidth >= 768 ? 4 : 2;
    const start = currentSlide;
    const visible = [];

    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(furnitureProducts[(start + i) % furnitureProducts.length]);
    }

    return visible;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
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
                <div className="max-w-xl text-left space-y-5 sm:space-y-7 text-white">
                  <span className="inline-block bg-orange-500/90 px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold">
                    {slide.tag}
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
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

        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all z-20"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h4 className="text2xl sm:text-3xl  text-center mb-3">
          Metal/Steel Furniture
        </h4>
        <p className="text-center text-gray-600 mb-8 sm:mb-12">
          Professional Metal & Steel Fabrication Solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className=" text-gray-800 text-base sm:text-lg group-hover:text-orange-500 transition-colors">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metal & Steel Furniture Products */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 mb-4">
              METAL & STEEL FURNITURE PRODUCTS
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base text-orange-500  max-w-4xl mx-auto">
              <span>✓ Easy to install</span>
              <span>✓ Good Quality Material</span>
              <span>✓ Delivery on time</span>
              <span>✓ Decent look</span>
              <span>✓ Color customization</span>
              <span>✓ New products manufacturing</span>
              <span>✓ Old products Repairing</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
                  <h3 className="text-xs sm:text-sm md:text-base  text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {furnitureProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-orange-500 w-8 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
