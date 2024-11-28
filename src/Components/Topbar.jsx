import React from 'react'
import assets from '../../public/assets/assets';
import './Components.css'

const Topbar = () => {
    return (
        <div className='w-full'>
            <div className="colored-div h-11 flex items-center">
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className='flex gap-5 pl-5'>
                        <a 
                            href="tel:+918838637146"
                            className='flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'
                        >
                            <img src={assets.call_universal} alt="call-icon" loading='lazy' className='w-4' />
                            <h1 className='text-[14px] text-white font-roboto'>+91 88386 37146</h1>
                        </a>
                        <a 
                            href="mailto:info@technomeltsolutions.com"
                            className='flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'
                        >
                            <img src={assets.mail_universal} alt="mail-icon" loading='lazy' className='w-4' />
                            <h1 className='text-[14px] text-white font-roboto'>info@technomeltsolutions.com</h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;