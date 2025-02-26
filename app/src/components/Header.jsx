import React, { useState } from "react";
import {MdClose, MdMenu} from "react-icons/md";
import {NavLink, Link } from "react-router";
import { useNavigate } from 'react-router'
const Header = () => {
//   const navLinkStyles =({isActive})=>{
// return ({
//   fontWeight: isActive ? "bold" : "normal",
//   backgroundColor: isActive ? "blue" : "black",
//   color: isActive ? "white" : "black",
//   padding:isActive ? "10px 20px" : "",
//   borderRadius :isActive ? "10px" : "",
// });
//   }
 const navigate = useNavigate();

    const [isMenuOpen,setIsMenuOpen] = useState(false);
  // const MenuItems = ["home", "about", "services", "contact"];
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
}
  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="uppercase text-blue-500 text-4xl">P</span>ort
              <span className="uppercase text-blue-500 text-4xl">f</span>olio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex space-x-6">
              {/* {MenuItems.map((item, index) => (
                <Link to=""
                  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer"
                  key={index}
                >
                  {item}
                </Link>
              ))} */}
              <Link to='/'  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">Home</Link>
              <Link to='/about'  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">about</Link>
              <NavLink to='/services'  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">services</NavLink>
              <Link to='/register'  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">contact</Link>
              <NavLink to='/profile'  className="text-white text-xl hover:text-blue-500 transition duration-300 ease-in-out capitalize font-bold cursor-pointer">Profile</NavLink>

            </ul>
          </div>

          {/* Auth Button */}
          <div className="hidden lg:flex item-center space-x-4">
            <button className="hover:text-gray-300 hidden xl:block capitalize font-bold cursor-pointer">log in</button>
            <button className="hover:text-gray-300 hidden xl:block capitalize font-bold cursor-pointer">add services</button>
            <button onClick={()=> navigate('/project')} className="hover:text-gray-300  bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 capitalize font-bold cursor-pointer">View Projects</button>
            {/* <button onClick={()=> navigate('/project',{replace:true})} className="hover:text-gray-300  bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 capitalize font-bold cursor-pointer">View Projects</button>   */}
            {/* for remove all history */}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700">
        {
            !isMenuOpen ? (<MdMenu  className="block w-6 h-6"/>):(<MdClose className="block w-6 h-6" />)
        }
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {
        isMenuOpen && (
        <div className="md:hidden">
<div className="px-2 pt-2 pb-3 space-y-1">
<ul>
    {MenuItems.map((item, index) => (
        <li className="text-white text-md hover:text-blue-500 transition duration-300 ease-in-out capitaliz py-2 px-2 capitalize font-bold"  key={index}>
            {item}
        </li>
    ))}
</ul>
<button className="hover:text-gray-300  capitalize font-bold cursor-pointer px-2 py-2">log in</button>
            <button className="hover:text-gray-300  block capitalize font-bold cursor-pointer px-2 py-2">add services</button>
            <button className="hover:text-gray-300  bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 capitalize font-bold cursor-pointer mx-2 my-2">View Projects</button>
</div>
        </div>
        )
      }
    </nav>
  );
};

export default Header;
