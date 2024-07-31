import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import Logement from "../pages/logement/Logement";
import Erreur from "../pages/Erreur/Erreur"


const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
