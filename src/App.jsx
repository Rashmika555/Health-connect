import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted";
import DonorLogin from "./components/DonorLogin";
import RecipientLogin from "./components/RecipientLogin";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Bar */}
        <nav className="bg-red-600 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">Health Connect</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
              <a href="/service" className="hover:text-gray-300">
                Services
              </a>
              <a href="/get-started" className="hover:text-gray-300">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/donor-login" element={<DonorLogin />} />
          <Route path="/recipient-login" element={<RecipientLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
