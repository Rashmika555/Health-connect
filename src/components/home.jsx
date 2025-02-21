import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-300 to-red-600 p-6 text-center">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-red-600">Health Connect</h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-800 font-semibold hover:text-red-500 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 font-semibold hover:text-red-500 transition"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-800 font-semibold hover:text-red-500 transition"
          >
            Services
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-20">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Health Connect
        </h1>
        <p className="text-xl text-white opacity-90 mb-6 max-w-2xl">
          Bridging the gap between blood donors and those in need—because every
          drop matters.
        </p>

        {/* Hero Section */}
        <div className="relative w-full max-w-3xl">
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1682309740788-04a5451ee019?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blood Donation"
              className="w-full h-auto rounded-lg shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex space-x-6">
          <Link
            to="/get-started"
            className="px-8 py-3 bg-white text-red-600 font-bold text-xl rounded-full shadow-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Information Section */}
        <div className="mt-12 max-w-xl text-center bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Health Connect?
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            A trusted platform for secure and efficient blood donation
            management. Quick, safe, and reliable. Make an impact and save lives
            today.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-white opacity-80 text-sm">
          &copy; {new Date().getFullYear()} Health Connect. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
