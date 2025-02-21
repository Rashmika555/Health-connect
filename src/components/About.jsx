import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative text-center px-6 py-12">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-600 opacity-80"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg mb-6">
          About Health Connect
        </h1>
        <p className="text-lg text-gray-800 max-w-3xl leading-relaxed mb-8">
          Health Connect is an innovative platform designed to seamlessly
          connect **blood donors** with **recipients in need**. Our goal is to
          make the process efficient, secure, and life-saving. With real-time
          **notifications** and a **user-friendly** experience, we ensure that
          every drop counts.
        </p>

        {/* Image and Info Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1723132609837-97583cde95ba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blood Donation"
              className="w-80 h-auto rounded-xl shadow-lg border-4 border-gray-300"
            />
          </div>

          {/* Information Section */}
          <div className="w-full lg:w-1/2 text-left lg:pl-8 mt-6 lg:mt-0">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
              Why Health Connect?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              🔴 **Instant Alerts:** Get notified when a specific blood type is
              needed. <br />
              🔴 **Seamless Connection:** Easily find donors or recipients near
              you. <br />
              🔴 **User-Friendly Interface:** Designed for effortless
              navigation. <br />
              🔴 **Health Benefits:** Encourages regular donation for a
              healthier life.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10">
          <p className="text-lg text-gray-800 mb-4">
            Join our mission to save lives! Be a **donor** or find **help** when
            needed.
          </p>
          <a
            href="/get-started"
            className="px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 text-white text-sm opacity-80">
        &copy; {new Date().getFullYear()} Health Connect. All rights reserved.
      </footer>
    </div>
  );
}
