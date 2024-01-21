import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer  from "./components/Footer";
import Slider from "./components/Slider";
import About from "./components/About";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div>
    <Navbar/>
      <Home/>
      <Slider/>
      <About/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default App;
