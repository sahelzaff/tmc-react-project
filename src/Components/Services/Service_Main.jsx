import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../../public/assets/assets'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUserTie, FaUsers } from 'react-icons/fa'
import Breadcrumb from '../Breadcrumb'

const ServiceCard = ({ title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
        <h3 className="text-lg md:text-xl font-bold text-tmc-red mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </motion.div>
)

const Service_Main = () => {
    const consultingServices = [
        {
            title: "Detailed Project Reports",
            description: "Thorough project reports covering feasibility studies, risk management, and cost analysis."
        },
        {
            title: "Engineering Solutions",
            description: "Complete engineering solutions including Civil, Structural, and Mechanical drawings."
        },
        {
            title: "Project Management",
            description: "End-to-end project management ensuring timely completion and cost efficiency."
        },
        {
            title: "Inspection & Expediting",
            description: "Quality assurance and timely delivery of materials and equipment."
        }
    ]

    const manpowerServices = [
        {
            title: "Skilled Workforce",
            description: "Experienced professionals for various technical roles and positions."
        },
        {
            title: "Training Programs",
            description: "Comprehensive training and skill development programs."
        },
        {
            title: "Resource Management",
            description: "Efficient allocation and management of human resources."
        },
        {
            title: "Performance Monitoring",
            description: "Regular assessment and quality control of workforce."
        }
    ]

    const whyChooseUsPoints = [
        "Industry-leading expertise and experience",
        "Comprehensive project management solutions",
        "Proven track record of successful implementations",
        "Dedicated support throughout project lifecycle"
    ]

    const manpowerPoints = [
        "Skilled and certified professionals",
        "Flexible staffing solutions",
        "Comprehensive training programs",
        "24/7 support and management"
    ]

    return (
        <div className='w-full h-auto py-6 md:py-10'>
            <div className='px-4 md:px-8 lg:px-16'>
                {/* Consultant Services Section */}
                <div className="mb-10 md:mb-20">
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-8 md:mb-12 mt-6 md:mt-10">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-4xl font-bold text-tmc-red mb-4 md:mb-6">Consultant Services</h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                As a leading consultancy in the industry, Technomelt Solution provides top-tier 
                                consulting services to help you execute your projects effectively. Our team of 
                                experts is committed to analyzing your project requirements in-depth and delivering 
                                precise, reliable solutions that drive success.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img 
                                src={assets.Technical_Consultant} 
                                alt="Consulting Services" 
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {consultingServices.map((service, index) => (
                            <ServiceCard 
                                key={index}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mb-10 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-tmc-red mb-4 md:mb-8">Why Choose Us for Consulting?</h2>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-tmc-red mb-4">Expert Consultation</h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                Our team brings years of industry experience and expertise to every project.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="space-y-3 md:space-y-4">
                                {whyChooseUsPoints.map((point, index) => (
                                    <li key={index} className="flex items-center justify-between text-gray-700 p-2 hover:bg-gray-50 rounded-lg text-sm md:text-base">
                                        <span>{point}</span>
                                        <FaArrowRight className="text-tmc-red" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Manpower Supply Section */}
                <div className="mb-10 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-tmc-red mb-4 md:mb-8">Manpower Supply</h2>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8 md:mb-12">
                        <div className="w-full md:w-1/2">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                We provide specialized manpower supply services tailored to the steel industry. 
                                Our skilled professionals are equipped with the knowledge and experience needed 
                                to support your projects, ensuring timely and effective execution of all tasks.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img 
                                src={assets.Manpower_supply} 
                                alt="Manpower Services" 
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {manpowerServices.map((service, index) => (
                            <ServiceCard 
                                key={index}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Why Choose Us for Manpower Section */}
                <div className="mb-10 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-tmc-red mb-4 md:mb-8">Why Choose Us for Manpower?</h2>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-tmc-red mb-4">Professional Staffing</h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                We provide skilled professionals who understand your industry requirements.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="space-y-3 md:space-y-4">
                                {manpowerPoints.map((point, index) => (
                                    <li key={index} className="flex items-center justify-between text-gray-700 p-2 hover:bg-gray-50 rounded-lg text-sm md:text-base">
                                        <span>{point}</span>
                                        <FaArrowRight className="text-tmc-red" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Centered CTA Section */}
                <motion.div 
                    className="w-full mx-auto bg-tmc-red text-white p-6 md:p-10 rounded-lg text-center shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
                    <p className="text-base md:text-lg mb-4 md:mb-6">Contact us today to discuss your requirements.</p>
                    <Link to="/contact-us">
                        <motion.button
                            className="bg-white text-tmc-red px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold text-base md:text-lg inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us Now
                            <FaArrowRight />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Service_Main