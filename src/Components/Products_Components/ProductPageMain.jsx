import React, { useState, useRef } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import Inquire_Modal from './Inquire_Modal';
import { products, categories } from './productData';

const ProductPageMain = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productsPerPage = 9;

    // Create a reference for the component
    const productPageRef = useRef(null);

    // Function to filter products based on selected filters
    const filterProducts = () => {
        if (selectedFilters.length === 0) {
            return products;
        }

        return products.filter((product) =>
            selectedFilters.every((filter) =>
                Array.isArray(product.category)
                    ? product.category.includes(filter)
                    : product.category === filter
            )
        );
    };

    const filteredProducts = filterProducts();

    // Paginate products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to the top of the component
        productPageRef.current.scrollIntoView({ behavior: 'auto' });
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Handle modal open
    const handleInquireNowClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Handle form submission
    const handleFormSubmit = (formData) => {
        console.log("Form Submitted", formData);
        // Perform any necessary actions here, such as sending the data to a backend server
    };

    return (
        <div className="h-auto py-20 px-16 w-full" ref={productPageRef}>
            <div className="flex flex-col w-full pb-10">
                <div className="flex items-center gap-2 pb-2">
                    <h1 className="text-tmc-red font-roboto font-medium text-[19px]">
                        Our Products
                    </h1>
                    <div className="h-[2px] w-6 bg-tmc-red"></div>
                </div>
                <h2 className="text-black font-roboto font-bold text-5xl">
                    Products
                </h2>
            </div>
            <hr className=''/>
            <div className="flex">
                <FilterSidebar
                    onFilterChange={(filter) => setSelectedFilters(prev => [...prev, filter])}
                    selectedFilters={selectedFilters}
                    removeFilter={(filter) => setSelectedFilters(prev => prev.filter(f => f !== filter))}
                />
                <div className="w-3/4 p-4">
                    <ProductGrid products={currentProducts} onInquireNowClick={handleInquireNowClick} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>

            {/* Modal Component */}
            <Inquire_Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                products={products} 
                onSubmit={handleFormSubmit} 
            />
        </div>
    );
};

export default ProductPageMain;
