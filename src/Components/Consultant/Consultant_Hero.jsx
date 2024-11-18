import React from 'react';
import assets from '../../../public/assets/assets';

const Consultant_Hero = () => {
  return (
    <div className="relative h-80 w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${assets.poster_explore})` }}
      />
      <div className="relative flex flex-col items-start justify-center h-full w-full">
        <h1 className="text-4xl font-bold text-white font-roboto w-96 text-center">
          Expert Consulting Services
        </h1>
      </div>
    </div>
  );
};

export default Consultant_Hero; 