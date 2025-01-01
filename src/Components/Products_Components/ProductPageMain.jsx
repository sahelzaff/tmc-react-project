import React, { useState, useRef } from 'react';
import CategorySidebar from './CategorySidebar';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import Inquire_Modal from './Inquire_Modal';
import { products, categories } from './productData';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Breadcrumb from '../Breadcrumb';

const ProductPageMain = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const productsPerPage = 9;

    // Create a reference for the component
    const productPageRef = useRef(null);

    // Function to filter products based on selected filters
    const filterProducts = () => {
        if (selectedCategories.length === 0) {
            return products;
        }

        return products.filter((product) => {
            return selectedCategories.every(category => 
                product.category.includes(category)
            );
        });
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

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Products' }
    ];

    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories);
        setCurrentPage(1); // Reset to first page when filter changes
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false); // Close sidebar on mobile after selection
        }
    };

    return (
        <div className="h-auto py-10 md:py-20 px-4 md:px-16 w-full" ref={productPageRef}>
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex flex-col w-full pb-6 md:pb-10">
                <div className="flex items-center gap-2 pb-2">
                    <h1 className="text-tmc-red font-roboto font-medium text-[16px] md:text-[19px]">
                        Our Products
                    </h1>
                    <div className="h-[2px] w-6 bg-tmc-red"></div>
                </div>
                <p className="text-black font-roboto text-base md:text-lg mb-4 md:mb-6">
                    Explore our range of advanced Continuous Casting Machines and major equipment designed for optimal performance. 
                    <Link to="/contact-us" className="text-tmc-red hover:underline ml-1">
                        Contact us for more details.
                    </Link>
                </p>
                <h2 className="text-black font-roboto font-bold text-3xl md:text-5xl mt-6 md:mt-10">
                    Products
                </h2>
            </div>
            <hr className=''/>

            {/* Mobile Filter Toggle Button */}
            <button
                className="lg:hidden w-full bg-tmc-red text-white py-3 rounded-lg mb-4 font-roboto font-medium"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar - Hidden on mobile by default */}
                <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} w-full lg:w-1/4 mb-4 lg:mb-0`}>
                    <CategorySidebar
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>

                {/* Products Grid */}
                <div className="w-full lg:w-3/4 lg:pl-4">
                    {filteredProducts.length > 0 ? (
                        <>
                            <ProductGrid 
                                products={currentProducts} 
                                onInquireNowClick={handleInquireNowClick} 
                            />
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-500 text-lg">
                                No products found for the selected category.
                            </p>
                        </div>
                    )}
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
