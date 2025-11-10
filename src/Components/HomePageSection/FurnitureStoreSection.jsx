import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FurnitureStoreSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const furnitureProducts = [
    {
      image: "https://i.pinimg.com/736x/a6/e5/79/a6e5797442935dd549262cba8fc3c07e.jpg",
      title: "Metal/Steel Rack"
    },
    {   
      image: "https://i.pinimg.com/1200x/1d/7e/d0/1d7ed0afcbee9ea9e612b56da420eee5.jpg",
      title: "School Benches"   
    },
    {
      image: "https://i.pinimg.com/1200x/67/68/32/676832c0350202049a9d6e635e3ee477.jpg",
      title: "Metal Benches"
    },
    {
      image: "https://i.pinimg.com/1200x/26/60/02/2660022d7f815a9fdcaf1ca2a28b3581.jpg",
      title: "Advertisement banner"
    },
    {
      image: "https://i.pinimg.com/736x/a3/7f/7e/a37f7e4cd4a1000241836224cf6b929d.jpg",
      title: "Office Furniture"
    }
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % furnitureProducts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [furnitureProducts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % furnitureProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + furnitureProducts.length) % furnitureProducts.length);
  };

  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < 4; i++) {
      products.push(furnitureProducts[(currentSlide + i) % furnitureProducts.length]);
    }
    return products;
  };

  return (
    <div className="w-full bg-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
            INDIA'S FIRST ONLINE METAL FURNITURE STORE
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
            Buy Metal Furniture Online from our collection of Metal furniture units to give your home an elegant touch at affordable prices.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <img 
                src="https://i.pinimg.com/1200x/51/83/5a/51835aaad8d983c722b88e01218c4a6d.jpg"
                alt="Bedroom Furniture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
              <h2 className="text-2xl md:text-3xl text-gray-800 mb-2">
                GET THE BEST DEAL ON
              </h2>
              <h3 className="text-3xl md:text-5xl text-orange-500 mb-8" style={{fontFamily: 'Brush Script MT, cursive'}}>
                Furniture Products
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=150&fit=crop"
                    alt="Bed"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img  
                    src="https://i.pinimg.com/1200x/51/99/04/5199047e208f1f14d9f1f625d96be02d.jpg"
                    alt="Shelf"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=200&h=150&fit=crop"
                    alt="Sofa"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg self-start">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
              METAL & STEEL FURNITURE PRODUCTS
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Easy to install | Good Quality Material | Delivery on time | Decent look | Color customization<br/>
              New products manufacturing | Old products Repairing
            </p>
          </div>

          <div className="relative">
            {/* Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-8 md:px-12">
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
                  <div className="p-4 bg-white border-t-4 border-orange-500">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      - {product.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {furnitureProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStoreSection;
