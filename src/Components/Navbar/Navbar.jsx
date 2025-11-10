import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { name: "HOME", path: "/" },
    {
      name: "SHUTTER",
      path: "/shutter",
      dropdown: ["Rolling Shutter", "Automatic Shutter", "Manual Shutter", "Industrial Shutter"]
    },
    {
      name: "METAL/IRON",
      path: "/metal-iron",
      dropdown: ["Iron Gates", "Metal Doors", "Iron Railings", "Metal Fabrication"]
    },
    {
      name: "STAINLESS STEEL",
      path: "/stainless-steel",
      dropdown: ["SS Gates", "SS Railings", "SS Grills", "SS Fabrication"]
    },
    {
      name: "ALUMINIUM",
      path: "/aluminium",
      dropdown: ["Aluminium Windows", "Aluminium Doors", "Aluminium Partitions", "Aluminium Fabrication"]
    },
    {
      name: "SHEDS",
      path: "/sheds",
      dropdown: ["Industrial Sheds", "Warehouse Sheds", "Parking Sheds", "Roofing Sheds"]
    },
    {
      name: "METAL / STEEL FURNITURE",
      path: "/furniture",
      dropdown: ["Steel Tables", "Metal Chairs", "Storage Racks", "Office Furniture"]
    },
    { name: "HOME SERVICES", path: "/home-services" },
    { name: "CONTRACT SERVICES", path: "/contract-services" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const formatPath = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div
        className={`bg-white border-b border-gray-200 transition-all duration-300 ${
          showTopBar ? "h-12 opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin size={16} className="text-orange-500" />
              <span>Gurugram</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone size={16} className="text-orange-500" />
              <span>+91 7529976252</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Twitter size={18} className="text-gray-600 hover:text-orange-500 cursor-pointer transition" />
            <Facebook size={18} className="text-gray-600 hover:text-orange-500 cursor-pointer transition" />
            <Instagram size={18} className="text-gray-600 hover:text-orange-500 cursor-pointer transition" />
            <Linkedin size={18} className="text-gray-600 hover:text-orange-500 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-orange-500 px-3 py-1 flex items-center">
                <span className="text-white font-bold text-xl">WW</span>
              </div>
              <span className="text-orange-500 font-bold text-2xl ml-1">weldingwale</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center gap-1 transition"
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                      <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/${formatPath(subItem)}`}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-orange-500">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === index && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`/${formatPath(subItem)}`}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
  