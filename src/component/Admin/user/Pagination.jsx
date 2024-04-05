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
      <button onClick={prevPage} disabled={currentPage === 1}>
        <GrLinkPrevious />
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        {startPage > 1 && (
          <>
            <button onClick={() => goToPage(1)}>1</button>
            <span>...</span>
          </>
        )}
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => goToPage(number)} style={{ fontWeight: currentPage === number ? "bold" : "normal" }}>
            {number}
          </button>
        ))}
        {endPage < totalPages && (
          <>
            <span>...</span>
            <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
          </>
        )}
      </div>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        <GrLinkNext />
      </button>
    </div>
  );
}

export default Pagination;
