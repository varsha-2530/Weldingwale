// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Phone,
//   Twitter,
//   Facebook,
//   Instagram,
//   Linkedin,
// } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showTopBar, setShowTopBar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const navigate = useNavigate();

//   const menuItems = [
//     { name: "HOME", path: "/" },
//     { name: "SHUTTER", path: "/shutter" },
//     { name: "METAL/IRON", path: "/metal-iron" },
//     { name: "STAINLESS STEEL", path: "/stainless-steel" },
//     { name: "ALUMINIUM", path: "/aluminium" },
//     { name: "SHEDS", path: "/sheds" },
//     { name: "METAL / STEEL FURNITURE", path: "/furniture" },
//     { name: "HOME SERVICES", path: "/home-services" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   // Hide top bar when scrolling down
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setShowTopBar(false);
//       } else {
//         setShowTopBar(true);
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
//       {/* 🔶 Top Bar (hidden on mobile) */}
//       <div
//         className={`hidden md:block bg-white border-b border-gray-200 transition-all duration-300 ${
//           showTopBar ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//           {/* ✅ Contact Info */}
//           <div className="flex items-center gap-6">
//             {/* Email */}
//             <a
//               href="mailto:rajkumarnimbekar999964394@gmail.com"
//               className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 transition"
//             >
//               <p>rajkumarnimbekar999964394@gmail.com</p>
//             </a>

//             {/* Phones */}
//             <a
//               href="tel:+919999643944"
//               className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 transition"
//             >
//               <Phone size={16} className="text-orange-500" />
//               <p>+91 9999-643944</p>
//             </a>
//             <a
//               href="tel:+919911643944"
//               className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 transition"
//             >
//               <Phone size={16} className="text-orange-500" />
//               <p>+91 9911-643944</p>
//             </a>
//           </div>

//           {/* ✅ Social Links */}
//           <div className="flex items-center gap-4">
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Twitter
//                 size={18}
//                 className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
//               />
//             </a>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Facebook
//                 size={18}
//                 className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
//               />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Instagram
//                 size={18}
//                 className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
//               />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Linkedin
//                 size={18}
//                 className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* 🔶 Main Navbar */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* ✅ Logo */}
//             <Link
//               to="/"
//               className="flex items-center hover:opacity-90 transition-opacity"
//             >
//               <div className="bg-orange-500 px-3 py-1 flex items-center">
//                 <span className="text-white font-bold text-xl">WW</span>
//               </div>
//               <span className="text-orange-500 font-bold text-2xl ml-1">
//                 weldingwale
//               </span>
//             </Link>

//             {/* ✅ Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-1">
//               {menuItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>

//             {/* ✅ Mobile Menu Button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-gray-700 hover:text-orange-500"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Mobile Dropdown */}
//         {isOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200">
//             <div className="px-4 pt-2 pb-3 space-y-1">
//               {menuItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
  



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow font-[Poppins] transition-all duration-300">
      {/* 🔶 Top Contact Bar */}
      <div
        className={`hidden md:block bg-gray-50 border-b border-gray-200 transition-all duration-500 ${
          showTopBar ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-5 text-sm text-gray-700">
            <a
              href="mailto:rajkumarnimbekar999964394@gmail.com"
              className="hover:text-orange-500 transition"
            >
              rajkumarnimbekar999964394@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <a
                href="tel:+919999643944"
                className="flex items-center gap-1 hover:text-orange-500"
              >
                <Phone size={14} className="text-orange-500" />
                +91 9999-643944
              </a>
              <a
                href="tel:+919911643944"
                className="flex items-center gap-1 hover:text-orange-500"
              >
                <Phone size={14} className="text-orange-500" />
                +91 9911-643944
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔶 Main Navbar */}
      <div className="bg-white">
        <div className="max-w-8xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition">
            <div className="bg-orange-500 px-3 py-1 rounded-md flex items-center">
              <span className="text-white font-bold text-lg sm:text-xl">Rk</span>
            </div>
            <span className="text-orange-500 font-bold text-xl sm:text-2xl ml-2">
              All solution
            </span>
          </Link> 

          {/* Desktop Menu with separators */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition"
                >
                  {item.name}
                </Link>
                {/* Add separator except after last item */}
                {index < menuItems.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
            isOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-3 flex flex-col space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-orange-500 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
