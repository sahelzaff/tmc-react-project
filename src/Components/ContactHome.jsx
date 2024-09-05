import React, { useState } from 'react';
import GoogleMap from './GoogleMap';
import './Components.css';

const ContactHome = () => {
    // State to manage form fields and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirements: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Reset the error when the user starts typing
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    // Function to handle form submission
    const handleSubmit = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Submit form logic here
            console.log('Form data submitted:', formData);
        }
    };

    return (
        <div className='h-auto w-full bg-tmc-red'>
            <div>
                <div className='flex flex-row items-center justify-center px-16 py-20'>
                    <div className='w-1/2 '>
                        <div className='flex items-center gap-2 pb-2'>
                            <h1 className='text-white font-roboto font-medium text-[19px]'>Contact Us</h1>
                            <div className='h-[2px] w-6 bg-white'></div>
                        </div>
                        <h2 className='text-white font-roboto font-bold text-5xl'>Get In Touch</h2>
                        <div className='pt-14'>
                            <h2 className='text-tmc-black font-roboto font-bold text-3xl '>TechnoMelt  <span className=''>Solutions</span></h2>
                            <div
                                className="h-[1px] w-3/6"
                                style={{
                                    background: 'linear-gradient(to right, #d21317, white, #d21317)',
                                }}
                            ></div>
                            <div className='ml-5 pt-2'>
                                <h3 className='text-white font-roboto font-medium text-xl pr-40'><span className='font-bold'>Address:</span> Technomelt Solutions, Radiance Suprema, 8th Floor; Tower B, Madhavaram, Chennai, Tamil Nadu - 600060</h3>
                                <h3 className='text-white font-roboto font-medium text-xl pr-40 pt-1'><span className='font-bold'>Phone number:</span>+91 88386 37146</h3>
                                <h3 className='text-white font-roboto font-medium text-xl pr-40 pt-1'><span className='font-bold'>Email:</span> info@technomeltsolutions.com</h3>
                            </div>
                            <h2 className='text-tmc-black font-roboto font-bold text-3xl pt-14 '>Location</h2>
                            <div
                                className="h-[1px] w-3/6 mt-"
                                style={{
                                    background: 'linear-gradient(to right, #d21317, white, #d21317)',
                                }}
                            ></div>
                            <div className='pt-5'>
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-auto'>
                        <div className='bg-white flex w-full h-auto flex-col items-center justify-center py-32 px-10 rounded-xl'>
                            <div>
                                <h2 className='font-roboto text-4xl text-tmc-black font-bold pb-14'>
                                    Fill In the <span className='text-tmc-red'>Details</span>
                                </h2>
                            </div>
                            <div className='w-full px-10'>
                                <div className='mb-3'>
                                    <label className='block font-roboto text-sm pb-2'>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className={`mb-3 p-2 border font-roboto text-lg border-gray-300 rounded w-full focus:border-[#d21317] outline-none ${errors.name && 'border-red-500'}`}
                                        required
                                    />
                                    {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                                </div>

                                <div className='mb-3'>
                                    <label className='block font-roboto text-sm pb-2'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className={`mb-3 p-2 border font-roboto text-lg border-gray-300 rounded w-full focus:border-[#d21317] outline-none ${errors.email && 'border-red-500'}`}
                                        required
                                    />
                                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                                </div>

                                <div className='mb-3'>
                                    <label className='block font-roboto text-sm pb-2'>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className={`mb-3 p-2 border font-roboto text-lg border-gray-300 rounded w-full focus:border-[#d21317] outline-none ${errors.phone && 'border-red-500'}`}
                                        required
                                    />
                                    {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                                </div>

                                <div className='mb-3'>
                                    <label className='block font-roboto text-sm pb-2'>Requirements</label>
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        placeholder="Requirements"
                                        className="p-2 border font-roboto text-lg border-gray-300 rounded w-full focus:border-[#d21317] outline-none"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                            <div className='pt-16'>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className='mx-auto bg-transparent border-[3px] border-tmc-red text-tmc-red px-16 rounded-lg py-[6px] text-[20px] font-bold hover:bg-tmc-red hover:text-white'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHome;
