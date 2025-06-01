import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Select from "./components/Select";
import Earthquake from "./components/Earthquake";
import Flood from "./components/Flood";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import About from "./components/About";
import Scroll_to_top from "./components/Scroll_to_top";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ForestFire from "./components/ForestFire";

function App() {
  return (
    <>
      <BrowserRouter>
        <Scroll_to_top />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Select />
              </>
            }
          />
          <Route exact path="/Earth" element={<Earthquake />} />
          <Route exact path="/Flood" element={<Flood />} />
          <Route exact path="/ForestFire" element={<ForestFire />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
