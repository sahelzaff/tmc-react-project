import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import assets from '../../public/assets/assets';
import './Components.css'

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Function to check if the current path matches the link
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Function to get the class names for nav items
    const getNavItemClasses = (path) => {
        return `nav-item ${isActive(path) ? 'active' : ''}`;
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close search if open
        if (isExpanded) setIsExpanded(false);
    };

    return (
        <div className='w-full relative'>
            <div className='flex flex-row justify-between items-center px-6 py-2'>
                <div>
                    <Link to="/">
                        <img src={assets.Technomelt_logo_01} alt="Technomelt Logo" loading='lazy' className='w-[200px] md:w-[300px]' />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex flex-1 justify-center mt-3'>
                    <ul className='flex flex-row items-center justify-center gap-8'>
                        <li className={getNavItemClasses('/')}><Link to="/">HOME</Link></li>
                        <li className={getNavItemClasses('/products')}><Link to="/products">PRODUCTS</Link></li>
                        <li className={getNavItemClasses('/consultant')}><Link to='/consultant'>CONSULTANT</Link></li>
                        <li className={getNavItemClasses('/services')}><Link to='/services'>SERVICES</Link></li> 
                        <li className={getNavItemClasses('/about-us')}><Link to='/about-us'>ABOUT US</Link></li>
                        <li className={getNavItemClasses('/contact-us')}><Link to="/contact-us">CONTACT US</Link></li>
                    </ul>
                </div>

                {/* Search and Menu Buttons */}
                <div className='flex items-center gap-4'>
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

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-gray-600 hover:border-[#d21317] transition-all duration-300'
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <RiCloseLine className='text-2xl text-gray-600 hover:text-[#d21317]' />
                        ) : (
                            <RiMenu3Line className='text-2xl text-gray-600 hover:text-[#d21317]' />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed top-0 right-0 h-screen w-[80%] bg-white shadow-xl z-50 lg:hidden"
                    >
                        <div className="flex flex-col h-full">
                            {/* Close button */}
                            <div className="flex justify-end p-6">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="text-2xl text-gray-600 hover:text-[#d21317]"
                                >
                                    <RiCloseLine />
                                </button>
                            </div>

                            {/* Mobile Menu Items */}
                            <ul className="flex flex-col gap-4 p-6">
                                <li className={`${getNavItemClasses('/')} mobile-nav-item`}>
                                    <Link to="/" onClick={toggleMobileMenu}>HOME</Link>
                                </li>
                                <li className={`${getNavItemClasses('/products')} mobile-nav-item`}>
                                    <Link to="/products" onClick={toggleMobileMenu}>PRODUCTS</Link>
                                </li>
                                <li className={`${getNavItemClasses('/consultant')} mobile-nav-item`}>
                                    <Link to="/consultant" onClick={toggleMobileMenu}>CONSULTANT</Link>
                                </li>
                                <li className={`${getNavItemClasses('/services')} mobile-nav-item`}>
                                    <Link to="/services" onClick={toggleMobileMenu}>SERVICES</Link>
                                </li>
                                <li className={`${getNavItemClasses('/about-us')} mobile-nav-item`}>
                                    <Link to="/about-us" onClick={toggleMobileMenu}>ABOUT US</Link>
                                </li>
                                <li className={`${getNavItemClasses('/contact-us')} mobile-nav-item`}>
                                    <Link to="/contact-us" onClick={toggleMobileMenu}>CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleMobileMenu}
                />
            )}
        </div>
    );
};

export default Navbar;