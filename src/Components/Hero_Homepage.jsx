
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css'; 
import { Splide, SplideSlide } from '@splidejs/react-splide';
assets
import './Components.css'; 
import assets from '../../public/assets/assets';

const Hero_Homepage = () => {
  return (
    <div className="hero-homepage relative">
      <Splide
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true, 
          interval: 1500,  
        }}
      >
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.hero1} className='h-full w-full object-cover' alt="Image 1" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Your Trusted Partner in Continuous Casting Machines and Equipment</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">High-quality products and expert consulting services for all your needs</p>
              <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                Explore Our Products
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.hero2} className='h-full w-full object-cover' alt="Image 2" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto">Your Trusted Partner in Continuous Casting Machines and Equipment</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto">High-quality products and expert consulting services for all your needs</p>
              <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto">
                Explore Our Products
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.hero3} className='h-full w-full object-cover' alt="Image 3" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto">Your Trusted Partner in Continuous Casting Machines and Equipment</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto">High-quality products and expert consulting services for all your needs</p>
              <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto">
                Explore Our Products
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.hero4} className='h-full w-full object-cover' alt="Image 4" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto">Your Trusted Partner in Continuous Casting Machines and Equipment</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto">High-quality products and expert consulting services for all your needs</p>
              <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto">
                Explore Our Products
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.hero5} className='h-full w-full object-cover' alt="Image 5" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto">Your Trusted Partner in Continuous Casting Machines and Equipment</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto">High-quality products and expert consulting services for all your needs</p>
              <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto">
                Explore Our Products
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero_Homepage;
