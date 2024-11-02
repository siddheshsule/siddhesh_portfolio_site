import React from "react";

const Border = () => {
  return (
    <div className="relative flex items-center justify-center w-full my-8">
      {/* Glowing Dots */}
      <span className="absolute left-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse"></span>
      <span className="absolute right-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse"></span>

      {/* Gradient Border Line */}
      <div className="w-[80%] h-0.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 opacity-40"></div>
    </div>
  );
};

export default Border;
