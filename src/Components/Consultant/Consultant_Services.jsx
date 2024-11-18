import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaFileAlt, FaDraftingCompass, FaHardHat, FaSearchPlus, FaIndustry } from 'react-icons/fa';

const services = [
    {
        title: "Technical Consultant for SMS Continuous Casting Automation",
        description: "Providing expert advice and solutions for automation in SMS Continuous Casting.",
        icon: <FaRobot className="text-4xl text-tmc-red" />,
    },
    {
        title: "Detailed Project Reports",
        description: "Comprehensive reports for project planning and execution.",
        icon: <FaFileAlt className="text-4xl text-tmc-red" />,
    },
    {
        title: "Basic and Detailed Engineering",
        description: "Engineering services for efficient and effective project implementation.",
        icon: <FaDraftingCompass className="text-4xl text-tmc-red" />,
    },
    {
        title: "Construction & Project Management",
        description: "Professional management for successful project completion.",
        icon: <FaHardHat className="text-4xl text-tmc-red" />,
    },
    {
        title: "Inspection & Expediting",
        description: "Thorough inspection and expediting services to ensure quality and timeliness.",
        icon: <FaSearchPlus className="text-4xl text-tmc-red" />,
    },
    {
        title: "Induction Furnace",
        description: "Services related to the installation and maintenance of induction furnaces.",
        icon: <FaIndustry className="text-4xl text-tmc-red" />,
    },
];

const ServiceCard = ({ title, description, icon }) => {
    return (
        <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Icon Section */}
            <div className="flex items-center justify-center mb-6">
                {icon}
            </div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-tmc-red mb-4 text-center min-h-[56px] flex items-center justify-center">
                    {title}
                </h3>
                <p className="text-gray-600 text-center mb-6 flex-grow">
                    {description}
                </p>

                {/* Button Section - Always at bottom */}
                <div className="mt-auto">
                    <Link to="/contact-us" className="block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-tmc-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md"
                        >
                            Book a Consultation
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const Consultant_Services = () => {
    return (
        <div className="py-20 px-16 bg-gray-50">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-tmc-red mb-4">Our Consulting Services</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Comprehensive consulting solutions tailored to your needs
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Consultant_Services; 