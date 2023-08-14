import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5; // Number of visible page links

    if (totalPages <= visiblePages) {
      // If the total number of pages is less than or equal to the visible pages,
      // show all page links
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If the total number of pages is greater than the visible pages,
      // calculate the range of page links to display based on the current page

      let startPage = currentPage - Math.floor(visiblePages / 2);
      let endPage = currentPage + Math.floor(visiblePages / 2);

      if (startPage < 1) {
        // Adjust the start and end page numbers if they go below 1 or above the total pages
        endPage += Math.abs(startPage) + 1;
        startPage = 1;
      }

      if (endPage > totalPages) {
        // Adjust the start and end page numbers if they go above the total pages
        startPage -= endPage - totalPages;
        endPage = totalPages;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <span className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </span>
        </li>
        {getPageNumbers().map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
          >
            <span className="page-link" onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </span>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <span className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
