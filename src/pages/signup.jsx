import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <>
        <div className='flex'><a className=' hover:text-[#e65540]' href="" ><Link to={"/"}> Home</Link></a><p>&nbsp;account</p></div>
        <div className='flex justify-center items-center gap-3 h-[70vh] '>
            <div className=' p-6 border w-[50vw]  flex flex-col gap-2 '>
                <h1 className='text-xl font-semibold'>New Customer</h1>
                <p className='text-lg text-gray-600'>Register Account</p>
                <p className='text-lg text-gray-500'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                <button class="block w-[15vw] text-center  bg-black px-14 py-3 font-medium text-white">Continue</button>
            </div>
            <div className=' p-6 border w-[50vw] flex flex-col gap-2  '>
            <h1 className='text-xl font-semibold'>Returning Customer</h1>
            <p className='text-lg text-gray-600'>I am a returning customer</p>
            <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input type="email" id="email"className="w-full p-2 border border-gray-300 rounded" placeholder="Email" />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input type="password"id="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Password"/>
        </div>
        <p className='text-lg text-gray-600 hover:text-[#e65540]'>Forgot your password?</p>
       <div className='flex gap-2'> 
        <button class="block w-[15vw] text-center  bg-black px-14 py-3 font-medium text-white">Sign-IN</button>
        <p className='text-gray-600 '>or<span className='text-lg text-gray-600 hover:text-[#e65540]'>Return to Store</span></p>
        </div>
            </div>
            
        </div>
        </>
    );
};

export default Signup;