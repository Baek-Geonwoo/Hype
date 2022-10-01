import "./App.css";
import { Route, Routes } from "react-router-dom";
import Service from "./components/Service";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Location from "./components/Location";
import Piegraph from "./components/Piegraph";
import Map from "./components/Map";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [locationText, setLocationText] = useState("");
  const [locationCode, setLocationCode] = useState("");
  
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>

      <Routes>
        <Route path="/" element={<Service />}></Route>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route
          path="/location"
          element={<Location setLocationText={setLocationText} setLocationCode={setLocationCode} />}
        ></Route>
        <Route
          path="/piegraph"
          element={<Piegraph locationText={locationText} locationCode={locationCode} />}
        ></Route>
        <Route 
          path="/map" 
          element={<Map locationText={locationText} />}
        ></Route>

        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
