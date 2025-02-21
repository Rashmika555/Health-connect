import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-red-600">
          Health Connect
        </Link>
        <div className="space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-red-600">
            About
          </Link>
          <Link to="/service" className="text-gray-600 hover:text-red-600">
            Services
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
