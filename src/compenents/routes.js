import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import Logement from "../pages/logement/Logement";
import ErrorPage from "../pages/Erreur/Erreur";


const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
