import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "ABOUT US", to: "/about" },
    { name: "SERVICES", to: "/services" },
    { name: "PRODUCTS", to: "/products" },
    { name: "HOME SERVICES", to: "/home-services" },
    
    { name: "BLOG", to: "/blog" },
    { name: "CONTACT", to: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", to: "/terms" },
    { name: "Privacy Policy", to: "/privacy" },
    { name: "Disclaimer", to: "/disclaimer" },
  ];

  const socialIcons = [
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: MessageCircle, href: "#", label: "Skype" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-orange-50 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 text-center">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-orange-500 text-xs sm:text-sm md:text-base hover:text-orange-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8 w-3/4 mx-auto"></div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 text-xs sm:text-sm text-gray-700 text-center">
          {legalLinks.map((link, idx) => (
            <React.Fragment key={link.name}>
              <Link
                to={link.to}
                className="hover:text-orange-600 transition"
              >
                {link.name}
              </Link>
              {idx < legalLinks.length - 1 && (
                <span className="hidden sm:inline text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-6">
          {socialIcons.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all"
            >
              <item.Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-xs sm:text-sm">
          © 2025 Weldingwale.com — All Rights Reserved
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-orange-500 hover:bg-orange-600 text-white w-11 h-11 sm:w-12 sm:h-12 rounded-md flex items-center justify-center shadow-lg transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
