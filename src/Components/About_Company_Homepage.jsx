import React from "react";
import "./Components.css";
import assets from "../../public/assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About_Company_Homepage = () => {
  return (
    <div className="h-auto bg-tmc-red py-10 md:py-20">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center h-auto px-4 md:px-0">
          <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
            <motion.div 
              className="relative group cursor-pointer w-full max-w-[450px] h-auto px-4 lg:px-0" 
              data-aos="zoom-in" 
              data-aos-duration="1000" 
              data-aos-once="true"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={assets.about_Company} 
                className="rounded-lg w-full h-auto shadow-lg" 
                alt="About Company" 
              />
            </motion.div>
          </div>

        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <div className="lg:pr-[110px]">
            <motion.div 
              className="flex items-center gap-3 pb-4" 
              data-aos="fade-in" 
              data-aos-duration="1000" 
              data-aos-once="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-white font-roboto font-semibold text-[15px]">
                About Company
              </h1>
              <div className="h-[2px] w-8 bg-white"></div>
            </motion.div>

            <motion.h2 
              className="font-bold font-roboto text-white text-2xl md:text-3xl lg:text-4xl mb-4" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-once="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leading the Way in Continuous Casting Solutions
            </motion.h2>

            <motion.p 
              className="font-roboto text-white font-normal text-[14px] md:text-[16px] mb-4" 
              data-aos="fade-in" 
              data-aos-duration="1000" 
              data-aos-once="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              We are a leading provider of Continuous Casting Machines and
              related equipment, committed to delivering high-quality products
              and exceptional services.
            </motion.p>

            <motion.p 
              className="font-roboto text-white font-normal text-[14px] md:text-[16px] mb-8" 
              data-aos="fade-in" 
              data-aos-duration="1000" 
              data-aos-once="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our team of experts is dedicated to ensuring your operations run
              smoothly and efficiently.
            </motion.p>

            <Link to="/about-us">
              <motion.button
                type="button"
                className="bg-transparent border-[3px] border-white text-white px-6 md:px-8 rounded-lg py-2 text-[16px] md:text-[20px] font-bold hover:bg-white hover:text-tmc-red transition-all duration-300"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-once="true"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Company_Homepage;
