import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/MainPage/HomePage";
import AboutPage from "./Pages/RoutesPage/AboutPage";
import ContactPage from "./Pages/RoutesPage/ContactPage";
import ServicesPage from "./Pages/RoutesPage/ServicesPage";
import ProductPage from "./Pages/RoutesPage/ProductPage";
import HomeServicePage from "./Pages/RoutesPage/HomeServicePage";

import BlogPage from "./Pages/RoutesPage/BlogPage/BlogPage";
import BlogDetail from "./Pages/RoutesPage/BlogPage/BlogDetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
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

        </Routes>
      </Layout>
    </>
  );
};

export default App;
