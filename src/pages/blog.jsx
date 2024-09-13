import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="relative w-full h-[30vh]">
          <img 
            className="w-full h-full object-cover"
            src={Images.carousel1}
            alt="contact"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-5xl text-white">Contact</h3>

          </div>
        </div>  
        </div>
    );
};

export default Blog;