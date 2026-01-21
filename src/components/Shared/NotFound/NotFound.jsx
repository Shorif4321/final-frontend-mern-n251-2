import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9FBF8] px-4">
      <div className="text-center max-w-md">
        {/* Emoji */}
        <div className="text-6xl mb-4">😕</div>

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-[#34C9B6] mb-2">404</h1>

        <p className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>

        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg text-white
                     bg-[#34C9B6] hover:bg-[#2BB3A2]
                     transition duration-300
                     text-sm sm:text-base"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
