import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
    <Navbar/>
      <Home/>
      <Slider/>
    </div>
  );
};

export default App;
