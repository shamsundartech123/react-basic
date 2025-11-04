import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} text-white px-4 py-2 rounded-lg transition`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"])
};

export default Button;
