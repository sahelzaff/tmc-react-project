import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import assets from '../../public/assets/assets';
import './Components.css'

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    // Function to check if the current path matches the link
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Function to get the class names for nav items
    const getNavItemClasses = (path) => {
        return `nav-item ${isActive(path) ? 'active' : ''}`;
    };

    return (
        <div className='w-full'>
            <div className='flex flex-row justify-between items-center px-6'>
                <div>
                    <Link to="/">
                        <img src={assets.Technomelt_logo_01} alt="Technomelt Logo" loading='lazy' className='w-[300px]' srcset="" />
                    </Link>
                </div>
                <div className='flex-1 flex justify-center mt-3'>
                    <ul className='flex flex-row items-center justify-center gap-8'>
                        <li className={getNavItemClasses('/')}><Link to="/">HOME</Link></li>
                        <li className={getNavItemClasses('/products')}><Link to="/products">PRODUCTS</Link></li>
                        <li className={getNavItemClasses('/consultant')}><Link to='/consultant'>CONSULTANT</Link></li>
                        <li className={getNavItemClasses('/services')}><Link to='/services'>SERVICES</Link></li> 
                        <li className={getNavItemClasses('/about-us')}><Link to='/about-us'>ABOUT US</Link></li>
                        <li className={getNavItemClasses('/contact-us')}><Link to="/contact-us">CONTACT US</Link></li>
                    </ul>
                </div>
                <div className='pl-4'>
                    <div className='relative'>
                        <div
                            className={`flex items-center justify-start rounded-full border-[1.5px] border-gray-600 hover:border-[#d21317] group cursor-pointer transition-all duration-300 ease-in-out ${
                                isExpanded ? 'w-64 h-10' : 'w-10 h-10'
                            } ${isExpanded ? 'rounded-full' : 'rounded-full'}`}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <FaSearch className={`text-[16px] ml-3 ${
                                isExpanded ? 'text-gray-600' : 'text-gray-600 group-hover:text-[#d21317]'
                            } transition-all duration-300 ease-in-out`} />

                            {isExpanded && (
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='ml-2 w-48 p-1 bg-transparent border-none focus:outline-none text-gray-600'
                                    onClick={(e) => e.stopPropagation()}
                                    autoFocus
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