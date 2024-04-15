import React from 'react';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Pagination = ({ currentPage, usersPerPage, totalUsers, nextPage, prevPage, goToPage }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const maxPageDisplay = 3; // Số lượng trang tối đa hiển thị

  // Tính toán trang đầu và trang cuối cần hiển thị
  let startPage;
  let endPage;
  if (totalPages <= maxPageDisplay) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(maxPageDisplay / 2)) {
      startPage = 1;
      endPage = maxPageDisplay;
    } else if (currentPage >= totalPages - Math.floor(maxPageDisplay / 2)) {
      startPage = totalPages - maxPageDisplay + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(maxPageDisplay / 2);
      endPage = currentPage + Math.floor(maxPageDisplay / 2);
    }
  }

  // Tạo mảng các số trang cần hiển thị
  const pageNumbers = [...Array(endPage - startPage + 1).keys()].map((i) => startPage + i);

  return (
    <div style={{ marginTop: "20px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' onClick={prevPage} disabled={currentPage === 1}>
        <GrLinkPrevious/>
        
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        {startPage > 1 && (
          <>
            <button className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' onClick={() => goToPage(1)}>1</button>
            <span>...</span>
          </>
        )}
        {pageNumbers.map((number) => (
          <button 
          className={`flex items-center justify-center px-3 h-8 mg-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage === number ? "text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : ""
          }`} 
          key={number} 
          onClick={() => goToPage(number)}
        >
          {number}
        </button>
        ))}
        {endPage < totalPages && (
          <>
            <span>...</span>
            <button className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' onClick={() => goToPage(totalPages)}>{totalPages}</button>
          </>
        )}
      </div>
      <button className='flex items-center justify-center px-3 h-8 mg-4 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' onClick={nextPage} disabled={currentPage === totalPages}>
        <GrLinkNext />
      </button>
      

    </div>
    
  );
}

export default Pagination;
