import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
