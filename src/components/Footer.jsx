import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container md:mx-auto flex md:flex-row flex-col items-center md:justify-between">
        <div className="flex flex-col md:flex-row  items-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="text-lg" />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </a>
          </div>
          
          {/* Copyright */}
          <div>&copy; 2023 Your Company</div>
        </div>

        {/* Customer Service Contact */}
        <div className="flex md:flex-row flex-col space-x-4">
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            <span className="ml-2">support@yourcompany.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
            <span className="ml-2">1-800-123-4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
