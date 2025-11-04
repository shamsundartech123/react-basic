import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-100 p-4 text-center shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Header;
