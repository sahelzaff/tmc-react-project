import React from 'react'
import assets from '../../../public/assets/assets'
import Breadcrumb from '../Breadcrumb'

const Services_hero = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Services' }
    ];

    return (
        <>
            <div className="relative h-80 w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center h-full w-full"
                    style={{ backgroundImage: `url(${assets.poster_products})` }}
                />

                {/* Dark Overlay for Mobile */}
                <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-0 h-full w-full"></div>

                {/* Text on Top */}
                <div className="relative flex flex-col items-start justify-center h-full w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-white font-roboto w-full md:w-96 text-center">Explore Our Services</h1>
                </div>
            </div>
            <div className="px-4 md:px-8 lg:px-16 pt-6">
                <Breadcrumb items={breadcrumbItems} />
            </div>
        </>
    )
}

export default Services_hero