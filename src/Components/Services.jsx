import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import assets from '../../public/assets/assets';
import Homepage_Modal from './Homepage_Modal';

const servicesData = [
    {
        id: 1,
        name: 'Consultant',
        description: 'Technomelt Solutions offers comprehensive consultancy services for steel melting shop projects, from turnkey solutions for mini steel plants to the expansion and modification of existing setups. Our expertise in automation and quality control ensures that your operations run smoothly, efficiently, and with the highest quality standards.',
        icon: <FaBriefcase className="text-2xl" />,
        image: assets.service1,
    },
    {
        id: 2,
        name: 'Man power supply',
        description: 'Technomelt Solutions provides specialized manpower supply services tailored to the steel industry. Our skilled professionals are equipped with the knowledge and experience needed to support your projects, ensuring timely and effective execution of all tasks, from installation to ongoing maintenance.',
        icon: <FaUsers className="text-2xl" />,
        image: assets.service2,
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Pre-load images to avoid delay
    useEffect(() => {
        servicesData.forEach(service => {
            const img = new Image();
            img.src = service.image;
        });
    }, []);

    // Function to toggle the modal
    const handleEnquireNowClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                <p className='text-gray-600 font-roboto text-lg'>Technical Consultant for SMS Continuous Casting Automation</p>
            </div>

            <div className="flex px-16 pt-10">
                {/* Service List */}
                <div className="flex flex-col w-1/3 bg-gray-100 p-4 rounded-lg">
                    {servicesData.map(service => (
                        <div
                            key={service.id}
                            className={`flex items-center p-4 mb-4 cursor-pointer border rounded-lg transition 
                          ${selectedService.id === service.id ? 'bg-tmc-red text-white' : 'hover:bg-tmc-red hover:text-white'}`}
                            onMouseEnter={() => setSelectedService(service)}
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
                    <img src={selectedService.image} alt={selectedService.name} className="w-full rounded-sm h-auto" />
                    <p className="text-lg text-gray-700 pt-4">{selectedService.description}</p>
                    <div className='w-full flex items-center justify-center'>
                        <button
                            type="button"
                            className="mt-5 text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-12 text-center py-2 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={handleEnquireNowClick} // Open the modal on click
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            <Homepage_Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                products={servicesData} // Pass the products to the modal
            />
        </div>
    );
}

export default Services;
