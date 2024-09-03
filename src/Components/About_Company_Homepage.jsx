import React from "react";
import "./Components.css";
import assets from "../../public/assets/assets";

const About_Company_Homepage = () => {
  return (
    <div className="h-auto bg-tmc-red py-20">
      <div className="flex flex-row w-full items-center justify-center h-auto">
          <div className="w-1/2 flex items-center justify-center">
            <div className="relative group cursor-pointer w-[450px] h-auto" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
              <img src={assets.about_company} className="rounded-lg" alt="aboutcompany1" />
              {/* <img
                src={assets.play_button}
                alt="play_button"
                className="absolute inset-0 w-32 h-32 m-auto transition-transform transform scale-100 group-hover:scale-125"
                style={{ filter: "invert(35%) sepia(89%) saturate(7336%) hue-rotate(349deg) brightness(97%) contrast(117%)" }}
              /> */}
            </div>
          </div>
        <div className="w-1/2">
          <div className="pr-[110px]">
            <div className="flex items-center gap-3 pb-4" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
              <h1 className="text-white font-roboto font-semibold text-[15px]">
                About Company
              </h1>
              <div className="h-[2px] w-8 bg-white"></div>
            </div>
            <h2 className="font-bold font-roboto text-white text-4xl" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Leading the Way in Continuous Casting Solutions
            </h2>
            <p className="font-roboto text-white font-normal text-[16px] pt-6" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
              We are a leading provider of Continuous Casting Machines and
              related equipment, committed to delivering high-quality products
              and exceptional services.
            </p>
            <p className="font-roboto text-white font-normal text-[16px] pt-6" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
              Our team of experts is dedicated to ensuring your operations run
              smoothly and efficiently.
            </p>

            <button
              type="button"
              className="bg-transparent border-[3px] border-white text-white px-8 rounded-lg py-2 text-[20px] font-bold my-10 hover:bg-white hover:text-tmc-red"
              data-aos="fade-in" data-aos-duration="1000" data-aos-once="true"
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
