import React from "react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const base =
    "inline-flex h-8 w-18 items-center px-8 py-2 rounded-3xl font-medium transition focus:outline-none focus:ring";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    success: "bg-green-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-300",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    gradient:
      "bg-gradient-to-r from-blue-500 to-blue-900 text-white hover:opacity-90 focus:ring-blue-300",
    glassy:
      "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 focus:ring-white/40 shadow-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
