import React from "react";

const Pagination = ({
  followerPerPage,
  totalFollowers,
  paginate,
  currentPage,
}) => {
  const totalPage = Math.ceil(totalFollowers / followerPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    let nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      paginate((prevPage) => prevPage + 1);
    }
  };
  const prevPage = () => {
    let prevPage = currentPage - 1;
    if (prevPage > 0) {
      paginate((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="btn-container">
      <div className="btn-wrapper">
        <button className="prev-btn" onClick={() => prevPage()}>
          prev
        </button>
        <button className="next-btn" onClick={() => nextPage()}>
          next
        </button>
      </div>

      <div className="pageNumber-container">
        {pageNumbers.map((num, index) => (
          <button
            className={`page-btn ${
              currentPage === index + 1 ? "active-btn" : ""
            }`}
            onClick={() => paginate(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
