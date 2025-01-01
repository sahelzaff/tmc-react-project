import React, { useState } from 'react';
import assets from '../../../public/assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../Breadcrumb';

const Consultant_Intro = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Consultant' }
    ];

    return (
        <div className='w-full h-auto pt-10 pb-2'>
            <div className='px-4 md:px-8 lg:px-16'>
                <Breadcrumb items={breadcrumbItems} />

                <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10'>
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className='flex items-center justify-center w-full md:w-1/2'
                    >
                        <img src={assets.Technical} className='h-full w-full rounded-lg' alt="Consulting Services" />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className='w-full md:w-1/2 mt-6 md:mt-0'
                    >
                        <h1 className='font-roboto font-extrabold text-tmc-red text-3xl md:text-4xl text-center md:text-left'>
                            Technical Consulting Excellence
                        </h1>
                        <p className='font-roboto text-[15px] md:text-[16px] py-4 md:py-6 text-gray-700 leading-relaxed text-center md:text-left'>
                            At Technomelt Solutions, we take pride in delivering specialized consultancy services 
                            designed to revolutionize casting operations. Our mission is to provide tailored solutions 
                            that enhance operational efficiency, optimize resources, and ensure the seamless execution 
                            of your projects. With a team of highly experienced professionals, we stand as your trusted 
                            partner in driving innovation and achieving excellence in the casting industry.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: '#d21317',
                                    color: 'white',
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="mt-2 md:mt-4 text-[16px] md:text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-8 md:px-12 py-2 md:py-3 rounded-lg shadow-lg hover:shadow-xl"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Consultant_Intro;