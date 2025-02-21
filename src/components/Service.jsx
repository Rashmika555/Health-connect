import React from "react";

export default function Service() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative text-center px-6 py-12">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-700 opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl bg-white bg-opacity-95 p-10 rounded-xl shadow-2xl">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg mb-6">
          Our Services
        </h1>
        <p className="text-lg text-gray-800 max-w-3xl leading-relaxed mb-8">
          At **Health Connect**, we provide a seamless experience for both blood
          donors and recipients. Our platform ensures **quick, secure, and
          efficient connections** to save lives.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <img
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blood Donation"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Donor Registration
            </h2>
            <p className="text-gray-700">
              Easily sign up to become a blood donor and help save lives in your
              community.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <img
              src="https://plus.unsplash.com/premium_photo-1723044801430-a74991648e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blood Recipients"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recipient Matching
            </h2>
            <p className="text-gray-700">
              Instantly find a suitable donor based on your required **blood
              type** and location.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <img
              src="https://images.unsplash.com/photo-1736325680518-397f54bd1086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Emergency Alerts"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Emergency Alerts
            </h2>
            <p className="text-gray-700">
              Get real-time notifications when someone urgently needs a
              **specific blood type**.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <p className="text-lg text-gray-800 mb-4">
            Ready to make a difference? Join **Health Connect** today!
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
