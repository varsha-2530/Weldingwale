import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-[Poppins] bg-white text-gray-800 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
