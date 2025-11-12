import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const metalWeldingServices = [
    {
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=500&fit=crop",
      title: "Metal Gates",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=500&fit=crop",
      title: "Metal Staircase",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop",
      title: "Metal Grills",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop",
      title: "Metal Railings",
    },
  ];

  const steelWeldingServices = [
    {
      image:
        "https://i.pinimg.com/736x/c3/8d/f0/c38df0548fd45ae4d411c93ae6076a88.jpg",
      title: "SS Entrance Gates",
    },
    {
      image:
        "https://i.pinimg.com/736x/27/2a/c8/272ac8ea9921643d647c987c9cc453e7.jpg",
      title: "Fancy Steel Gates",
    },
    {
      image:
        "https://i.pinimg.com/736x/05/7b/80/057b801e7e4f99b63048cf6fbd627d61.jpg",
      title: "Steel Door Frames",
    },
    {
      image:
        "https://i.pinimg.com/736x/bb/3f/b7/bb3fb7fa0e01e14339405e6dee24b7bc.jpg",
      title: "Single Door Gates",
    },
  ];

  const ServiceCard = ({ image, title }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white transform hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-4 bg-white border-t-4 border-orange-500">
        <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
          - {title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-8 px-4 text-center border-b-2 border-orange-200">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-3">
          INDIA'S FIRST ONLINE METAL SERVICES PROVIDER
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
          We provide Door Step services for Metal & Steel Fabrication and
          Repairs. Now getting a welder at your doorstep is very easy.
        </p>
      </div>

      {/* Hero Banner Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 rounded-2xl shadow-2xl p-6 md:p-12 lg:p-16 mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 z-10 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4 leading-tight">
                Trusted
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 mb-2">
                Complete Welding Services
              </p>
              <p className="text-lg text-gray-700 mb-2">at your</p>
              <p className="text-2xl md:text-3xl text-gray-900 mb-8">
                *Doorstep*
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gray-900 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Now
              </Link>
            </div>

            <div className="flex-1 flex justify-center z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=500&fit=crop"
                  alt="Welder"
                  className="relative w-65 h-65 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl ring-4 ring-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Home Building Contracts */}
          <div className="bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 rounded-2xl shadow-xl hover:shadow-2xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop"
                  alt="Home"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-lg ring-2 ring-white"
                />
              </div>
              <div className="flex-1 text-center sm:text-right">
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-serif">
                  Home Building
                </h3>
                <p className="text-lg text-gray-800 mb-1">Contracts</p>
                <p className="text-sm text-gray-700 mb-4">
                  Fabrication & Maintenance
                </p>
                <Link
                  to="/home-services"
                  className="inline-block bg-gray-900 hover:bg-orange-600 text-white text-sm px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Corporate Contracts */}
          <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-2xl shadow-xl hover:shadow-2xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=300&fit=crop"
                  alt="Corporate"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-lg ring-2 ring-white"
                />
              </div>
              <div className="flex-1 text-center sm:text-right">
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-serif">
                  Corporate
                </h3>
                <p className="text-lg text-gray-800 mb-1">Contracts</p>
                <p className="text-sm text-gray-700 mb-4">
                  Sample Making & Maintenance
                </p>
                <Link
                  to="/services"
                  className="inline-block bg-gray-900 hover:bg-orange-600 text-white text-sm px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metal Welding Services Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
              METAL WELDING 
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Quality Work | Professional worker | Email you the sample |
              Charges after design | Fixed on same day New Metal Products
              manufacturing | Old Metal Products Repairing
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metalWeldingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Steel Welding Services Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
              STEEL WELDING 
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Quality Work | Professional product | Email you the sample |
              Charges after design | Fixed on same day New Steel Products
              manufacturing | Old Steel Products Repairing
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steelWeldingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
