import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import assets from '../../../public/assets/assets';

const ExploreTeamCard = ({ image, name, designation }) => {
    return (
        <div className='flex flex-col items-center justify-center p-6 rounded-sm shadow-sm border-[0.5px] border-tmc-red'>
            {/* Dynamic Image */}
            <img src={image} className='w-full object-cover' alt={name} />
            
            {/* Dynamic Name */}
            <h1 className='text-3xl font-roboto font-extrabold text-tmc-red pt-5'>{name}</h1>
            
            {/* Dynamic Designation */}
            <p className='text-lg font-bold font-roboto'>{designation}</p>
            
            <button
                type="button"
                className="bg-tmc-red flex items-center justify-center gap-2 border-[3px] w-auto border-tmc-red text-white px-8 rounded-lg py-2 text-[20px] font-bold my-6 hover:bg-tmc-red hover:translate-y-[-2px] transition-transform duration-300 ease-in-out group"
            >
                Know More
                <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]">
                    <FaArrowRight />
                </span>
            </button>
        </div>
    );
};

// Usage Example
const TeamSection = () => {
    return (
        <div className='w-full h-auto py-10 px-6'>
            <div className="flex flex-col w-full pb-10">
                <div className="flex items-center gap-2 pb-2">
                    <h1 className="text-tmc-red font-roboto font-medium text-[19px]">
                        Explore Us
                    </h1>
                    <div className="h-[2px] w-6 bg-tmc-red"></div>
                </div>
                <h2 className="text-black font-roboto font-bold text-5xl">Our Team</h2>
            </div>

            {/* Grid Container for Team Cards */}
            <div className='grid grid-cols-3 gap-4'>
                <ExploreTeamCard 
                    image={assets.employee1} 
                    name="Neha Sharma" 
                    designation="Company's Director" 
                />
                <ExploreTeamCard 
                    image={assets.employee2} 
                    name="Rahul Mehta" 
                    designation="Project Manager" 
                />
                <ExploreTeamCard 
                    image={assets.employee3} 
                    name="Priya Kapoor" 
                    designation="Marketing Head" 
                />
                <ExploreTeamCard 
                    image={assets.employee1} 
                    name="Neha Sharma" 
                    designation="Company's Director" 
                />
                <ExploreTeamCard 
                    image={assets.employee2} 
                    name="Rahul Mehta" 
                    designation="Project Manager" 
                />
                <ExploreTeamCard 
                    image={assets.employee3} 
                    name="Priya Kapoor" 
                    designation="Marketing Head" 
                />
               
            </div>
        </div>
    );
};

export default TeamSection;
