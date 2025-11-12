import React, { useState, useRef, useEffect } from "react";

const OurWorkSection = () => {
  const shutterServices = [
    {
      image:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=500&h=500&fit=crop",
      title: "Industrial Project",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=500&fit=crop",
      title: "Residential Project",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
      title: "Commercial Project",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop",
      title: "Custom Project",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop",
      title: "Repair Project",
    },
  ];

  const slides = 3; // fixed number of dots
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 300; // approx width per card
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth * 2, // scroll 2 cards per group
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const ServiceCard = ({ image, title }) => (
    <div className="flex-shrink-0 w-72 md:w-80 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white transform hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-4 bg-white border-t-4 border-orange-500">
        <h3 className="text-base md:text-lg font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300 text-center">
          {title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Best in class material | Professional workers | Charges after
            inspection | Custom design support | Same-day fabrication | Old
            shutter repair & maintenance
          </p>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 py-4"
        >
          {shutterServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Pagination Dots (Fixed to 3) */}
        <div className="flex justify-center mt-6 space-x-3">
          {[...Array(slides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
    