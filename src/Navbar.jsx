import React from "react";
import { useState } from "react";
import Menu from './assets/PMENU.png';
import Back from'./assets/Delete.png';
import { Link } from "react-router-dom";
function Navbar(){
const [nav, setNav] = useState(false);
const handleClick =()=> setNav(!nav);
const closeMobileMenu =()=> setNav(false);  

  return (
    <div>
    <div className="flex justify-between items-center h-24 bg-gray-900 rounded-2xl  px-4 relative z-50">
      <h1 className="text-3xl ml-4 font-bold font-serif text-white">PORTFOLIO <span className="text-red-500 ">.</span></h1>

      <ul className="hidden md:flex md:gap-6 xl:gap-14 text-white mr-7">
       <Link to='/'> <li className="hover:text-red-500">Home</li></Link>
        <Link to='/about'><li className="hover:text-red-500">About</li></Link>
        <Link to="/services"><li className="hover:text-red-500">Projects</li></Link>
        
        <Link to="/contact"><li className="hover:text-red-500">Contact</li></Link>
         
      </ul>
      <div className="md:hidden cursor-pointer z-50 text-white" onClick={handleClick}>
        <img className="w-8" src={nav ? Back : Menu} alt="menu toggle" />
    </div>
    
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-black text-white transition-transform duration-300 ease-in-out z-40 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-3xl font-bold font-serif mt-6 ml-4">PORFOLIO <span className="text-red-500 ">.</span></h1>
        <ul className="pt-8 uppercase">
           <Link to="/" onClick={closeMobileMenu}><li className="p-4 border-b border-white hover:text-red-500">Home</li></Link>
            <Link to="/about" onClick={closeMobileMenu}><li className="p-4 border-b border-white hover:text-red-500">About</li></Link>
            <Link to="/services" onClick={closeMobileMenu}><li className="p-4 border-b border-white hover:text-red-500">Projects</li></Link>
          
            <Link to="/contact" onClick={closeMobileMenu}><li className="p-4 border-b border-white hover:text-red-500">Contact</li></Link>
          
        </ul>
    </div>
      </div>
</div>
    
  );
}
export default Navbar;