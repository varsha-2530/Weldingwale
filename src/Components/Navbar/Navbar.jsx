import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SHUTTER", path: "/shutter" },
    { name: "METAL/IRON", path: "/metal-iron" },
    { name: "STAINLESS STEEL", path: "/stainless-steel" },
    { name: "ALUMINIUM", path: "/aluminium" },
    { name: "SHEDS", path: "/sheds" },
    { name: "METAL / STEEL FURNITURE", path: "/furniture" },
    { name: "HOME SERVICES", path: "/home-services" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Hide top bar when scrolling down
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

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      {/* 🔶 Top Bar */}
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
            <Twitter
              size={18}
              className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
            />
            <Facebook
              size={18}
              className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
            />
            <Instagram
              size={18}
              className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
            />
            <Linkedin
              size={18}
              className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
            />
          </div>
        </div>
      </div>

      {/* 🔶 Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* ✅ Logo */}
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <div className="bg-orange-500 px-3 py-1 flex items-center">
                <span className="text-white font-bold text-xl">WW</span>
              </div>
              <span className="text-orange-500 font-bold text-2xl ml-1">
                weldingwale
              </span>
            </Link>

            {/* ✅ Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* ✅ Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-orange-500"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
  