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
        <div className='h-auto w-full pt-6 md:pt-10'>
            <div className='px-4 md:px-8 lg:px-16'>
                <Breadcrumb items={breadcrumbItems} />

                <div className='h-auto w-full pb-10 md:pb-20'>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 px-0 md:px-6'>
                        <div className='flex items-center justify-center w-full lg:w-1/2'>
                            <img src={assets.team_image} className='h-full w-full rounded-sm' alt="Team" />
                        </div>

                        <div className='flex flex-col items-start lg:items-center justify-start w-full lg:w-1/2 mt-6 lg:mt-0'>
                            <div className='w-full'>
                                <h1 className='font-roboto font-extrabold text-tmc-red text-2xl md:text-3xl lg:text-4xl'>
                                    Detailed Introduction About Your Company:
                                </h1>
                                <p className='font-roboto text-sm md:text-base py-3 text-black font-normal'>
                                    We are a leading provider of Continuous Casting Machines and related equipment, committed to delivering high-quality products and exceptional services. Our team of experts is dedicated to ensuring your operations run smoothly and efficiently.
                                </p>
                            </div>
                            <div className='w-full mt-4 md:mt-6'>
                                <h1 className='font-roboto font-extrabold text-tmc-red text-2xl md:text-3xl lg:text-4xl'>
                                    Mission and Vision Section:
                                </h1>
                                <div className='space-y-4 md:space-y-6'>
                                    <div>
                                        <h2 className='font-roboto text-sm md:text-base text-black font-normal'>
                                            <span className='font-extrabold text-tmc-red text-lg md:text-xl block mb-2'>
                                                Company mission statement:
                                            </span>
                                            To provide top-quality machinery and expert consulting services that drive efficiency and innovation in the casting industry.
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 className='font-roboto text-sm md:text-base text-black font-normal'>
                                            <span className='font-extrabold text-tmc-red text-lg md:text-xl block mb-2'>
                                                Company vision:
                                            </span>
                                            To be the global leader in continuous casting solutions, recognized for our quality, innovation, and customer-centric approach.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore_team