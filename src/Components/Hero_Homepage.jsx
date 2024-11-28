import React, { useState } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Components.css';
import assets from '../../public/assets/assets';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

const QuoteModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit, reset } = useForm();

    if (!isOpen) return null;

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    const inputVariants = {
        hidden: { 
            y: 20, 
            opacity: 0 
        },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.2 }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const handleFormSubmit = async (data) => {
        try {
            // Create form data in the correct format
            const formData = new URLSearchParams();
            
            // Map form fields to Google Form entry IDs
            const formFields = {
                'entry.1846254743': data.name,
                'entry.1462812725': data.phone,
                'entry.43405061': data.email,
                'entry.1092428751': data.product,
                'entry.190393932': data.message || ''
            };

            // Append all fields to formData
            Object.entries(formFields).forEach(([key, value]) => {
                formData.append(key, value);
            });

            // Submit the form using fetch with no-cors mode
            const response = await fetch(
                'https://docs.google.com/forms/d/e/1FAIpQLSeUEuevPAHqxxxiRYqziepPEfN5e1_KHZ9awHTMWziHa0Ay9g/formResponse',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formData.toString()
                }
            );

            // Handle success
            toast.success('Thanks for contacting us! You will be contacted soon.', {
                duration: 5000,
                style: {
                    background: '#22c55e',
                    color: '#fff',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    padding: '16px'
                }
            });
            
            reset();
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div 
                        className="bg-white p-8 rounded-lg relative w-full max-w-md mx-4"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.button
                            className="absolute top-3 right-3 bg-tmc-red rounded-full text-white w-8 h-8 flex items-center justify-center"
                            onClick={onClose}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AiOutlineClose size={24} />
                        </motion.button>

                        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                            <motion.h2 
                                className="text-2xl font-bold mb-4 text-center"
                                variants={inputVariants}
                            >
                                Get a Quote
                            </motion.h2>

                            <motion.div variants={inputVariants}>
                                <label className="block font-roboto text-sm">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    {...register('name', { required: true })}
                                />
                            </motion.div>

                            <motion.div variants={inputVariants}>
                                <label className="block font-roboto text-sm">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    {...register('phone', { required: true })}
                                />
                            </motion.div>

                            <motion.div variants={inputVariants}>
                                <label className="block font-roboto text-sm">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    {...register('email', { required: true })}
                                />
                            </motion.div>

                            <motion.div variants={inputVariants}>
                                <label className="block font-roboto text-sm">Product Interest</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    {...register('product', { required: true })}
                                >
                                    <option value="">Choose</option>
                                    <option value="Continuous Casting Machines">Continuous Casting Machines</option>
                                    <option value="Major Equipments">Major Equipments</option>
                                    <option value="Consulting Services">Consulting Services</option>
                                    <option value="Other">Other</option>
                                </select>
                            </motion.div>

                            <motion.div variants={inputVariants}>
                                <label className="block font-roboto text-sm">Message</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    rows="4"
                                    {...register('message')}
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="w-full bg-tmc-red text-white py-2 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
                                variants={inputVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Hero_Homepage = ({ heading, paragraph, buttonText }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="hero-homepage relative">
            <Splide
                options={{
                    type: 'fade',
                    rewind: true,
                    autoplay: true,
                    interval: 1500,
                }}
            >
                <SplideSlide>
                    <div className="relative h-[80vh] w-full">
                        <img src={assets.Major_Equipments} className='h-full w-full object-cover' alt="Image 1" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                            <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
                            <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" 
                                data-aos='fade-up' 
                                data-aos-duration="1000" 
                                data-aos-once="true" 
                                data-aos-delay="300"
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative h-[80vh] w-full">
                        <img src={assets.Technical_Consultant} className='h-full w-full object-cover' alt="Image 1" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                            <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
                            <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
                          
                                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                                    {buttonText}
                                </button>
                           
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative h-[80vh] w-full">
                        <img src={assets.Tundish} className='h-full w-full object-cover' alt="Image 1" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                            <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
                            <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
                          
                                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                                    {buttonText}
                                </button>
                           
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative h-[80vh] w-full">
                        <img src={assets.Machinery} className='h-full w-full object-cover' alt="Image 1" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                            <h1 className="text-4xl md:text-6xl font-bold text-center font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">{heading}</h1>
                            <p className="mt-4 text-lg md:text-2xl font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">{paragraph}</p>
                            <Link to="/products">
                                <button className="mt-8 px-6 py-3 bg-[#d21317] hover:bg-[#9d0e11] text-white font-semibold text-lg rounded font-roboto" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                                    {buttonText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </SplideSlide>
                {/* Other slides can be included similarly */}
            </Splide>

            <QuoteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
};

export default Hero_Homepage;
