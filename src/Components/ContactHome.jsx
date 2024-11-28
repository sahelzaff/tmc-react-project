import React, { useState } from 'react';
import GoogleMap from './GoogleMap';
import './Components.css';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const ContactHome = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirements: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
            [name]: ''
            }));
        }
    };

    const handleSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error('Please fill all required fields correctly', {
                duration: 3000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    padding: '16px'
                }
            });
            return;
        }

        // Form submission logic here
            toast.success('Thanks for contacting us! We will get back to you soon.', {
                duration: 5000,
                style: {
                    background: '#22c55e',
                    color: '#fff',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '16px',
                    padding: '16px'
                }
            });

        // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                requirements: ''
            });
        setErrors({});
    };

    return (
        <div className='w-full bg-tmc-red py-20'>
            <div className='container mx-auto px-4 md:px-16'>
                <div className='flex flex-col lg:flex-row gap-12'>
                    {/* Left Column - Contact Info */}
                    <div className='w-full lg:w-1/2'>
                    <div className='flex items-center gap-2 pb-2'>
                        <h1 className='text-white font-roboto font-medium text-[19px]'>Contact Us</h1>
                        <div className='h-[2px] w-6 bg-white'></div>
                    </div>
                        <h2 className='text-white font-roboto font-bold text-5xl'>Get In Touch</h2>
                        
                        <div className='mt-14'>
                            <h2 className='text-tmc-black font-roboto font-bold text-3xl'>TechnoMelt Solutions</h2>
                            <div className="h-[1px] w-3/6 bg-gradient-to-r from-tmc-red via-white to-tmc-red"></div>
                            
                            <div className='mt-6 space-y-4 text-white'>
                                <p className='font-roboto'><span className='font-bold'>Address:</span> Technomelt Solutions, Radiance Suprema, 8th Floor; Tower B, Madhavaram, Chennai, Tamil Nadu - 600060</p>
                                <p className='font-roboto'><span className='font-bold'>Phone:</span> +91 88386 37146</p>
                                <p className='font-roboto'><span className='font-bold'>Email:</span> info@technomeltsolutions.com</p>
                            </div>
                        </div>

                        <div className='mt-14'>
                        <h2 className='text-tmc-black font-roboto font-bold text-3xl'>Location</h2>
                            <div className="h-[1px] w-3/6 bg-gradient-to-r from-tmc-red via-white to-tmc-red mb-6"></div>
                            <GoogleMap />
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className='w-full lg:w-1/2'>
                        <div className='bg-white rounded-xl p-8 md:p-12'>
                            <h2 className='text-4xl font-bold text-center mb-10'>
                            Fill In the <span className='text-tmc-red'>Details</span>
                            </h2>

                            <div className='space-y-6'>
                                <div>
                                    <label className='block text-gray-700 text-sm font-medium mb-2'>Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                        className={`w-full p-3 border rounded-lg transition-all focus:outline-none focus:border-tmc-red ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your name"
                                />
                                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                                </div>

                                <div>
                                    <label className='block text-gray-700 text-sm font-medium mb-2'>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-3 border rounded-lg transition-all focus:outline-none focus:border-tmc-red ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                                </div>

                                <div>
                                    <label className='block text-gray-700 text-sm font-medium mb-2'>Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full p-3 border rounded-lg transition-all focus:outline-none focus:border-tmc-red ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className='block text-gray-700 text-sm font-medium mb-2'>Requirements</label>
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full p-3 border border-gray-300 rounded-lg transition-all focus:outline-none focus:border-tmc-red"
                                        placeholder="Enter your requirements"
                                    />
                                </div>

                            <motion.button
                                onClick={handleSubmit}
                                    className='w-full bg-tmc-red text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit
                            </motion.button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;
