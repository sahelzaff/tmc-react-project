
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import assets from '../../public/assets/assets';
import './Components.css'


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='w-full'>
            <div className='flex flex-row justify-between items-center '>
                <div>
                    <Link to="/">
                        <img src={assets.Technomelt_logo_01} alt="Technomelt Logo" loading='lazy' className='w-[380px]' srcset="" />
                    </Link>
                </div>
                <div>
                    <ul className='flex flex-row items-center justify-center gap-5'>
                        <li className='nav-item'><Link to="/">HOME</Link></li>
                        <li className='nav-item'>EXPLORE US</li>
                        <li className='nav-item'><Link to="/products">PRODUCTS & SERVICES</Link></li>
                        <li className='nav-item'>CLIENTS STORY</li>
                        <li className='nav-item'>FAQ</li>
                        <li className='nav-item'>BLOG</li>
                        <li className='nav-item'>CONTACT US</li>
                    </ul>

                </div>
                <div className='px-20'>
                    <div className='relative'>

                        <div
                            className={`flex items-center justify-center rounded-full border-[1.5px] border-gray-600 hover:border-[#d21317] group text-gray-600 cursor-pointer transition-all duration-300 ease-in-out ${isExpanded ? 'w-40 h-10' : 'w-10 h-10'} ${isExpanded ? 'rounded-r-full' : 'rounded-full'}`}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >

                            <FaSearch className={`text-[16px] ${isExpanded ? 'text-gray-600' : 'text-gray-600 group-hover:text-[#d21317]'} transition-all duration-300 ease-in-out`} />

                            {isExpanded && (
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='ml-2 p-1 rounded bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar