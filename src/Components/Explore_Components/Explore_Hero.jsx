import React from 'react';
import assets from '../../../public/assets/assets';
import { Link } from 'react-router-dom';

const Product_Hero = () => {
  return (
    <div className="relative h-80 w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${assets.poster_explore})` }}       />

      {/* White Overlay */}
      {/* <div className="absolute inset-0 bg-white opacity-60 h-full w-full"></div> */}

      {/* Text on Top */}
      <div className='relative h-auto w-full'>
        
      </div>
      <div className="relative flex flex-col items-start justify-center h-full w-full">
        <h1 className="text-4xl font-bold text-white font-roboto w-96 text-center">Explore Our Experienced Team</h1>
        {/* <p className='text-lg py-sm font-normal text-gray-100 font-roboto w-96 text center'>And Major Equipment Designed for Optimal Performance</p> */}
      </div>
    </div>
  );
};

export default Product_Hero;
