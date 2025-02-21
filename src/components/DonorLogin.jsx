import React from "react";

export default function DonorLogin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-300 to-red-600 p-6">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Donor Login
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Enter your details to proceed as a **Blood Donor**.
        </p>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Enter your blood type"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Login Button */}
        <button className="mt-6 w-full px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-red-700 transition">
          Login
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-4">
          Need help?{" "}
          <a href="#" className="text-red-600 hover:underline">
            Contact Support
          </a>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 text-white text-sm opacity-80">
        &copy; {new Date().getFullYear()} Health Connect. All rights reserved.
      </div>
    </div>
  );
}
