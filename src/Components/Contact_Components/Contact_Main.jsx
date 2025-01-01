import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlDirections } from "react-icons/sl";
import Modal from 'react-modal';
import '../Components.css'
import Googlemap_contact from './Googlemap_contact';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import Breadcrumb from '../Breadcrumb';

const Contact_Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];

    return (
        <div className='w-full max-w-screen-2xl pt-6 md:pt-10 h-full'>
            <div className='px-4 md:px-8 lg:px-16'>
                <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className='flex flex-col'>
                <div className='px-4 md:px-0'>
                    <h1 className='text-lg md:text-xl text-center font-medium font-poppins pb-1'>Lets Discuss</h1>
                    <h1 className='text-3xl md:text-4xl text-center font-bold font-roboto pb-1'>We're Here to Help</h1>
                    <h1 className='text-3xl md:text-4xl text-center font-bold font-roboto text-tmc-red'>Get in Touch with Us</h1>
                </div>
                <div className='w-full h-full flex flex-col lg:flex-row py-8 md:py-16'>
                    <div className='w-full lg:w-4/6 h-auto flex-grow px-4 md:px-8 lg:px-16'>
                        <div className='flex flex-col md:flex-row mb-[-2rem] gap-4 md:gap-8'>
                            <div className="input-container w-full">
                                <input type="text" id="input" required="" />
                                <label for="input" className="label">First Name</label>
                                <div className="underline"></div>
                            </div>
                            <div className="input-container w-full">
                                <input type="text" id="input" required="" />
                                <label for="input" className="label">Last Name</label>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div>
                            <div className="input-container w-full">
                                <input type="text" id="input" required="" />
                                <label for="input" className="label">Phone Number</label>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="input-container w-full">
                            <input type="text" id="input" required="" />
                            <label for="input" className="label">Email Address</label>
                            <div className="underline"></div>
                        </div>

                        <div className="input-container w-full">
                            <textarea id="input" required=""></textarea>
                            <label for="input" className="label">Message</label>
                            <div className="underline"></div>
                        </div>
                        <div className='overflow-x-auto'>
                            <ReCAPTCHA
                                sitekey='6LfmmvQpAAAAAPe_6emsWyHkSZ_AYCIv4-HgfSJQ'
                            />
                        </div>

                        <div className='pt-6 md:pt-10'>
                            <button
                                type="button"
                                className="text-base md:text-[18px] font-roboto font-bold bg-tmc-red border-[3px] border-white text-white px-8 md:px-12 text-center py-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-2/6 mt-8 lg:mt-0'>
                        <div className='flex flex-col w-full lg:border-l-2 border-gray-100'>
                            <div className='flex flex-col items-center justify-center pt-4 md:pt-8'>
                                <div className="flex flex-row items-start justify-start gap-4 md:gap-5 w-full max-w-[384px] mb-6 md:mb-10 px-4 md:px-0">
                                    <div>
                                        <GrMapLocation className='text-4xl md:text-5xl text-tmc-red' />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-2 md:pt-3">
                                        <h2 className="font-roboto font-bold text-xl md:text-2xl text-tmc-red">Address:</h2>
                                        <div className="w-full md:w-72 font-poppins font-medium">
                                            <div>
                                                <p className='text-tmc-black text-base md:text-lg font-roboto'>Technomelt Solutions, Radiance Suprema, 8th Floor; Tower B, Madhavaram, Chennai,<br /> Tamil Nadu - 600060</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-4 md:gap-5 w-full max-w-[384px] mb-6 md:mb-10 px-4 md:px-0">
                                    <div>
                                        <FaPhoneAlt className='text-4xl md:text-5xl text-tmc-red' />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-1 md:pt-2">
                                        <h2 className="font-roboto font-bold text-xl md:text-2xl text-tmc-red">Phone Number:</h2>
                                        <div className="w-full md:w-72 font-poppins font-medium">
                                            <div>
                                                <p className='text-tmc-black text-base md:text-lg font-roboto'>+91 88386 37146</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-4 md:gap-5 w-full max-w-[384px] mb-6 md:mb-10 px-4 md:px-0">
                                    <div>
                                        <MdEmail className='text-4xl md:text-5xl text-tmc-red' />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-1 md:pt-2">
                                        <h2 className="font-roboto font-bold text-xl md:text-2xl text-tmc-red">Email Address:</h2>
                                        <div className="w-full md:w-72 font-poppins font-medium">
                                            <div>
                                                <p className='text-tmc-black text-base md:text-lg font-roboto'>info@technomentsolutions.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-tmc-red">
                <div className="flex flex-col w-full">
                    <div className="flex items-center gap-2 pb-2">
                        <SlDirections className='text-4xl md:text-5xl text-white' />
                        <h1 className="text-white font-roboto font-medium text-base md:text-[19px]">
                            Directions
                        </h1>
                        <div className="h-[2px] w-6 bg-white"></div>
                    </div>
                </div>
                <div className='flex items-center justify-center pt-6 md:pt-10'>
                    <Googlemap_contact />
                </div>
            </div>
        </div>
    )
}

export default Contact_Main