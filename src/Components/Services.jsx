import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import assets from '../../public/assets/assets';
import Homepage_Modal from './Homepage_Modal';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

const servicesData = [
    {
        id: 1,
        name: 'Consultant',
        shortDescription: 'Expert consultancy services to optimize your casting operations.',
        description: 'Technomelt Solutions offers comprehensive consultancy services for steel melting shop projects, from turnkey solutions for mini steel plants to the expansion and modification of existing setups. Our expertise in automation and quality control ensures that your operations run smoothly, efficiently, and with the highest quality standards.',
        icon: <FaBriefcase className="text-2xl" />,
        image: assets.Consultant,
    },
    {
        id: 2,
        name: 'Man power supply',
        shortDescription: 'Specialized workforce for steel industry operations',
        description: 'Technomelt Solutions provides specialized manpower supply services tailored to the steel industry. Our skilled professionals are equipped with the knowledge and experience needed to support your projects, ensuring timely and effective execution of all tasks, from installation to ongoing maintenance.',
        icon: <FaUsers className="text-2xl" />,
        image: assets.Manpower_supply,
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        servicesData.forEach(service => {
            const img = new Image();
            img.src = service.image;
        });
    }, []);

    const handleEnquireNowClick = () => {
        setIsModalOpen(true);
    };

    const handleFormSubmit = (formData) => {
        try {
            console.log("Form Submitted", formData);
            toast.success('Thanks for booking a consultation! We will contact you soon.', {
                duration: 5000,
                style: {
                    background: '#22c55e',
                    color: '#fff',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    padding: '16px'
                }
            });
            setIsModalOpen(false);
        } catch (error) {
            toast.error('There was an error submitting the form. Please try again.', {
                duration: 3000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    padding: '16px'
                }
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div 
            className="relative py-20 h-auto w-full bg-gradient-to-b from-gray-50 to-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="relative z-10 px-16 pt-24">
                <div className='flex items-center gap-2 pb-2'>
                    <h1 className='text-tmc-red font-roboto font-medium text-[19px]'>Our Services</h1>
                    <div className='h-[2px] w-6 bg-tmc-red'></div>
                </div>
                <h2 className='text-tmc-black font-roboto font-bold text-5xl'>Services</h2>
                <p className='text-gray-600 font-roboto text-lg'>Technical Consultant for SMS Continuous Casting Automation</p>
            </div>

            <div className="relative z-10 flex px-16 pt-10 gap-8">
                {/* Service List */}
                <div className="flex flex-col w-1/3">
                    {servicesData.map(service => (
                        <motion.div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className={`flex flex-col p-6 mb-4 cursor-pointer rounded-xl transition-all duration-300 
                                ${selectedService.id === service.id 
                                    ? 'bg-tmc-red text-white shadow-lg' 
                                    : 'bg-white hover:bg-tmc-red/5 shadow-md'}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center">
                                <div className={selectedService.id === service.id ? 'text-white' : 'text-tmc-red'}>
                                    {service.icon}
                                </div>
                                <span className={`ml-4 font-medium text-xl ${selectedService.id === service.id ? 'text-white' : 'text-tmc-black'}`}>
                                    {service.name}
                                </span>
                            </div>
                            <p className={`mt-3 text-[15px] ${selectedService.id === service.id ? 'text-white/90' : 'text-gray-600'}`}>
                                {service.shortDescription}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Service Description */}
                <div className="w-2/3">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedService.id}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <h2 className="text-4xl font-bold mb-6 text-tmc-red font-roboto">
                                {selectedService.name}
                            </h2>
                            <motion.div 
                                className="relative overflow-hidden rounded-xl mb-6"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img 
                                    src={selectedService.image} 
                                    alt={selectedService.name} 
                                    className="w-full object-cover rounded-xl shadow-md"
                                />
                            </motion.div>
                            <p className="text-lg text-gray-700 leading-relaxed font-roboto">
                                {selectedService.description}
                            </p>
                            <div className='w-full flex items-center justify-center mt-8'>
                                <motion.button
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: '#d21317',
                                        color: 'white',
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-12 py-3 rounded-lg shadow-lg hover:shadow-xl"
                                    onClick={handleEnquireNowClick}
                                >
                                    Book a Consultation
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Homepage_Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleFormSubmit}
                products={servicesData}
            />
        </motion.div>
    );
}

export default Services;
