import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Cursor from "./components/UI/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import PageLoader from "./components/UI/PageLoader/PageLoader";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Page404 from "./pages/Page404/Page404";
import Codepen from "./pages/Codepen/Codepen";

const App = () => {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <PageLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/codepen" element={<Codepen />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
