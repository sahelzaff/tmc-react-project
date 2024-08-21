import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { categories, products as allProducts } from './productData'; // Import the categories and products data

const FilterSidebar = ({ onFilterChange, selectedFilters = [], removeFilter }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  // Function to filter products based on selected filters
  useEffect(() => {
    const filterProducts = () => {
      if (selectedFilters.length === 0) {
        setFilteredProducts(allProducts);
        return;
      }

      const filtered = allProducts.filter((product) =>
        selectedFilters.every((filter) =>
          Array.isArray(product.category)
            ? product.category.includes(filter)
            : product.category === filter
        )
      );

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedFilters, allProducts]);

  return (
    <div className="w-1/4 p-4 bg-white mt-5 border-r-2 border-gray-50 h-96">
      <div className="flex items-center mb-4">
        <FaFilter className="text-xl mr-2" />
        <h2 className="text-lg font-bold">Filters</h2>
      </div>

      <div className="mb-4">
        {selectedFilters.length > 0 ? (
          selectedFilters.map((filter) => (
            <div key={filter} className="flex items-center p-1 text-white justify-center pl-1 text-sm bg-tmc-red w-max h-min rounded mb-2">
              <span className="mr-2">{filter}</span>
              <button onClick={() => removeFilter(filter)} className="text-white hover:text-tmc-black">
                <IoMdClose />
              </button>
            </div>
          ))
        ) : (
          <p>No filters selected</p>
        )}
      </div>

      {categories && Object.keys(categories).map((mainCategory) => (
        <div key={mainCategory} className="mb-4">
          <button 
            onClick={() => handleCategoryClick(mainCategory)} 
            className="w-full text-left font-semibold"
          >
            {mainCategory}
          </button>
          {openCategory === mainCategory && (
            <ul className="pl-4 mt-2 border-l border-gray-300">
              {categories[mainCategory] && categories[mainCategory].map((subCategory) => (
                <li key={subCategory} className="mb-2">
                  <button 
                    onClick={() => handleFilterClick(subCategory)} 
                    className="block"
                  >
                    {subCategory}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <hr className="my-4 border-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
