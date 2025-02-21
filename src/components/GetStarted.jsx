import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-300 to-red-600 p-6 text-center">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
        Get Started
      </h1>
      <p className="text-lg text-white opacity-90 mb-8 max-w-lg">
        Are you here to **donate blood** or **receive blood**? Choose your path
        below.
      </p>

      {/* Card Section */}
      <div className="flex space-x-8">
        {/* Blood Donor Card */}
        <Link
          to="/donor-login"
          className="w-64 p-6 bg-white text-red-600 font-bold text-xl rounded-2xl shadow-lg hover:shadow-2xl hover:bg-red-100 transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920326.png"
            alt="Blood Donor"
            className="w-16 h-16 mb-4"
          />
          Become a Blood Donor
        </Link>

        {/* Blood Recipient Card */}
        <Link
          to="/recipient-login"
          className="w-64 p-6 bg-white text-blue-600 font-bold text-xl rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-100 transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4213/4213926.png"
            alt="Blood Recipient"
            className="w-16 h-16 mb-4"
          />
          I Need Blood
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-white opacity-80 text-sm">
        &copy; {new Date().getFullYear()} Health Connect. All rights reserved.
      </footer>
    </div>
  );
}
