import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../../../public/assets/assets'


const Service_Main = () => {
    return (
        <div className='w-full h-auto py-10'>
            <h2 className='font-roboto font-medium text-[16px] tracking-wide pb-4 px-6 text-black'>
                <a href=''>
                    <Link to='/' className='hover:underline'>Home </Link>
                </a>
                / Services</h2>

            <div className='h-auto w-full'>
                <div className='flex flex-row items-center justify-center px-6'>
                    <div className='w-1/2 '>
                        <h1 className='font-roboto text-4xl font-extrabold pb-2 text-tmc-red'>Services</h1>
                        <p className='font-roboto text-[16px] text-black'>At <span className='font-bold'>Technomelt Solution</span>, we offer a comprehensive range of services designed to meet the needs of the steel production and machinery industries. With our expert consulting services and reliable manpower supply, we ensure that your projects run smoothly, efficiently, and on time.
                        </p>
                    </div>
                    <div className='w-1/2 flex items-center justify-center '>
                        <img src={assets.consultant} className='rounded-sm w-5/6' alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-row items-start justify-start py-20 gap-6 px-6 '>
                    <div className='W-1/2 flex flex-col  shadow-lg rounded-md p-6 '>
                        <h1 className='text-4xl font-extrabold text-tmc-red font-roboto pb-2 '>Consultant Services</h1>
                        <p className='font-roboto text-[14px] text-black'>As a leading consultancy in the industry, Technomelt Solution provides top-tier consulting services to help you execute your projects effectively. Our team of experts is committed to analyzing your project requirements in-depth and delivering precise, reliable solutions that drive success.</p>

                        <h2 className='text-2xl font-extrabold text-tmc-red font-roboto pt-5 pb-3'>Our Consultant Services Include:</h2>
                        <h2 className='font-roboto text-sm  text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>Detailed Project Reports:</span> We offer thorough project reports that cover all aspects of your project, from feasibility studies to risk management and cost analysis, giving you a clear path to successful execution.</h2>
                        <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>Basic and Detailed Engineering:</span> Our team provides complete engineering solutions, including Civil, Structural, and Mechanical drawings. These are tailored to your project's load-bearing capabilities and requirements, ensuring robust design and execution.</h2>
                        <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>Construction & Project Management:</span> From planning to execution, we handle the complete project management cycle, ensuring timely completion, cost efficiency, and safety at every step.</h2>
                        <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>Inspection & Expediting:</span> Our inspection services ensure that all materials and equipment meet the required standards, while our expediting services ensure timely delivery, minimizing project delays.</h2>

                        <h2 className='text-2xl font-extrabold text-tmc-red font-roboto pt-5'>Why Choose Us for Consulting?
                        </h2>
                        <div className='pl-5'>
                            <p className='font-roboto text-sm text-black font-normal pb-1 pt-1'>Competitive pricing with no compromise on quality</p>
                            <p className='font-roboto text-sm text-black font-normal pb-1'>Expert analysis and precision in every phase of the project
                            </p>
                            <p className='font-roboto text-sm text-black font-normal pb-1'>Emphasis on safety, ensuring all operations meet compliance standards</p>
                            <p className='font-roboto text-sm text-black font-normal pb-1'>Rigorous quality checks to ensure all deliverables exceed expectations</p>
                        </div>
                        <button
                            type="button"
                            className="bg-tmc-red flex items-center justify-center gap-2 border-[3px] w-80 mx-auto border-tmc-red text-white px-8 rounded-lg py-2 text-[20px] font-bold my-6 hover:bg-tmc-red hover:translate-y-[-2px] transition-transform duration-300 ease-in-out group"
                        >
                            Contact Us Today for a Consultation
                            {/* <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]">
                    <FaArrowRight />
                </span> */}
                        </button>
                    </div>

                    <div className='W-1/2 flex flex-col shadow-lg rounded-md p-6'>
                        <h1 className='text-4xl font-extrabold text-tmc-red font-roboto pb-2 '>Manpower Supply</h1>
                        <p className='font-roboto text-[14px] text-black'>At Technomelt Solution, we understand the importance of skilled manpower for the successful execution of your projects. Our <span className='font-bold'>Manpower Supply</span> services provide you with access to a pool of experienced professionals to meet your project’s demands, ensuring operational excellence and efficiency.</p>

                        <h2 className='text-2xl font-extrabold text-tmc-red font-roboto pt-5 pb-3'>Our Manpower Services Include:</h2>
                        <h2 className='font-roboto text-sm  text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>Skilled and Semi-Skilled Workers:</span> From technicians and operators to engineers, we supply highly qualified personnel suited to your specific project needs.
                        </h2>
                        <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>emporary and Permanent Staffing:</span> Whether you need temporary support or a long-term workforce solution, we can supply personnel tailored to your project's duration and scope.</h2>
                        <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>On-site Supervision: </span> Our manpower services include on-site supervisors to manage the team and ensure smooth operations throughout the project lifecycle.</h2>
                        <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-bold text-tmc-red text-lg'>Safety Training and Certification:</span> We provide workers who are fully trained and certified in safety procedures, ensuring compliance with industry standards.</h2>

                        <h2 className='text-2xl font-extrabold text-tmc-red font-roboto pt-5'>Why Choose Us for Manpower Supply?
                        </h2>
                        <div className='pl-5'>
                            <p className='font-roboto text-sm text-black font-normal pb-1 pt-1'>Access to a qualified and reliable workforce
                            </p>
                            <p className='font-roboto text-sm text-black font-normal pb-1'>Flexible staffing solutions to meet your project’s specific needs

                            </p>
                            <p className='font-roboto text-sm text-black font-normal pb-1'>Certified workers with experience in the steel production and machinery industries</p>
                            <p className='font-roboto text-sm text-black font-normal pb-1'>Dedicated support throughout the project duration</p>
                        </div>
                        <button
                            type="button"
                            className="bg-tmc-red flex items-center justify-center gap-2 border-[3px] w-80 mx-auto  border-tmc-red text-white px-8 rounded-lg py-2 text-[20px] font-bold my-6 hover:bg-tmc-red hover:translate-y-[-2px] transition-transform duration-300 ease-in-out group"
                        >
                            Get in Touch for Your Manpower Needs
                            {/* <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]">
                    <FaArrowRight />
                </span> */}
                        </button>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default Service_Main