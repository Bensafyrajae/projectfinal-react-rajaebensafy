import React from 'react';
import { Images } from '../constant';
import { Link } from 'react-router-dom';
import { GrShop } from 'react-icons/gr';
import { TfiUser } from 'react-icons/tfi';

const Navbar = () => {
  return (
    <div className='flex justify-around shadow-xl py-5 justify-items-center'>
        <div><img src={Images.Logo} alt="" /></div>
        <div className='flex gap-10 text-lg'>
            <div className='active:text-red-600 hover:border-b-2 hover:border-black'><a href="" ><Link to={"/"}> Home</Link></a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/shop"}> Shop</Link> </a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/sale"}> Sale</Link></a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/features"}> Features</Link></a></div>
            <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href=""><Link to={"/blog"}> Blog</Link></a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/about"}> About</Link></a></div>
            <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href=""><Link to={"/contact"}> Contact</Link></a></div>
        </div>
        <div className='flex gap-3 text-2xl text-gray-300 opacity-1'>
            <div className='border-e-4 pe-3'><Link to={"/sign-up"}> <TfiUser /></Link></div>
            <div><GrShop />
            </div>

        </div>
    </div>
);
};

export default Navbar;