    import React, { useEffect } from "react";
    import { Route, Routes, useLocation } from "react-router-dom";
    import Layout from "./Layout/Layout";
    import HomePage from "./Pages/MainPage/HomePage";
  import AboutPage from "./Pages/RoutesPage/AboutPage";
import ContactPage from "./Pages/RoutesPage/ContactPage";


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

          </Routes>
        </Layout>
        </>
      );
    };

    export default App;
