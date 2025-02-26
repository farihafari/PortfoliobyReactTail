import React, { useState } from "react";
import { MdClose, MdMenu,MdOutlineAddShoppingCart } from "react-icons/md";


const HeaderCom = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-950 text-white fixed top-0 left-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <h1 to="/" className="text-2xl font-bold">
              <span className="uppercase text-blue-500 text-4xl">F</span>ashion
              <span className="uppercase text-blue-500 text-4xl">s</span>tore
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex space-x-6">
              <li  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">
                Home
              </li>
              <li  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">
                products
              </li>
              <li className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">
               about
              </li>
              <li className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">
                Contact
              </li>
              <li className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer py-2">
              <MdOutlineAddShoppingCart />
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="hover:text-gray-300 hidden xl:block capitalize font-bold cursor-pointer">Log In</button>
            <button className="hover:text-gray-300 hidden xl:block capitalize font-bold cursor-pointer">Register</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700">
              {!isMenuOpen ? <MdMenu className="block w-6 h-6" /> : <MdClose className="block w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-amber-950">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <li  className="block text-white text-md hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold py-2 px-2">
              Home
            </li>
            <li  className="block text-white text-md hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold py-2 px-2">
             products
            </li>
            <li  className="block text-white text-md hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold py-2 px-2">
              about
            </li>
            <li  className="block text-white text-md hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold py-2 px-2">
              Contact
            </li>
            <li to="/profile" className="block text-white text-md hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold py-2 px-2">
            <MdOutlineAddShoppingCart />
            </li>

            <button className="hover:text-gray-300 block capitalize font-bold cursor-pointer px-2 py-2">Log In</button>
            <button className="hover:text-gray-300 block capitalize font-bold cursor-pointer px-2 py-2">Register</button>
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderCom;
