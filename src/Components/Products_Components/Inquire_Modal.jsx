import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const Inquire_Modal = ({ isOpen, onClose, products }) => {
    const { register, handleSubmit, reset } = useForm();

    if (!isOpen) return null;

    const handleFormSubmit = async (data) => {
        // Log the form data to the console
        console.log('Form Data:', data);
    
        const webhookUrl = 'https://sheet.best/api/sheets/7be4bdc3-911f-44cd-8dba-1baf245fb42b'; // Replace with your Google Apps Script Webhook URL
        
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form.');
        }
        reset();
        onClose();
    };
    
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg relative w-full max-w-md mx-4">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 bg-tmc-red rounded-full text-white w-8 h-8 flex items-center justify-center"
                    onClick={onClose}
                >
                    <AiOutlineClose size={24} />
                </button>

                {/* Form */}
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Inquiry Form</h2>

                    <div>
                        <label className="block  font-roboto text-sm">Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none"
                            {...register('name', { required: true })}
                        />
                    </div>

                    <div>
                        <label className="block  font-roboto text-sm">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none"
                            {...register('phone', { required: true })}
                        />
                    </div>

                    <div>
                        <label className="block  font-roboto text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none"
                            {...register('email', { required: true })}
                        />
                    </div>

                    <div>
                        <label className="block  font-roboto text-sm">Product</label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none"
                            {...register('product', { required: true })}
                        >
                            {products.map((product) => (
                                <option key={product.id} value={product.name}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block  font-roboto text-sm">Requirement</label>
                        <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tmc-red focus:outline-none"
                            {...register('details')}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-tmc-red text-white py-2 rounded-lg font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Inquire_Modal;
