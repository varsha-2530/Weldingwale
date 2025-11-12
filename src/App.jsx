  import React, { useEffect, useState } from "react";
  import { Route, Routes, useLocation } from "react-router-dom";
  import "aos/dist/aos.css";

  import Layout from "./Layout/Layout";
  import HomePage from "./Pages/MainPage/HomePage";
  import AboutPage from "./Pages/RoutesPage/AboutPage";
  import ContactPage from "./Pages/RoutesPage/ContactPage";
  import ServicesPage from "./Pages/RoutesPage/ServicesPage";
  import ProductPage from "./Pages/RoutesPage/ProductPage";
  import HomeServicePage from "./Pages/RoutesPage/HomeServicePage";
  import BlogPage from "./Pages/RoutesPage/BlogPage/BlogPage";
  import BlogDetail from "./Pages/RoutesPage/BlogPage/BlogDetail";
  import ShutterPage from "./Pages/ShutterPage/ShutterPage";
  import MetalIron from "./Pages/NavbarRoutes/MetalIron";
  import Stainless from "./Pages/NavbarRoutes/Stainless";
  import Aluminium from "./Pages/NavbarRoutes/Aluminium";
  import Sheds from "./Pages/NavbarRoutes/Sheds";
  import Furniture from "./Pages/NavbarRoutes/Furniture";
  import ServiceDetailPage from "./Pages/DetailPage/ServiceDetailPages/ServiceDetailPage";

  // 🌀 Simple Loader Component
  const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
  };

  const App = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      // Show loader when route changes
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700); // 0.7s delay for smooth transition
      return () => clearTimeout(timer);
    }, [location]);

    return (
      <>
        {loading && <Loader />}
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/home-services" element={<HomeServicePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/shutter" element={<ShutterPage />} />
            <Route path="/metal-iron" element={<MetalIron />} />
            <Route path="/stainless-steel" element={<Stainless />} />
            <Route path="/aluminium" element={<Aluminium />} />
            <Route path="/sheds" element={<Sheds />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
          </Routes>
        </Layout>
      </>
    );
  };

  export default App; 
    