import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import assets from '../../../public/assets/assets';
import { motion } from 'framer-motion';

const ExploreTeamCard = ({ image, name, designation }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className='flex flex-col items-center justify-center p-6 rounded-sm shadow-sm border-[0.5px] border-tmc-red hover:shadow-lg transition-shadow duration-300'
        >
            {/* Dynamic Image */}
            <motion.img 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={image} 
                className='w-full object-cover' 
                alt={name} 
            />
            
            {/* Dynamic Name */}
            <motion.h1 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-3xl font-roboto font-extrabold text-tmc-red pt-5'
            >
                {name}
            </motion.h1>
            
            {/* Dynamic Designation */}
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='text-lg font-bold font-roboto'
            >
                {designation}
            </motion.p>
            
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-tmc-red flex items-center justify-center gap-2 border-[3px] w-auto border-tmc-red text-white px-8 rounded-lg py-2 text-[20px] font-bold my-6 hover:bg-tmc-red transition-all duration-300 ease-in-out group"
            >
                Know More
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaArrowRight />
                </motion.span>
            </motion.button>
        </motion.div>
    );
};

// Usage Example
const TeamSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='w-full h-auto py-10 px-6'
        >
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col w-full pb-10"
            >
                <div className="flex items-center gap-2 pb-2">
                    <h1 className="text-tmc-red font-roboto font-medium text-[19px]">
                        Explore Us
                    </h1>
                    <div className="h-[2px] w-6 bg-tmc-red"></div>
                </div>
                <h2 className="text-black font-roboto font-bold text-5xl">Our Team</h2>
            </motion.div>

            {/* Grid Container for Team Cards */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='grid grid-cols-3 gap-4'
            >
                <ExploreTeamCard 
                    image={assets.employee1} 
                    name="Neha Sharma" 
                    designation="Company's Director" 
                />
                <ExploreTeamCard 
                    image={assets.employee2} 
                    name="Rahul Mehta" 
                    designation="Project Manager" 
                />
                <ExploreTeamCard 
                    image={assets.employee3} 
                    name="Priya Kapoor" 
                    designation="Marketing Head" 
                />
                <ExploreTeamCard 
                    image={assets.employee1} 
                    name="Neha Sharma" 
                    designation="Company's Director" 
                />
                <ExploreTeamCard 
                    image={assets.employee2} 
                    name="Rahul Mehta" 
                    designation="Project Manager" 
                />
                <ExploreTeamCard 
                    image={assets.employee3} 
                    name="Priya Kapoor" 
                    designation="Marketing Head" 
                />
            </motion.div>
        </motion.div>
    );
};

export default TeamSection;
