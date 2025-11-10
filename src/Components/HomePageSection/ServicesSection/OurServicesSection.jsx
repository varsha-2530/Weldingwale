import React from 'react';

const OurServicesSection = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
      title: "Shutter"
    },
    {
      image: "https://i.pinimg.com/736x/54/53/42/5453424ea6d2eaee893564ce68a5aef9.jpg",
      title: "Metal Gates"
    },
    {
      image: "https://i.pinimg.com/736x/bb/8c/c8/bb8cc80f18a203b415e65e830af0530c.jpg",
      title: "Stainless Steel Gates"
    },
    {
      image: "https://i.pinimg.com/736x/1f/eb/7d/1feb7d5929178206180894a21c722d98.jpg",
      title: "Railing & Grills"
    },
    {
      image: "https://i.pinimg.com/1200x/20/4b/42/204b424c85c0d560ced16f59d4e9965d.jpg",
      title: "Staircase"
    },
    {
      image: "https://i.pinimg.com/736x/d8/01/4a/d8014abf42e3e79dc60299764bd3d4ae.jpg",
      title: "Metal/Steel Furniture"
    },  
    {
      image: "https://i.pinimg.com/736x/fc/44/09/fc44092539e725e565d4f72c2fc87da8.jpg",
      title: "Sheds"
    },
    {
      image: "https://i.pinimg.com/1200x/6a/60/46/6a60469efb09870acba060ddad2ef668.jpg",
      title: "Garden Paragolas"
    } 
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
         <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-900  tracking-wide text-center">
  OUR SERVICES
</h2>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h3 className="text-lg   text-gray-900">
                  {service.title}
                </h3>   
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-12 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;