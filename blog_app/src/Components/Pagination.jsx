import React, { useState } from 'react';
import logo from '../assets/images/logo.png'

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end).map((item, index) => (
      <div key={index} className>
        <div className='flex gap-8 items-center'>
            <div>
                 <img src={item.image } className="mb-4  w-20 h-20 rounded-full" />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-indigo-500'>{item.name} </h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
           
            
        </div>
        
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="">
        {renderData()}
      </div>

      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 mr-2 rounded-full ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &laquo; 
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
           &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
