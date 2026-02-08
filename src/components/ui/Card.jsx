import React from "react";

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </div>
);
