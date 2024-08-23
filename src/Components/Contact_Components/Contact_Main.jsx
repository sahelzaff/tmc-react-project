import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlDirections } from "react-icons/sl";
import Modal from 'react-modal';
import '../Components.css'
import Googlemap_contact from './Googlemap_contact';

const Contact_Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='w-full max-w-screen-2xl pt-10 h-full'>

            <div className='flex flex-col'>
                <div>
                    <h1 className='text-xl text-center font-medium  font-poppins pb-1'>Lets Discuss</h1>
                    <h1 className='text-4xl text-center font-bold font-roboto pb-1'>We’re Here to Help</h1>
                    <h1 className='text-4xl text-center font-bold font-roboto text-tmc-red'>Get in Touch with Us</h1>
                </div>
                <div className='w-full h-full flex py-16'>
                    <div className='w-4/6 h-auto flex-grow px-16'>
                        <div className='flex flex-row mb-[-2rem] gap-8'>
                            <div className="input-container w-full">
                                <input type="text" id="input" required="" />
                                <label for="input" class="label">First Name</label>
                                <div class="underline"></div>
                            </div>
                            <div className="input-container w-full">
                                <input type="text" id="input" required="" />
                                <label for="input" class="label">Last Name</label>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div>

                            <div className="input-container w-full">
                                <input type="text" id="input" required="" />
                                <label for="input" class="label">Phone Number</label>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div className="input-container w-full">
                            <input type="text" id="input" required="" />
                            <label for="input" class="label">Email Address</label>
                            <div class="underline"></div>
                        </div>

                        <div className="input-container w-full">
                            <textarea id="input" required=""></textarea>
                            <label for="input" class="label">Message</label>
                            <div class="underline"></div>
                        </div>
                        <div>
                            <ReCAPTCHA
                                sitekey='6LfmmvQpAAAAAPe_6emsWyHkSZ_AYCIv4-HgfSJQ'

                            />
                        </div>

                        <div className='pt-10'>

                            <button
                                type="button"
                                className=" text-[18px] font-roboto font-bold bg-tmc-red border-[3px] border-white text-white px-12 text-center py-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"

                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='w-2/6'>
                        <div className='flex flex-col w-full border-l-2 border-gray-100'>
                            <div className='flex flex-col items-center justify-center pt-8'>
                                <div className="flex flex-row items-start justify-start gap-5 w-96 mb-10">
                                    <div >
                                        <GrMapLocation className='text-5xl text-tmc-red' />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-3">
                                        <h2 className="font-roboto font-bold text-2xl text-tmc-red" >Address:</h2>
                                        <div className="w-72 font-poppins font-medium" id='timingdiv1'>
                                            <div className="">
                                                <p className='text-tmc-black text-lg font-roboto'>Some Where, Chennai Get Direction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-5 w-96 mb-10">
                                    <div >
                                        <FaPhoneAlt className='text-5xl text-tmc-red' />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-2">
                                        <h2 className="font-roboto font-bold text-2xl text-tmc-red" >Phone Number:</h2>
                                        <div className="w-72 font-poppins font-medium" id='timingdiv1'>
                                            <div className="">
                                                <p className='text-tmc-black text-lg font-roboto'>+91 98XXX XXXXX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-5 w-96 mb-10">
                                    <div >
                                        <MdEmail className='text-5xl text-tmc-red' />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-2">
                                        <h2 className="font-roboto font-bold text-2xl text-tmc-red" >Email Address:</h2>
                                        <div className="w-72 font-poppins font-medium" id='timingdiv1'>
                                            <div className="">
                                                <p className='text-tmc-black text-lg font-roboto'>info@technomentsolutions.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full px-16 py-20 bg-tmc-red">
                <div className="flex flex-col w-full ">
                    <div className="flex items-center gap-2 pb-2">
                        <SlDirections className='text-5xl text-white' />
                        <h1 className="text-white font-roboto font-medium text-[19px]">
                            Directions
                        </h1>
                        <div className="h-[2px] w-6 bg-white"></div>
                    </div>
                </div>
                <div className='flex items-center justify-center pt-10'>
                    <Googlemap_contact />
                </div>
            </div>

        </div>
    )
}

export default Contact_Main