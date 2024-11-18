import React from 'react';
import { motion } from 'framer-motion';
import assets from '../../../public/assets/assets';

const stories = [
    {
        title: "Automation Success at Steel Plant",
        description: "Implemented automated casting control system, improving efficiency by 40%",
        image: assets.Automation_Success,
    },
    {
        title: "Project Management Excellence",
        description: "Completed major installation 2 months ahead of schedule",
        image: assets.Project_Management,
    },
    {
        title: "Energy Savings with Smart Systems",
        description: "Deployed a smart energy monitoring solution, reducing energy consumption by 25% across multiple facilities",
        image: assets.Energy_Savings,
    },
    // Add more success stories if needed
];

const Success_Stories = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="bg-gray-100 py-20 px-16">
            <motion.div 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex items-center gap-2 pb-2">
                    <h1 className="text-tmc-red font-roboto font-medium text-[19px]">
                        Success Stories
                    </h1>
                    <div className="h-[2px] w-6 bg-tmc-red"></div>
                </div>
                <h2 className="text-4xl font-bold text-tmc-black mb-4">Real Results from Our Services</h2>
                <p className="text-gray-600 text-lg">
                    Discover how our consulting expertise has helped clients achieve remarkable outcomes
                </p>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {stories.map((story, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="h-64  overflow-hidden">
                            <img 
                                src={story.image} 
                                alt={story.title} 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-tmc-red mb-3">{story.title}</h3>
                            <p className="text-gray-700 text-[16px]">{story.description}</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 flex items-center gap-2 text-tmc-red font-semibold"
                            >
                                Read More 
                                <svg 
                                    className="w-4 h-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 5l7 7-7 7" 
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Success_Stories; 