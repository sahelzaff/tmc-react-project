import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Breadcrumb = ({ items }) => {
    return (
        <div className="flex items-center gap-2 text-gray-600 mb-6">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <MdKeyboardArrowRight className="text-xl" />}
                    {item.link ? (
                        <Link 
                            to={item.link}
                            className="hover:text-tmc-red transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-tmc-red">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb; 