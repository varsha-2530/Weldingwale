    import React from "react";
    import { Route, Routes } from "react-router-dom";
    import Layout from "./Layout/Layout";
    import HomePage from "./Pages/MainPage/HomePage";
  import AboutPage from "./Pages/RoutesPage/AboutPage";

    const App = () => {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      );
    };

    export default App;
