
import React, { useState } from 'react';
import { FaFileAlt, FaTools, FaProjectDiagram, FaSearch, FaFire } from 'react-icons/fa';
import assets from '../../public/assets/assets';

const servicesData = [
    {
        id: 1,
        name: 'Detailed Project Reports',
        description: 'Comprehensive project reports specifically designed for the steel manufacturing industry. Our detailed reports cover every phase of your equipment projects, from initial feasibility studies to in-depth technical analyses, ensuring high-quality outcomes and exceptional service delivery tailored to your operational needs.',
        icon: <FaFileAlt className="text-2xl" />,
        image: assets.service1, 
    },
    {
        id: 2,
        name: 'Basic and Detailed Engineering',
        description: 'Expert engineering services focused on delivering high-quality equipment solutions for the steel manufacturing industry. Our team provides both basic and detailed engineering, ensuring precision in design and functionality to meet your specific project requirements and enhance operational efficiency.',
        icon: <FaTools className="text-2xl" />,
        image: assets.service2, 
    },
    {
        id: 3,
        name: 'Construction & Project Management',
        description: 'End-to-end construction and project management services tailored for the steel manufacturing sector. We oversee every aspect of your equipment installation and facility development, ensuring timely delivery, cost efficiency, and adherence to the highest quality standards, all while minimizing downtime and maximizing productivity.',
        icon: <FaProjectDiagram className="text-2xl" />,
        image: assets.service3, 
    },
    {
        id: 4,
        name: 'Inspection & Expediting',
        description: 'Specialized inspection and expediting services for the steel manufacturing industry. We ensure that all equipment and materials meet stringent quality standards and project timelines, reducing delays and guaranteeing that your operations run smoothly and efficiently from start to finish.',
        icon: <FaSearch className="text-2xl" />,
        image: assets.service4, 
    },
    {
        id: 5,
        name: 'Induction Furnace',
        description: 'Advanced induction furnace solutions designed for the steel manufacturing industry. Our services include the design, installation, and maintenance of high-efficiency induction furnaces, ensuring optimal performance, energy savings, and superior quality in your steel production processes.',
        icon: <FaFire className="text-2xl" />,
        image: assets.service5, 
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    return (
        <div className="relative py-20 h-auto w-full">
            <img
                src={assets.tmt1}
                alt="TMT Bars"
                className="absolute top-0 left-0 w-40 h-auto" 
            />
            <img
                src={assets.tmt2}
                alt="TMT Bars"
                className="absolute top-0 left-0 w-40 h-auto" 
            />
            <img
                src={assets.tmt3}
                alt="TMT Bars"
                className="absolute top-0 left-0 w-40 h-auto" 
            />
            <img
                src={assets.tmt4}
                alt="TMT Bars"
                className="absolute top-0 left-0 w-40 h-auto" 
            />
            <div className="px-16 pt-24">
                <div className='flex items-center gap-2 pb-2'>
                    <h1 className='text-tmc-red font-roboto font-medium text-[19px]'>Our Services</h1>
                    <div className='h-[2px] w-6 bg-tmc-red'></div>
                </div>
                <h2 className='text-tmc-black font-roboto font-bold text-5xl'>Services</h2>
                <p className='text-gray-600 font-roboto text-lg'>Technical Consultant for SMS Continuous Casting Automation
                </p>
            </div>

            <div className="flex px-16 pt-10">
                {/* Service List */}
                <div className="flex flex-col w-1/3 bg-gray-100 p-4 rounded-lg">
                    {servicesData.map(service => (
                        <div
                            key={service.id}
                            className={`flex items-center p-4 mb-4 cursor-pointer border rounded-lg transition 
                          ${selectedService.id === service.id ? 'bg-tmc-red text-white' : 'hover:bg-tmc-red hover:text-white'}`}
                            onClick={() => setSelectedService(service)}
                        >
                            <div className={`${selectedService.id === service.id ? 'text-white' : ''} ${'group-hover:text-white'}`}>
                                {service.icon}
                            </div>
                            <span className={`ml-4 font-medium ${selectedService.id === service.id ? 'text-white' : ''} ${'group-hover:text-white'}`}>
                                {service.name}
                            </span>
                        </div>

                    ))}
                </div>

                {/* Service Description */}
                <div className="w-2/3 px-6 pt-3">
                    <h2 className="text-3xl font-bold mb-4 text-tmc-red">{selectedService.name}</h2>
                    <img src={selectedService.image} alt={selectedService.name} className="w-/6  rounded-sm h-auto" />
                    <p className="text-lg text-gray-700 pt-4">{selectedService.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
