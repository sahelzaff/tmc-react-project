import React, { useState } from 'react';
import assets from '../../../public/assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Consultant_Intro = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='w-full h-auto pt-10 pb-2'>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='font-roboto font-medium text-[18px] pb-10 pt-2 px-6 text-black'
            >
                <Link to='/' className='hover:underline'>Home </Link>
                / Consultant
            </motion.h2>

            <div className='flex flex-row items-start justify-center gap-10 px-6'>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className='flex items-center justify-center w-1/2'
                >
                    <img src={assets.Technical} className='h-full w-full rounded-lg' alt="Consulting Services" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className='w-1/2'
                >
                    <h1 className='font-roboto font-extrabold text-tmc-red text-4xl'>Technical Consulting Excellence</h1>
                    <p className='font-roboto text-[16px] py-3 text-black'>
                        At Technomelt Solutions, we provide expert consultancy services to optimize your casting operations. Our team of experienced professionals ensures efficient project implementation and superior results.
                    </p>
                    <motion.button
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: '#d21317',
                            color: 'white',
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="mt-4 text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-12 py-3 rounded-lg shadow-lg hover:shadow-xl"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Consultant_Intro;