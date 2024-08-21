import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-6">
      <ul className="flex justify-end">
        {pages.map(page => (
          <li key={page} className={`mx-1 ${currentPage === page ? 'font-bold' : ''}`}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-tmc-red text-white' : 'bg-white text-black'}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
