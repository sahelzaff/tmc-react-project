import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

const Homepage_Modal = ({ isOpen, onClose, onSubmit, products }) => {
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
            onSubmit(data);
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    style={{ zIndex: 9999 }}
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
                                Book a Consultation
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
                                <label className="block font-roboto text-sm">Service</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    {...register('service', { required: true })}
                                >
                                    <option value="Consultant">Consultant</option>
                                    <option value="Man power supply">Man power supply</option>
                                </select>
                            </motion.div>

                            <motion.div variants={inputVariants}>
                                <label className="block font-roboto text-sm">Requirement</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none transition-all duration-300 hover:border-tmc-red"
                                    {...register('details')}
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

export default Homepage_Modal;
