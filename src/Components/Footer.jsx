import React from "react";
import assets from '../../public/assets/assets';
import { FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import GoogleMapFooter from "./GoogleMapFooter";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-tmc-black text-white pt-12">
            <div className="container mx-auto flex flex-wrap justify-between px-16">
                {/* Logo and Description */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <div className="mb-4">
                        <img src={assets.Technomelt_logo_white} alt="Technomelt Logo" className="h-20" />
                    </div>
                    <p className="text-gray-400 pr-10">
                        Technomelt Solutions provides cutting-edge Metal Heating & Melting Equipment, engineered to overcome Thermal Challenges with efficiency.
                    </p>
                </div>

                {/* Three columns with equal top alignment */}
                <div className="flex w-3/4 justify-between mt-5">
                    {/* Products & Services */}
                    <div className="w-1/3">
                        <h3 className="font-semibold text-xl mb-3">Products & Services</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2"><Link to="/" className="cursor-pointer hover:text-gray-200">Home</Link></li>
                            <li className="mb-2"><Link to="/products" className="cursor-pointer hover:text-gray-200">Products</Link></li>
                            <li className="mb-2"><Link to="/consultant" className="cursor-pointer hover:text-gray-200">Consultant</Link></li>
                            <li className="mb-2"><Link to="/services" className="cursor-pointer hover:text-gray-200">Services</Link></li>
                            <li className="mb-2"><Link to="/explore-us" className="cursor-pointer hover:text-gray-200">About Us</Link></li>
                            <li className="mb-2"><Link to="/contact-us" className="cursor-pointer hover:text-gray-200">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="w-1/3">
                        <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li className="cursor-pointer hover:text-gray-200">Products</li>
                            <li className="cursor-pointer hover:text-gray-200">Services</li>
                            <li className="cursor-pointer hover:text-gray-200">Consultant</li>
                            <li className="cursor-pointer hover:text-gray-200">Manpower Supply</li>
                        </ul>
                    </div>

                    {/* Our Location */}
                    <div className="w-1/3">
                        <h3 className="font-semibold text-xl mb-3">Our Location</h3>
                        <div>
                            <GoogleMapFooter />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact and Address Section */}
            <div className="w-full mt-12 py-6">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                    <div className="flex items-center flex-wrap justify-center">
                        {/* Email Button */}
                        <a 
                            href="mailto:info@technomeltsolutions.com" 
                            className="flex items-center bg-[#262626] p-4 rounded mr-4 mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <FaEnvelope className="h-6 w-6 text-gray-400 mr-2" />
                            <div>
                                <p className="text-gray-400">info@technomeltsolutions.com</p>
                                <p className="text-sm text-gray-500">Drop Us a Line</p>
                            </div>
                        </a>

                        {/* Phone Button */}
                        <div className="relative group">
                            <motion.div 
                                className="flex items-center bg-[#d21317] p-4 rounded mr-4 mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                                onClick={() => {
                                    const waLink = `https://wa.me/918838637146`;
                                    window.open(waLink, '_blank') || window.location.assign(`tel:+918838637146`);
                                }}
                            >
                                <FaPhoneAlt className="h-6 w-6 text-white mr-2" />
                                <div>
                                    <p className="text-white">+91 88386 37146</p>
                                    <p className="text-sm text-gray-300">Call Us Now</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Location Button */}
                        <a 
                            href="https://g.co/kgs/5PQv98h" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center bg-[#262626] p-4 rounded mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <FaMapMarkerAlt className="h-6 w-6 text-gray-400 mr-2" />
                            <div>
                                <p className="text-gray-400">Radiance Suprema, 8th Floor</p>
                                <p className="text-sm text-gray-500">Get Directions</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-tmc-red text-center py-4">
                <p className="text-white">
                    Copyright 2024 TechnoMelt Solutions, All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
