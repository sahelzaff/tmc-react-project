import React from 'react'
import assets from '../../../public/assets/assets'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb'

const Explore_team = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'About Us' }
    ];

    return (
        <div className='h-auto w-full pt-10'>
            <div className='px-16'>
                <Breadcrumb items={breadcrumbItems} />
                <h2 className='font-roboto font-medium text-[18px] pb-10 pt-2 px-6 text-black'>
                <a href=''>
                    <Link to='/' className='hover:underline'>Home </Link>
                
                </a>
                   / Explore Us</h2>

                <div className='h-auto w-full pb-20'>

                    <div className='flex flex-row items-center justify-center gap-10 px-6'>
                        <div className='flex items-center justify-center w-1/2'>
                            <img src={assets.team_image} className='h-full w-full rounded-sm ' alt="" />
                        </div>

                        <div className='flex flex-col items-center justify-start w-1/2'>
                            <div>
                                <h1 className='font-roboto font-extrabold text-tmc-red text-4xl'>Detailed Introduction About Your Company:</h1>
                                <p className='font-roboto text-sm py-3 text-black font-normal'>We are a leading provider of Continuous Casting Machines and related equipment, committed to delivering high-quality products and exceptional services. Our team of experts is dedicated to ensuring your operations run smoothly and efficiently.</p>
                            </div>
                            <div>
                                <h1 className='font-roboto font-extrabold text-tmc-red text-4xl'>Mission and Vision Section:</h1>
                                <h2 className='font-roboto text-sm py-3 text-black font-normal pb-1'><span className='font-extrabold text-tmc-red text-xl'>Company mission statement:</span> To provide top-quality machinery and expert consulting services that drive efficiency and innovation in the casting industry.
                                </h2>
                                <h2 className='font-roboto text-sm py-3 text-black font-normal'><span className='font-extrabold text-tmc-red text-xl'>Company vision:</span> To be the global leader in continuous casting solutions, recognized for our quality, innovation, and customer-centric approach.
                                </h2>
                            </div>
                            {/* <button
                            type="button"
                            className="bg-tmc-red border-[3px] border-tmc-red text-white px-8 rounded-lg py-2 text-[20px] font-bold my-10 hover:bg-tmc-red hover:translate-y-[-2px] transition-transform duration-300 ease-in-out"
                            
                        >Contact Us</button> */}
                        </div>



                    </div>


                </div>
            </div>
        </div>
    )
}

export default Explore_team