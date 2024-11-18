import React from 'react';
import { motion } from 'framer-motion';

const ProductGrid = ({ products, onInquireNowClick }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded h-auto flex flex-col items-center justify-between bg-white shadow-md">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover mb-2 rounded"
                    />
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-2 text-center">{product.name}</h3>
                        <p className="text-center text-sm">{product.description}</p>
                    </div>
                    <div className="w-full flex items-center pt-7 pb-4">
                        <motion.button
                            type="button"
                            className="mx-auto text-[18px] font-roboto font-bold bg-tmc-red border-[3px] border-white text-white px-12 text-center py-2 rounded-lg"
                            onClick={() => onInquireNowClick(product)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                           Get a Quote
                        </motion.button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
