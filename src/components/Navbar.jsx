import React, { useState } from 'react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShopSubMenuOpen, setShopSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleShopMenuEnter = () => {
    setShopSubMenuOpen(true);
  };

  const handleShopMenuLeave = () => {
    setShopSubMenuOpen(false);
  };

  const handleShopSubMenuEnter = () => {
    setShopSubMenuOpen(true);
  };

  const handleShopSubMenuLeave = () => {
    setShopSubMenuOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Logo</div>
        </div>

        {/* Centered Menu */}
        <ul className="flex-grow hidden lg:flex justify-center space-x-16">
          <li><a href="#" className="hover:text-gray-300">Articles</a></li>
          <li>
            <div
              className="relative group"
              onMouseEnter={handleShopMenuEnter}
              onMouseLeave={handleShopMenuLeave}
            >
              <a
                href="#"
                className="hover:text-gray-300"
              >
                Shop
              </a>
              {/* Submenu */}
              {isShopSubMenuOpen && (
                <ul
                  className="absolute left-0 top-full bg-gray-800 text-white p-2 space-y-2"
                  onMouseEnter={handleShopSubMenuEnter}
                  onMouseLeave={handleShopSubMenuLeave}
                >
                  <li><a href="#" className="hover:text-gray-300">Popular</a></li>
                  <li><a href="#" className="hover:text-gray-300">Most Viewed</a></li>
                  <li><a href="#" className="hover:text-gray-300">Newest</a></li>
                  <li><a href="#" className="hover:text-gray-300">Random</a></li>
                </ul>
              )}
            </div>
          </li>
          <li><a href="#" className="hover:text-gray-300">Magazine</a></li>
          <li><a href="#" className="hover:text-gray-300">Help</a></li>
        </ul>

        {/* User, Cart, Toggle Button */}
        <div className="flex items-center space-x-4">
          <div><a href="#" className="hover:text-gray-300"><UserIcon className="h-6 w-6" /></a></div>
          <div><a href="#" className="hover:text-gray-300"><ShoppingCartIcon className="h-6 w-6" /></a></div>

          {/* Toggle Button for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                   className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-4">
            {/* Close Button */}
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                   className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="text-white text-center">
            <li><a href="#" className="block py-2">Articles</a></li>
            <li>
              <div
                className="relative group"
                onMouseEnter={handleShopMenuEnter}
                onMouseLeave={handleShopMenuLeave}
              >
                <a
                  href="#"
                  className="block py-2"
                >
                  Shop
                </a>
                {/* Submenu */}
                {isShopSubMenuOpen && (
                  <ul className="bg-gray-800 text-white p-2 space-y-2">
                    <li><a href="#" className="hover:text-gray-300">Popular</a></li>
                    <li><a href="#" className="hover:text-gray-300">Most Viewed</a></li>
                    <li><a href="#" className="hover:text-gray-300">Newest</a></li>
                    <li><a href="#" className="hover:text-gray-300">Random</a></li>
                  </ul>
                )}
              </div>
            </li>
            <li><a href="#" className="block py-2">Magazine</a></li>
            <li><a href="#" className="block py-2">Help</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
