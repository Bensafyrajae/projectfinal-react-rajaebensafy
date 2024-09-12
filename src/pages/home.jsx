import React from 'react';
import Slider from "react-slick";
import { Images } from '../constant';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';

const Home = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
  <section>
    <div className="relative w-full">
      <Slider ref={sliderRef} className="overflow-hidden " {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[80vh]">
          <img 
            className="w-full h-full object-cover"
            src={Images.carousel1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-xl text-white">Women Collection 2018</h3>
            <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
            <button className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={Images.carousel2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-xl text-white">Women Collection 2018</h3>
            <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
            <button className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={Images.carousel3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-xl text-white">Women Collection 2018</h3>
            <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
            <button className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
              SHOP NOW
            </button>
          </div>
        </div>
      </Slider>

       {/* Next  Prev buttons  */}
      <button 
        onClick={handlePrev} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-500"
      >
        <GrFormPrevious/>
      </button>
      <button 
        onClick={handleNext} 
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-500"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
    </section>
    <section>
    <div className='flex  justify-center justify-items-center gap-5'>
    <div className='flex flex-col gap-5'>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Images.robe} alt="" className='hover:scale-110' />
   <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>DRESSES</button></div>
  <div className='relative overflow-hidden'> 
    
<img src={Images.lunette} alt="" className='w-[25vw] h-[40vh]  hover:scale-110 ' />
   <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>SUNGLASSES</button>
   </div>
    </div>
    <div className='flex flex-col gap-5'>
   <div  className='relative overflow-hidden'>
    <img src={Images.watch} alt=""className='w-[25vw] h-[40vh] hover:scale-110' />
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>WATCHES</button>
    </div>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Images.shoes} alt=""  className='hover:scale-110'/>
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>FOOTERWEAR</button>
    </div>
    </div>
    <div className='flex flex-col gap-5'>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Images.bags} alt="" className='hover:scale-110' />
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>BAGS</button>
    </div>
   <div className='relative overflow-hidden' >
    <img src={Images.assecoires} alt="" className='w-[25vw] h-[40vh] hover:scale-110 ' />
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>ASSECOIRES</button>
    </div>
    </div>
  
  </div>
</section>

    <section>
    <h2 className="text-2xl md:text-3xl font-bold m-10 text-center">
     OUR BLOG
      </h2>
  <div class="mx-8 my-10 gap-7 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
  
  <div class="group cursor overflow-hidden w-[28vw] h-[70vh]  ">
    <div >
      <img src={Images.cartable} className='transform transition-transform duration-300 hover:scale-110 w-full h-[40vh] mb-3' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className=' font-semibold hover:text-[#e65540] mb-3'>Black Friday Guide: Best Sales & Discount Codes</h1>
      <p class=" text-gray-600 mb-3">by fashe-theme Admin on Dec 28,2017</p>
      <p class=" text-gray-600">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
     
      </div>
    </div>
    <div class="group cursor overflow-hidden w-[28vw] h-[70vh]  ">
    <div >
      <img src={Images.fillete} className='transform transition-transform duration-300 hover:scale-110 w-full h-[40vh] mb-3' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className='font-semibold hover:text-[#e65540] mb-3'>The White Sneakers Nearly Every Fashion Girls Own</h1>
      <p class=" text-gray-600 mb-3">by fashe-theme Admin on Dec 28,2017</p>
      <p class=" text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
     
      </div>
    </div>
    <div class="group cursor overflow-hidden w-[28vw]  h-[70vh] ">
    <div >
      <img src={Images.carousel1} className='transform transition-transform duration-300 hover:scale-110 w-full h-[40vh] mb-3' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className='font-semibold  hover:text-[#e65540] mb-3'>New York SS 2018 Street Style: By Annina Mislin</h1>
      <p class=" text-gray-600 mb-3">by fashe-theme Admin on Dec 28,2017</p>
      <p class=" text-gray-600">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
     
      </div>
    </div>
  </div>
  </section>
  
<section>
<div className="w-full py-16 bg-white text-center">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-16">
        @ FOLLOW US ON INSTAGRAM
      </h2>

      
      <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-10 text-gray-700">
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Free Delivery Worldwide</h3>
          <p className="text-gray-500 italic text-sm">
            Mirum est notare quam littera gothica
          </p>
        </div>
        
        
        <div className=" h-16 border-l border-gray-300"></div>
        
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">30 Days Return</h3>
          <p className="text-gray-500 italic text-sm">
            Simply return it within 30 days for an exchange.
          </p>
        </div>
        
    
        <div className="hidden md:block h-16 border-l border-gray-300"></div>
        
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Store Opening</h3>
          <p className="text-gray-500 italic text-sm">
            Shop open from Monday to Sunday
          </p>
        </div>
      </div>
    </div>
</section>





  
  </>
  );
};

export default Home;
