import React, { useState } from 'react';
import { Images } from '../constant';
import { Link } from 'react-router-dom';
import { GrShop } from 'react-icons/gr';
import { TfiUser } from 'react-icons/tfi';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <div className='flex justify-between items-center shadow-xl py-5 px-4 md:px-10'>
      
      <div>
        <img src={Images.Logo} alt="Logo" />
      </div>

      {/* Menu for Mobile */}
      <div className='md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Navbar Links */}
      <div className={`flex flex-col md:flex-row gap-4 md:gap-10 text-lg absolute md:static bg-white w-full md:w-auto md:h-auto md:opacity-100 transition-all duration-300 ease-in ${isMenuOpen ? 'top-16 left-0 opacity-100' : 'top-[-100%] left-0 opacity-0'}`}>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/">Home</Link>
        </div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/shopPage">Shop</Link>
        </div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/sale">Sale</Link>
        </div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/features">Features</Link>
        </div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/blog">Blog</Link>
        </div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/about">About</Link>
        </div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* User and Shop Icons */}
      <div className='flex gap-3 text-2xl text-gray-500'>
        <div className='border-r-2 pr-3'>
          <Link to="/sign-up"><TfiUser /></Link>
        </div>
        <div>
          <GrShop />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
