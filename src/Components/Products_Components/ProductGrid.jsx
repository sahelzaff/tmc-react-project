import React from 'react';
import { motion } from 'framer-motion';

const ProductGrid = ({ products, onInquireNowClick }) => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1 // Stagger children animations
            }
        }
    };

    // Individual card animation variants
    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {products.map(product => (
                <motion.div 
                    key={product.id} 
                    className="border p-4 rounded-lg h-auto flex flex-col items-center justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={cardVariants}
                    whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    />
                    <div className="flex flex-col items-center flex-grow">
                        <motion.h3 
                            className="text-xl font-semibold mb-2 text-center text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {product.name}
                        </motion.h3>
                        <motion.p 
                            className="text-center text-gray-600 text-sm mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {product.description}
                        </motion.p>
                    </div>
                    <motion.div 
                        className="w-full flex items-center justify-center mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button
                            type="button"
                            className="w-full text-[18px] font-roboto font-bold bg-tmc-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            onClick={() => onInquireNowClick(product)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get a Quote
                        </motion.button>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProductGrid;
