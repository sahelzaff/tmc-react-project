import React from 'react';
import assets from '../../../public/assets/assets';
import { Link } from 'react-router-dom';

const Explore_Contact = () => {
    return (
        <>
            {/* Mobile View */}
            <div className='md:hidden w-full h-auto bg-white p-4 relative mb-6'>
                <div className='relative w-full bg-white shadow-lg rounded-lg overflow-hidden'>
                    <div className='bg-tmc-red p-4'>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='w-full'>
                                <img 
                                    src={assets.call_explore} 
                                    alt="Contact" 
                                    className='w-full h-auto object-contain'
                                />
                            </div>
                            <div className='w-full text-white text-center'>
                                <h2 className='text-2xl font-bold mb-1'>Contact Us Today!</h2>
                                <p className='text-lg font-medium mb-4'>We're here to help you.</p>
                                <Link to="/contact-us">
                                    <button
                                        type="button"
                                        className="bg-white text-tmc-red px-6 rounded-lg py-2 text-base font-bold hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                                    >
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className='hidden md:block w-full h-auto bg-tmc-red p-6 relative mb-10'>
                <img src={assets.call_explore} alt="Contact Background" className='w-10/12 mx-auto' />
                {/* Text overlay */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold text-start ml-20'>
                    <h2>Contact Us Today!</h2>
                    <p>We're here to help you.</p>
                    <Link to="/contact-us">
                        <button
                            type="button"
                            className="bg-tmc-red border-[3px] border-tmc-red text-white px-10 rounded-lg py-1 text-[20px] font-bold hover:bg-tmc-red hover:translate-y-[-2px] transition-transform duration-300 ease-in-out mt-4"
                        >
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Explore_Contact;
