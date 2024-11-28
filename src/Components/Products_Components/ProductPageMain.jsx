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
    };

    return (
        <div className="h-auto py-20 px-16 w-full" ref={productPageRef}>
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex flex-col w-full pb-10">
                <div className="flex items-center gap-2 pb-2">
                    <h1 className="text-tmc-red font-roboto font-medium text-[19px]">
                        Our Products
                    </h1>
                    <div className="h-[2px] w-6 bg-tmc-red"></div>
                </div>
                <p className="text-black font-roboto text-lg mb-6">
                    Explore our range of advanced Continuous Casting Machines and major equipment designed for optimal performance. 
                    <Link to="/contact-us" className="text-tmc-red hover:underline ml-1">
                        Contact us for more details.
                    </Link>
                </p>
                <h2 className="text-black font-roboto font-bold text-5xl mt-10">
                    Products
                </h2>
            </div>
            <hr className=''/>
            <div className="flex">
                <CategorySidebar
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoryChange}
                />
                <div className="w-3/4 p-4">
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
