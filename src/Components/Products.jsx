
import React from 'react';
import assets from '../../public/assets/assets';
import './Components.css'; // Make sure your CSS file is linked if you have additional styling

const Products = () => {
    return (
        <div
            className='h-auto bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${assets.bg1})` }}
        >
            <div className='w-full px-16 py-20'>
                <div className='flex flex-col w-full '>
                    <div className='flex items-center gap-2 pb-2'>
                        <h1 className='text-tmc-red font-roboto font-medium text-[19px]'>Our Products</h1>
                        <div className='h-[2px] w-6 bg-tmc-red'></div>
                    </div>
                    <h2 className='text-white font-roboto font-bold text-5xl'>Products</h2>
                </div>
            </div>

            <div className='pb-20'>
                <div className='flex flex-row items-center justify-center gap-20'>
                    <div className='bg-white flex flex-col items-center justify-center w-[350px] h-auto p-4 rounded-lg shadow-lg'>
                        <img src={assets.product1} alt="" className='w-[400px]' srcset="" />
                        <h2 className='font-bold font-roboto text-tmc-red text-2xl py-4'>Machinery</h2>
                        <p className='font-roboto text-[14px] text-gray-500 text-center'>Advanced Continuous Casting Machines designed for efficiency and durability.</p>
                        <button type="button" className='my-5 text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-10 text-center py-1 rounded-lg hover:text-white hover:bg-tmc-red transition-all duration-300 ease-in-out'>View Products</button>
                    </div>
                    <div className='bg-white flex flex-col items-center justify-center w-[350px] h-auto p-4 rounded-lg shadow-lg'>
                        <img src={assets.product2} alt="" className='w-[400px]' srcset="" />
                        <h2 className='font-bold font-roboto text-tmc-red text-2xl py-4'> Major Equipments</h2>
                        <p className='font-roboto text-[14px] text-gray-500 text-center'>Comprehensive range of major equipment ensuring seamless operation.</p>
                        <button type="button" className='my-5 text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-10 text-center py-1 rounded-lg hover:text-white hover:bg-tmc-red transition-all duration-300 ease-in-out'>View Products</button>
                    </div>
                    <div className='bg-white flex flex-col items-center justify-center w-[350px] h-auto p-4 rounded-lg shadow-lg'>
                        <img src={assets.product3} alt="" className='w-[400px]' srcset="" />
                        <h2 className='font-bold font-roboto text-tmc-red text-2xl py-4 text-center'>Billets, Blooms, Rounds</h2>
                        <p className='font-roboto text-[14px] text-gray-500 text-center'>Various sizes and shapes to meet your production needs.</p>
                        <button type="button" className='my-5 text-[18px] font-roboto font-bold bg-transparent border-[3px] border-tmc-red text-tmc-red px-10 text-center py-1 rounded-lg hover:text-white hover:bg-tmc-red transition-all duration-300 ease-in-out'>View Products</button>
                    </div>
                    
                </div>
            </div>
            <div className=' w-full flex items-center pb-14'>
            <button type="button" className='mt-5 mx-auto text-[18px] font-roboto font-bold bg-transparent border-[3px] border-white text-white px-12 text-center py-2 rounded-lg hover:text-tmc-red hover:border-tmc-red transition-all duration-300 ease-in-out'>View All Products</button>
            </div>
        </div>
    );
}

export default Products;
