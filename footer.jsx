import React from "react";
import PropTypes from "prop-types";

const Footer = ({ copyright, links }) => {
  return (
    <footer className="bg-gray-100 p-4 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-2">
          {links?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-blue-600 hover:text-blue-800"
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="text-gray-600">{copyright}</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default Footer;
