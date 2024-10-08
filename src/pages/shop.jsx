import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import data from "../json/data.json";
import { useNavigate } from 'react-router-dom';
import { Images } from '../constant';


const Shop = () => {
    let navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedColors, setSelectedColors] = useState([]);

    const handleFilter = (e) => {
        setSelectedFilter(e.target.value);
    };

    const handleColorChange = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter(e => e !== color)); 
        } else {
            setSelectedColors([...selectedColors, color]); 
        }
    };
    const filteredData = data.filter(item => {
        const matchesFilter = selectedFilter ? item.type.toLowerCase() === selectedFilter.toLowerCase() : true;
        const matchesColor = selectedColors.length > 0 ? selectedColors.includes(item.color.toLowerCase()) : true;
        return matchesFilter && matchesColor;
    });

    return (
        <>
            <div>
                <div className='relative'>
                    <img src={Images.fillete} alt="" className='object-cover h-[40vh] w-[100vw]' />
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>PRODUCTS</p>
                    </div>
                </div>
            </div>
            <section className='flex gap-12 py-16 px-12'>
                <div className='w-[20%]'>
                    <div className='relative'>
                        <input type="text" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px]' placeholder='Search all articles...' />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className='pb-10 flex flex-col gap-3'>
                        <p className='text-[#333] text-[22px] font-extrabold pb-5 pt-7 '>Categories</p>
                        <p className='text-[#333] cursor-pointer transition duration-500 hover:text-[#e65540] '>Best Seller (8 items)</p>
                        <p className='text-[#888] cursor-pointer transition duration-500 hover:text-[#e65540]'>Featured (8 items)</p>
                        <p className='text-[#888] cursor-pointer transition duration-500 hover:text-[#e65540]'>Men (8 items)</p>
                        <p className='text-[#888] cursor-pointer transition duration-500 hover:text-[#e65540]'>Women (8 items)</p>
                    </div>

                    {/* Filtres de couleur */}
                    <div className='pb-10 flex flex-col gap-3'>
                        <p className='text-[#333] text-[22px] font-extrabold pb-5 '>Color</p>
                        <div className='flex gap-2'>
                            <input type="checkbox" onChange={() => handleColorChange('black')} />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540]'>Black</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" onChange={() => handleColorChange('gray')} />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540]'>Gray</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" onChange={() => handleColorChange('red')} />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540]'>Red</label>
                        </div>
                    </div>
                    <div className='pb-10 flex flex-col gap-3'>
                        <p className='text-[#333] text-[22px] font-extrabold pb-5 '>size</p>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">L</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">M</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">S</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">XL</label>
                        </div>
                    </div>
                </div>

                {/* Partie droite */}
                <div className='w-[80%]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <select className="mt-2 py-2 px-5 border border-gray-200" onChange={handleFilter} value={selectedFilter}>
                                <option value="" className='text-[#555]' disabled>Select an option</option>
                                <option value="sale" className='text-[#555]'>Sale</option>
                                <option value="new" className='text-[#555]'>New</option>
                                <option value="instock" className='text-[#555]'>InStock</option>
                            </select>

                            <select className="mt-2 py-2 px-5 border border-gray-200">
                                <option value="" className='text-[#555]' disabled>Select an option</option>
                                <option value="10" className='text-[#555]'>10</option>
                                <option value="20" className='text-[#555]'>20</option>
                                <option value="30" className='text-[#555]'>30</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[#888] text-[13px]'>Showing 1 to {filteredData.length} of {data.length} items</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap pt-10 gap-8'>
                        {filteredData.length > 0 ? (
                            filteredData.map((e) => (
                                <div key={e.id} className='flex flex-col w-[30%]'>
                                    <div className='relative group'>
                                        <img src={Images[e.affiche]} alt={e.name} className='w-[100%] transition-all duration-300 ease-in-out group-hover:brightness-75' />
                                        <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <button className='bg-white py-3 px-12 w-[210px] rounded-full text-black transition duration-500 hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
                                        </div>
                                    </div>
                                    <div className='pt-5'>
                                        <p className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer'>{e.name}</p>
                                        <p className='text-[#555] pb-2'>{e.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items found for the selected filters.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;