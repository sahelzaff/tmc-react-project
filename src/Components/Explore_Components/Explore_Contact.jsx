import React from 'react';
import assets from '../../../public/assets/assets';

const Explore_Contact = () => {
    return (
        <div className='w-full h-auto bg-tmc-red p-6 relative mb-10'>
            <img src={assets.call_explore} alt="" className='w-10/12 mx-auto' />
            {/* Text overlay */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold text-start ml-20'>
                <h2>Contact Us Today!</h2>
                <p>We're here to help you.</p>

                <button
                    type="button"
                    className="bg-tmc-red border-[3px] border-tmc-red text-white px-10 rounded-lg py-1 text-[20px] font-bold hover:bg-tmc-red hover:translate-y-[-2px] transition-transform duration-300 ease-in-out mt-4"

                >Contact Us</button>
            </div>
        </div>
    );
};

export default Explore_Contact;
