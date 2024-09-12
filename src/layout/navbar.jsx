import React from 'react';
import { Images } from '../constant';
import { LuUserCircle } from 'react-icons/lu';

import { GrShop } from 'react-icons/gr';
import { TfiUser } from 'react-icons/tfi';

const Navbar = () => {
  return (
    <div className='flex justify-around shadow-xl py-5 justify-items-center'>
        <div><img src={Images.Logo} alt="" /></div>
        <div className='flex gap-10 text-lg'>
            <div className='active:text-red-600 hover:border-b-2 hover:border-black'><a href="" >Home</a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">Shop</a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">Sale</a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">Features</a></div>
            <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href="">Blog</a></div>
            <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">About</a></div>
            <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href="">Contact</a></div>
        </div>
        <div className='flex gap-3 text-2xl text-gray-300 opacity-1'>
            <div className='border-e-4 pe-3'><TfiUser /></div>
            <div><GrShop />
            </div>

        </div>
    </div>
);
};

export default Navbar;