import React from "react";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-[#800000] text-white hover:bg-red-900",
    outline: "border-2 border-[#800000] text-[#800000] hover:bg-red-50",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
