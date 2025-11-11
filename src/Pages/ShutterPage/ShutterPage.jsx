import React, { useState, useEffect } from "react";

export default function ShutterPage() {
  const shutterTypes = [
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      name: "Rolling Shutter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      name: "Steel Rolling Shutter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530639831749-74d88b1cc94e?w=400&h=300&fit=crop",
      name: "Mall Rolling Shutter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603808033192-082d7d62b3ec?w=400&h=300&fit=crop",
      name: "Handle Rolling Shutter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595246139365-e23f6a6b19c1?w=400&h=300&fit=crop",
      name: "Automatic Shutter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621605815687-83f257d1e8aa?w=400&h=300&fit=crop",
      name: "Shop Rolling Shutter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      name: "Window Rolling Shutter",
    },
  ];

  // ✅ Furniture products for carousel
  const furnitureProducts = [
    {
      title: "Steel Almirah",
      image:
        "https://images.unsplash.com/photo-1598300051083-8109f74d9c6b?w=500&h=400&fit=crop",
    },
    {
      title: "Office Table",
      image:
        "https://images.unsplash.com/photo-1581092335386-3b8c7f8b7a3a?w=500&h=400&fit=crop",
    },
    {
      title: "Industrial Rack",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
    },
    {
      title: "Steel Bed",
      image:
        "https://images.unsplash.com/photo-1602526218474-2e3f8e2b29de?w=500&h=400&fit=crop",
    },
    {
      title: "Filing Cabinet",
      image:
        "https://images.unsplash.com/photo-1616627796856-9d3d2d24caa1?w=500&h=400&fit=crop",
    },
    {
      title: "Display Rack",
      image:
        "https://images.unsplash.com/photo-1582582423603-cc8e1f94bd19?w=500&h=400&fit=crop",
    },
    {
      title: "Steel Locker",
      image:
        "https://images.unsplash.com/photo-1616627796977-6d0d9a25ff97?w=500&h=400&fit=crop",
    },
    {
      title: "Warehouse Storage",
      image:
        "https://images.unsplash.com/photo-1602526218474-2e3f8e2b29de?w=500&h=400&fit=crop",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(furnitureProducts.length / 4)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [furnitureProducts.length]);

  // ✅ Get visible products for current slide
  const getVisibleProducts = () => {
    const startIndex = currentSlide * 4;
    return furnitureProducts.slice(startIndex, startIndex + 4);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden pt-[70px] sm:pt-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex items-center justify-center px-5 sm:px-8 py-12 sm:py-16 lg:p-16 text-center lg:text-left bg-gray-100">
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-4xl md:text-5xl text-gray-800 mb-2">
                Shutter Technician
              </h1>
              <p className="text-lg sm:text-2xl text-gray-700 mb-2">at your</p>
              <h2
                className="text-5xl sm:text-6xl md:text-8xl text-orange-500 mb-6 leading-tight"
                style={{ fontFamily: "cursive" }}
              >
                Doorstep
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Shutter Repairing |{" "}
                <span className="text-orange-500">
                  New Shutter Installation
                </span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-60 sm:h-80 md:h-96 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
              alt="Shutter Technician"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Shutter Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center text-gray-900 mb-10 uppercase tracking-wide">
            <span className="text-orange-500">Shutter</span> Services
          </h2>

          {/* Grid of shutter services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 mb-12">
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

          {/* ✅ Metal & Steel Furniture Products Carousel */}
          <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
                  SHUTTER SERVICES
                </h2>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base text-orange-500 max-w-4xl mx-auto">
                  Best in Class material | Professional worker | Charges after
                  Inspection | Get you design |Fixed on same day New shutter
                  manufacturing | Old shutter Repairing
                </div>
              </div>

              {/* Carousel grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700">
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
                {Array.from({
                  length: Math.ceil(furnitureProducts.length / 4),
                }).map((_, index) => (
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
      </section>
    </div>
  );
}
