import React from "react";
import "./pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, active }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-end">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <div
              onClick={() => paginate(number)}
              className={number === active ? "page-link active" : "page-link"}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
