import React from "react";
import assets from "../../public/assets/assets";
import "./Components.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ image, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white flex flex-col items-center justify-center w-full h-auto p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="w-full h-48 md:h-64 mb-4 overflow-hidden rounded-lg">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <h2 className="font-bold font-roboto text-tmc-red text-xl md:text-2xl py-4 text-center">
        {title}
      </h2>
      <p className="font-roboto text-[14px] md:text-[16px] text-gray-500 text-center px-2 mb-4">
        {description}
      </p>
      <Link to="/products">
        <motion.button
          type="button"
          className="my-2 text-[16px] md:text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-8 md:px-10 text-center py-1 rounded-lg hover:text-white hover:bg-tmc-red transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Products
        </motion.button>
      </Link>
    </motion.div>
  );
};

const Products = () => {
  return (
    <div
      className="h-auto bg-cover bg-center bg-no-repeat py-10 md:py-20"
      style={{ backgroundImage: `url(${assets.bg1})` }}
    >
      <div className="w-full px-4 md:px-16">
        <motion.div 
          className="flex flex-col w-full mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 pb-2">
            <h1 className="text-tmc-red font-roboto font-medium text-[16px] md:text-[19px]">
              Our Products
            </h1>
            <div className="h-[2px] w-6 bg-tmc-red"></div>
          </div>
          <h2 className="text-white font-roboto font-bold text-3xl md:text-5xl">
            Products
          </h2>
        </motion.div>
      </div>

      <div className="pb-10 md:pb-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <ProductCard
            image={assets.Machinery}
            title="Machinery"
            description="Advanced Continuous Casting Machines designed for efficiency and durability."
            delay={0.3}
          />
          <ProductCard
            image={assets.Major_Equipments}
            title="Major Equipments"
            description="Comprehensive range of major equipment ensuring seamless operation."
            delay={0.5}
          />
          <ProductCard
            image={assets.Billets}
            title="Billets, Blooms, Rounds"
            description="Various sizes and shapes to meet your production needs."
            delay={0.7}
          />
        </div>
      </div>

      <div className="w-full flex items-center pb-8 md:pb-14 px-4 md:px-0">
        <Link to="/products" className="mx-auto">
          <motion.button
            type="button"
            className="text-[16px] md:text-[18px] font-roboto font-bold bg-transparent border-[3px] border-white text-white px-8 md:px-12 text-center py-2 rounded-lg hover:text-tmc-red hover:border-tmc-red transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
