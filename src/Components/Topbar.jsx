import React from 'react'
import assets from '../../public/assets/assets';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import './Components.css'

const Topbar = () => {
    return (
        <div className='w-full'>
            <div className="colored-div h-11 flex items-center">
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className='flex gap-5  pl-5'>
                        <div className='flex justify-center items-center gap-2 cursor-pointer'>
                            <img src={assets.call_universal} alt="call-image" loading='lazy' className='w-4 ' srcset="" />
                            <h1 className='text-[14px] text-white font-roboto'>+91 88386 37146</h1>
                        </div>
                        <div className='flex justify-center items-center gap-2 cursor-pointer'>
                            <img src={assets.mail_universal} alt="call-image" loading='lazy' className='w-4 ' srcset="" />
                            <h1 className='text-[14px] text-white font-roboto'>info@technomeltsolutions.com</h1>
                        </div>
                    </div>
                    <div >
                        <div className='flex items-center gap-1 px-5'>
                            <FaInstagram className='w-5 text-[16px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-700 text-[#8f8f8f] hover:text-white' />
                            <FaFacebookF className='w-5 text-[16px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-700 text-[#8f8f8f] hover:text-white' />
                            <FaWhatsapp className='w-5 text-[16px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-700 text-[#8f8f8f] hover:text-white' />
                            <FaLinkedinIn className='w-5 text-[16px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-700 text-[#8f8f8f] hover:text-white' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar;