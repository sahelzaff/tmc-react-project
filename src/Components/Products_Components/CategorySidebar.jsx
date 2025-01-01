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
        <div className="w-full bg-white rounded-lg shadow-sm">
            {/* Hide Filters Button */}
            <button
                onClick={handleClearAll}
                className="w-full bg-tmc-red text-white py-3 rounded-t-lg font-roboto font-medium hover:bg-red-700 transition-colors"
            >
                Hide Filters
            </button>

            {/* Categories Section */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-tmc-black mb-4">Categories</h2>
                
                {Object.entries(categories).map(([key, category]) => (
                    <div key={key} className="mb-4">
                        <button
                            onClick={() => toggleCategory(key)}
                            className={`flex items-center w-full text-left py-2 transition-colors text-[15px] font-roboto
                                ${selectedCategories[0] === key ? 
                                    'text-tmc-red font-medium' : 
                                    'text-gray-800 hover:text-tmc-red'}`}
                        >
                            {category.name}
                            {expandedCategories[key] ? 
                                <MdKeyboardArrowDown className="ml-auto text-xl" /> : 
                                <MdKeyboardArrowRight className="ml-auto text-xl" />
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
                                            className={`w-full text-left py-2 pl-4 text-[14px] transition-colors font-roboto
                                                ${selectedCategories.includes(subcategory) ? 
                                                    'text-tmc-red font-medium' : 
                                                    'text-gray-600 hover:text-tmc-red'}`}
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
        </div>
    );
};

export default CategorySidebar; 