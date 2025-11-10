import React from "react";
import { Clock, ShieldCheck, Award } from "lucide-react";

const DoorstepServices = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "NO VISITING CHARGE",
      description: "free visit for in spection and measurement",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 SERVICES",
      description: "we are 24/7 available to serve you",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "HIGH QUALITY WORK",
      description: "high quality services and products.",
    },
  ];

  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=400&fit=crop",
      title: "Shutter Technician",
      subtitle: "Shutter Repairing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=400&fit=crop",
      title: "Welder at Doorstep",
      subtitle: "Metal Repairing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop",
      title: "Steel Repairing",
      subtitle: "Steel Repairing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=500&h=400&fit=crop",
      title: "Sheds Maker",
      subtitle: "Sheds",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4 text-orange-500">
                {feature.icon}
              </div>
              <h3 className="text-xl  text-gray-900 mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Doorstep Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-900  tracking-wide">
            DOORSTEP SERVICES
          </h2>
        </div>



        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base opacity-90 border-t border-white/30 pt-2 mt-2">
                    -{service.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorstepServices;
