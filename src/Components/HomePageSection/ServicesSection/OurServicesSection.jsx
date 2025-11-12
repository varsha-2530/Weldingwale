import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurServicesSection = () => {
  const services = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
      title: "Fabrication Work",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/54/53/42/5453424ea6d2eaee893564ce68a5aef9.jpg",
      title: "Gate & Grill Welding",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/bb/8c/c8/bb8cc80f18a203b415e65e830af0530c.jpg",
      title: "Industrial Welding",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/1f/eb/7d/1feb7d5929178206180894a21c722d98.jpg",
      title: "Repair & Maintenance",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/20/4b/42/204b424c85c0d560ced16f59d4e9965d.jpg",
      title: "Custom Metal Project",
    },
  ];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalDots = 3;

  useEffect(() => {
    const slider = scrollRef.current;
    let scrollAmount = 0;
    let dotIndex = 0;

    const scrollInterval = setInterval(() => {
      if (!slider) return;
      const cardWidth = slider.firstChild?.offsetWidth || 300;
      const visibleCards = Math.floor(slider.clientWidth / (cardWidth + 16));
      scrollAmount += cardWidth + 16;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
        dotIndex = 0;
      } else {
        dotIndex = Math.min(
          Math.floor(
            (scrollAmount / (slider.scrollWidth - slider.clientWidth)) *
              totalDots
          ),
          totalDots - 1
        );
      }

      setCurrentIndex(dotIndex);
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 2500);

    return () => clearInterval(scrollInterval);
  }, [services.length]);

  const handleDotClick = (i) => {
    const slider = scrollRef.current;
    const scrollTo =
      (i / totalDots) * (slider.scrollWidth - slider.clientWidth);
    slider.scrollTo({ left: scrollTo, behavior: "smooth" });
    setCurrentIndex(i);
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-900 tracking-wide text-center">
            OUR <span className="text-orange-500">SERVICES</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`} // Navigate to ServiceDetailPage
              className="flex-shrink-0 w-72 sm:w-80 md:w-72 lg:w-80"
            >
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Title below image */}
                <div className="p-4 bg-white flex-1 flex items-center justify-center">
                  <h3 className="text-lg text-gray-900 font-semibold text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-900/10 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* 3 Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-orange-500 w-5"
                  : "bg-gray-400 hover:bg-orange-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
