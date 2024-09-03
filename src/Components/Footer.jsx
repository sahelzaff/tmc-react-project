import React from "react";
import assets from '../../public/assets/assets';
import { FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import GoogleMap from "./GoogleMap";
import GoogleMapFooter from "./GoogleMapFooter";


const Footer = () => {
    return (
        <footer className="bg-tmc-black text-white pt-12 ">
            <div className="container mx-auto flex flex-wrap justify-between items-start px-16 ">
                {/* Logo and Description */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <div className="mb-4">
                        <img src={assets.Technomelt_logo_white} alt="Technomelt Logo" className="h-20" />
                    </div>
                    <p className="text-gray-400 pr-10">
                        Technomelt Solutions provides cutting-edge Metal Heating & Melting Equipment, engineered to overcome Thermal Challenges with efficiency.
                    </p>
                    <div className="flex mt-4">
                        <a href="https://www.linkedin.com" className="mr-4" aria-label="LinkedIn">
                            <FaLinkedin className="h-6 w-6 hover:scale-125 transition-all duration-300 ease-in-out" />
                        </a>
                        <a href="https://www.youtube.com" className="mr-4" aria-label="YouTube">
                            <FaYoutube className="h-6 w-6 hover:scale-125 transition-all duration-300 ease-in-out" />
                        </a>
                        <a href="https://wa.me/your-whatsapp-number" className="mr-4" aria-label="WhatsApp">
                            <FaWhatsapp className="h-6 w-6 hover:scale-125 transition-all duration-300 ease-in-out" />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram">
                            <FaInstagram className="h-6 w-6 hover:scale-125 transition-all duration-300 ease-in-out" />
                        </a>
                    </div>


                </div>

                {/* Products & Services */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h3 className="font-semibold mb-4">Products & Services</h3>
                    <ul className="text-gray-400">
                        <li className="cursor-pointer hover:text-gray-200">Home</li>
                        <li className="cursor-pointer hover:text-gray-200">Explore Us</li>
                        <li className="cursor-pointer hover:text-gray-200">Products & Services</li>
                        <li className="cursor-pointer hover:text-gray-200">Clients Story</li>
                        <li className="cursor-pointer hover:text-gray-200">FAQ</li>
                        <li className="cursor-pointer hover:text-gray-200">Blogs</li>
                        <li className="cursor-pointer hover:text-gray-200">Contact Us</li>

                    </ul>
                </div>

                {/* Useful Links */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0">

                </div>

                {/* Our Location */}
                <div className="w-full md:w-1/4">
                    <h3 className="font-semibold mb-4">Our Location</h3>
                    <div className="">
                        <GoogleMapFooter />
                    </div>
                </div>
            </div>

            {/* Contact and Address Section */}
            <div className="w-full mt-12 py-6">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                    <div className="flex items-center flex-wrap justify-center">
                        <div className="flex items-center bg-[#262626] p-4 rounded mr-4 mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                            <FaEnvelope className="h-6 w-6 text-gray-400 mr-2" />
                            <div>
                                <p className="text-gray-400">info@technomeltsolutions.com</p>
                                <p className="text-sm text-gray-500">Drop Us a Line</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#d21317] p-4 rounded mr-4 mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" >
                            <FaPhoneAlt className="h-6 w-6 text-white mr-2" />
                            <div>
                                <p className="text-white">+91 88386 37146</p>
                                <p className="text-sm text-gray-300">Call Us Now</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#262626] p-4 rounded mb-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                            <FaMapMarkerAlt className="h-6 w-6 text-gray-400 mr-2" />
                            <a href="https://maps.app.goo.gl/KKKAaTbhksyvF6pm9" target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer">
                                    <p className="text-gray-400">Radiance Suprema, 8th Floor</p>
                                    <p className="text-sm text-gray-500">Get Directions</p>
                                </div>
                            </a>


                        </div>
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
