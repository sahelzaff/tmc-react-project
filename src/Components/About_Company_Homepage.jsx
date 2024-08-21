import React from "react";
import "./Components.css";
import assets from "../../public/assets/assets";

const About_Company_Homepage = () => {
  return (
    <div className="h-auto bg-tmc-red pt-20">
      <div className="flex flex-row w-full items-center justify-center h-auto">
        <div className="w-1/2 flex items-center justify-center">
          <div className="grid grid-rows-3 grid-cols-3 gap-2 w-[450px] h-auto">
            <div className="col-span-3 row-span-2 relative group cursor-pointer" data-aos='zoom-in' data-aos-duration="1000" data-aos-once="true" >
              <img src={assets.Major_Equipments} alt="aboutcompany1" />
              <img
                src={assets.play_button}
                alt="play_button"
                className="absolute inset-0 w-32 h-32 m-auto transition-transform transform scale-100 group-hover:scale-125"
              />
            </div>
            <div className="col-span-1 relative group cursor-pointer"  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
              <img src={assets.Operational_Power_Pack} alt="aboutcompany2" />
              <img
                src={assets.play_button}
                alt="play_button"
                className="absolute top-1/3 w-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform scale-100 group-hover:scale-125"
              />
            </div>
            <div className="col-span-1 relative group cursor-pointer" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
              <img src={assets.CCM_Major_Equipments} alt="aboutcompany3" />
              <img
                src={assets.play_button}
                alt="play_button"
                className="absolute top-1/3 w-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform scale-100 group-hover:scale-125"
              />
            </div>
            <div className="col-span-1 relative group cursor-pointer" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
              <img src={assets.Ladle_and_Bell_Alarm} alt="aboutcompany4" />
              <img
                src={assets.play_button}
                alt="play_button"
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform scale-100 group-hover:scale-125 w-20"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="pr-[110px]">
            <div className="flex items-center gap-3 pb-4" data-aos='fade-in' data-aos-duration="1000" data-aos-once="true" >
              <h1 className="text-white font-roboto font-semibold text-[15px]">
                About Company
              </h1>
              <div className="h-[2px] w-8 bg-white"></div>
            </div>
            <h2 className="font-bold font-roboto text-white text-4xl" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
              Leading the Way in Continuous Casting Solutions
            </h2>
            <p className="font-roboto text-white font-normal text-[16px] pt-6" data-aos='fade-in' data-aos-duration="1000" data-aos-once="true"data-aos-delay="300"> 
              We are a leading provider of Continuous Casting Machines and
              related equipment, committed to delivering high-quality products
              and exceptional services.
            </p>
            <p className="font-roboto text-white font-normal text-[16px] pt-6" data-aos='fade-in' data-aos-duration="1000" data-aos-once="true"data-aos-delay="300">
              Our team of experts is dedicated to ensuring your operations run
              smoothly and efficiently.
            </p>

            <button
              type="button"
              className="bg-transparent border-[3px] border-white text-white px-8 rounded-lg py-2 text-[20px] font-bold my-10 hover:bg-white hover:text-tmc-red "
              data-aos='fade-in' data-aos-duration="1000" data-aos-once="true"data-aos-delay="300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Company_Homepage;
