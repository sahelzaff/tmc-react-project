import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from './productData';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { FiX } from 'react-icons/fi';

const CategorySidebar = ({ selectedCategories, onCategoryChange }) => {
    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleSubcategoryClick = (mainCategory, subcategory) => {
        onCategoryChange([mainCategory, subcategory]);
    };

    const handleClearAll = () => {
        onCategoryChange([]);
        setExpandedCategories({});
    };

    return (
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-tmc-black">Categories</h2>
                {selectedCategories.length > 0 && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClearAll}
                        className="flex items-center gap-1 text-sm text-tmc-red hover:text-red-700 transition-colors"
                    >
                        <FiX className="w-4 h-4" />
                        Clear All
                    </motion.button>
                )}
            </div>
            
            {Object.entries(categories).map(([key, category]) => (
                <div key={key} className="mb-4">
                    <button
                        onClick={() => toggleCategory(key)}
                        className={`flex items-center justify-between w-full p-2 text-left rounded-lg transition-colors
                            ${selectedCategories[0] === key ? 
                                'bg-red-50 text-tmc-red' : 
                                'hover:bg-gray-50 text-gray-800'}`}
                    >
                        <span className="font-medium">{category.name}</span>
                        {expandedCategories[key] ? 
                            <MdKeyboardArrowDown className="text-xl" /> : 
                            <MdKeyboardArrowRight className="text-xl" />
                        }
                    </button>
                    
                    <AnimatePresence>
                        {expandedCategories[key] && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                {category.subcategories.map((subcategory) => (
                                    <button
                                        key={subcategory}
                                        onClick={() => handleSubcategoryClick(key, subcategory)}
                                        className={`w-full text-left p-2 pl-6 text-sm transition-colors
                                            ${selectedCategories.includes(subcategory) ? 
                                                'text-tmc-red font-medium bg-red-50' : 
                                                'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        {subcategory}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default CategorySidebar; 