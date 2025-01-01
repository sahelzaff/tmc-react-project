import React from 'react';
import assets from '../../../public/assets/assets';
import { Link } from 'react-router-dom';

const Product_Hero = () => {
  return (
    <div className="relative h-80 w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${assets.poster_explore})` }}
      />

      {/* Dark Overlay for Mobile */}
      <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-0 h-full w-full"></div>

      {/* Text on Top */}
      <div className="relative flex flex-col items-start justify-center h-full w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white font-roboto w-full md:w-96 text-center">Explore Our Experienced Team</h1>
      </div>
    </div>
  );
};

export default Product_Hero;
