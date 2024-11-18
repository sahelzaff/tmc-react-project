import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../../public/assets/assets'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUserTie, FaUsers, FaClipboardCheck, FaTools, FaChartLine, FaShieldAlt, FaFileAlt, FaDraftingCompass, FaHardHat, FaSearchPlus, FaUserCog, FaCertificate } from 'react-icons/fa'

const Service_Main = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    }

    return (
        <motion.div 
            className='w-full h-auto py-10'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Introduction Section */}
            <motion.div className="px-16 mb-20">
                <h2 className='font-roboto font-medium text-[18px] pb-4 text-black'>
                    <Link to='/' className='hover:underline'>Home</Link>
                    / Services
                </h2>
                <div className="flex flex-col w-full ">
                    <div className="flex items-center gap-2 pb-2">
                        <h1 className="text-tmc-red font-roboto font-bold text-[19px]">
                            Our Services
                        </h1>
                        <div className="h-[2px] w-6 bg-tmc-red"></div>
                    </div>
                    <p className="text-black font-roboto text-[16px] mb-6">
                        At Technomelt Solution, we offer a comprehensive range of services designed to meet the needs of the steel production and machinery industries. With our expert consulting services and reliable manpower supply, we ensure that your projects run smoothly, efficiently, and on time.
                    </p>
                   
                </div>
                <hr className='mb-[-50px]'/>
            </motion.div>

            {/* Consultant Services Section */}
            <div className="pt-10 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-tmc-red mb-6">Consultant Services</h2>
                            <p className="text-gray-700 mb-8">
                                As a leading consultancy in the industry, Technomelt Solution provides top-tier consulting services to help you execute your projects effectively. Our team of experts is committed to analyzing your project requirements in-depth and delivering precise, reliable solutions that drive success.
                            </p>

                            {/* Services Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaFileAlt className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Detailed Project Reports</h3>
                                    <p className="text-gray-600">Thorough project reports covering feasibility studies, risk management, and cost analysis.</p>
                                </motion.div>

                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaDraftingCompass className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Engineering Solutions</h3>
                                    <p className="text-gray-600">Complete engineering solutions including Civil, Structural, and Mechanical drawings.</p>
                                </motion.div>

                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaHardHat className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Project Management</h3>
                                    <p className="text-gray-600">End-to-end project management ensuring timely completion and cost efficiency.</p>
                                </motion.div>

                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaSearchPlus className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Inspection & Expediting</h3>
                                    <p className="text-gray-600">Quality assurance and timely delivery of materials and equipment.</p>
                                </motion.div>
                            </div>

                            {/* Why Choose Us Section */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-tmc-red mb-6">Why Choose Us for Consulting?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Competitive pricing with no compromise on quality",
                                        "Expert analysis and precision in every phase",
                                        "Emphasis on safety and compliance standards",
                                        "Rigorous quality checks for all deliverables"
                                    ].map((item, index) => (
                                        <motion.li 
                                            key={index}
                                            className="flex items-center gap-3 text-gray-700"
                                            whileHover={{ x: 5 }}
                                        >
                                            <FaArrowRight className="text-tmc-red" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <motion.img 
                                src={assets.consultant} 
                                alt="Consulting Services"
                                className="rounded-lg shadow-xl w-full"
                                
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Manpower Supply Section */}
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-tmc-red mb-6">Manpower Supply</h2>
                            <p className="text-gray-700 mb-8">
                                We understand the importance of skilled manpower for successful project execution. Our Manpower Supply services provide access to experienced professionals, ensuring operational excellence and efficiency.
                            </p>

                            {/* Services Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaUserCog className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Skilled Workers</h3>
                                    <p className="text-gray-600">Highly qualified technicians, operators, and engineers.</p>
                                </motion.div>

                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaUsers className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Flexible Staffing</h3>
                                    <p className="text-gray-600">Temporary and permanent staffing solutions.</p>
                                </motion.div>

                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaUserTie className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">On-site Supervision</h3>
                                    <p className="text-gray-600">Professional supervisors ensuring smooth operations.</p>
                                </motion.div>

                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaCertificate className="text-tmc-red text-2xl mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Safety Training</h3>
                                    <p className="text-gray-600">Certified workers with comprehensive safety training.</p>
                                </motion.div>
                            </div>

                            {/* Contact CTA */}
                            <motion.div 
                                className="bg-tmc-red text-white p-8 rounded-lg shadow-lg text-center"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                                <p className="mb-6">Contact us today to discuss your manpower requirements.</p>
                                <Link to="/contact-us">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-tmc-red px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto"
                                    >
                                        Contact Us Now
                                        <FaArrowRight />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2">
                            <motion.img 
                                src={assets.Manpower_supply} 
                                alt="Manpower Services"
                                className="rounded-lg shadow-xl w-full"
                                
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Service_Main