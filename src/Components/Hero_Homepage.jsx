import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Components.css';
import assets from '../../public/assets/assets';
import { Link } from 'react-router-dom';

const Hero_Homepage = ({ heading, paragraph, buttonText }) => {
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
            <img src={assets.Major_Equipments} className='h-full w-full object-cover' alt="Image 1" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
              <Link to="/products">
                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.Technical_Consultant} className='h-full w-full object-cover' alt="Image 1" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
              <Link to="/products">
                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.Tundish} className='h-full w-full object-cover' alt="Image 1" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
              <Link to="/products">
                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[80vh] w-full">
            <img src={assets.Machinery} className='h-full w-full object-cover' alt="Image 1" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
              <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
              <Link to="/products">
                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SplideSlide>
        {/* Other slides can be included similarly */}
      </Splide>
    </div>
  );
};

export default Hero_Homepage;
