import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from './components/Footer'
import PropertyDetails from './pages/PropertyDetails'
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div className="lg:max-w-[86.66%] mx-auto bg-white">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
