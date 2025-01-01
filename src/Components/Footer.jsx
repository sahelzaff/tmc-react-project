import React from "react";
import assets from '../../public/assets/assets';
import { FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import GoogleMapFooter from "./GoogleMapFooter";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className="w-full">
        <footer className="bg-tmc-black text-white pt-8 md:pt-12">
            <div className="container mx-auto px-4 md:px-16">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                    {/* Logo and Description */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <div className="mb-4">
                            <img src={assets.Technomelt_logo_white} alt="Technomelt Logo" className="h-16 md:h-20" />
                        </div>
                        <p className="text-gray-400 text-sm md:text-base pr-0 lg:pr-10">
                            Technomelt Solutions provides cutting-edge Metal Heating & Melting Equipment, engineered to overcome Thermal Challenges with efficiency.
                        </p>
                    </div>

                    {/* Three columns section */}
                    <div className="flex flex-col lg:flex-row w-full lg:w-3/4 gap-8 lg:gap-4 lg:justify-between lg:mt-5">
                        {/* Products & Services */}
                        <div className="w-full lg:w-1/3">
                            <h3 className="font-semibold text-lg md:text-xl mb-3">Products & Services</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li><Link to="/" className="text-sm md:text-base hover:text-gray-200 transition-colors">Home</Link></li>
                                <li><Link to="/products" className="text-sm md:text-base hover:text-gray-200 transition-colors">Products</Link></li>
                                <li><Link to="/consultant" className="text-sm md:text-base hover:text-gray-200 transition-colors">Consultant</Link></li>
                                <li><Link to="/services" className="text-sm md:text-base hover:text-gray-200 transition-colors">Services</Link></li>
                                <li><Link to="/explore-us" className="text-sm md:text-base hover:text-gray-200 transition-colors">About Us</Link></li>
                                <li><Link to="/contact-us" className="text-sm md:text-base hover:text-gray-200 transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full lg:w-1/3">
                            <h3 className="font-semibold text-lg md:text-xl mb-3">Quick Links</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li className="text-sm md:text-base hover:text-gray-200 transition-colors cursor-pointer">Products</li>
                                <li className="text-sm md:text-base hover:text-gray-200 transition-colors cursor-pointer">Services</li>
                                <li className="text-sm md:text-base hover:text-gray-200 transition-colors cursor-pointer">Consultant</li>
                                <li className="text-sm md:text-base hover:text-gray-200 transition-colors cursor-pointer">Manpower Supply</li>
                            </ul>
                        </div>

                        {/* Our Location */}
                        <div className="w-full lg:w-1/3">
                            <h3 className="font-semibold text-lg md:text-xl mb-3">Our Location</h3>
                            <div className="w-full overflow-hidden rounded-lg">
                                <GoogleMapFooter />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact and Address Section */}
                <div className="w-full mt-8 md:mt-12 py-6 border-t border-gray-800">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            {/* Email Button */}
                            <a 
                                href="mailto:info@technomeltsolutions.com" 
                                className="w-full md:w-auto flex items-center bg-[#262626] p-3 md:p-4 rounded hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <FaEnvelope className="h-5 w-5 md:h-6 md:w-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-gray-400 text-sm md:text-base">info@technomeltsolutions.com</p>
                                    <p className="text-xs md:text-sm text-gray-500">Drop Us a Line</p>
                                </div>
                            </a>

                            {/* Phone Button */}
                            <div className="relative group w-full md:w-auto">
                                <motion.div 
                                    className="flex items-center bg-[#d21317] p-3 md:p-4 rounded hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                                    onClick={() => {
                                        const waLink = `https://wa.me/918838637146`;
                                        window.open(waLink, '_blank') || window.location.assign(`tel:+918838637146`);
                                    }}
                                >
                                    <FaPhoneAlt className="h-5 w-5 md:h-6 md:w-6 text-white mr-2" />
                                    <div>
                                        <p className="text-white text-sm md:text-base">+91 88386 37146</p>
                                        <p className="text-xs md:text-sm text-gray-300">Call Us Now</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Location Button */}
                            <a 
                                href="https://g.co/kgs/5PQv98h" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full md:w-auto flex items-center bg-[#262626] p-3 md:p-4 rounded hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <FaMapMarkerAlt className="h-5 w-5 md:h-6 md:w-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-gray-400 text-sm md:text-base">Radiance Suprema, 8th Floor</p>
                                    <p className="text-xs md:text-sm text-gray-500">Get Directions</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
            </div>
        </footer>
                <div className="bg-tmc-red text-center py-3 md:py-4">
                    <p className="text-white text-sm md:text-base">
                        Copyright 2024 TechnoMelt Solutions, All rights reserved.
                    </p>
                </div>
        </div>
    );
};

export default Footer;
