import React from "react";

const Pagination = props => {
  const PageLinks = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    PageLinks.push(
      <li className={`page-item`} key={i} onClick={() => props.nextPage(i)}>
        <a href="#" className="page-link">
          {i}
        </a>
      </li>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <ul className="pagination">
          {props.currentPage > 1 ? (
            <li
              className={`page-item`}
              onClick={() => props.nextPage(props.currentPage - 1)}
            >
              <a href="#" className="page-link">
                Prev
              </a>
            </li>
          ) : (
            ""
          )}
          {PageLinks}
          {props.currentPage < props.pages + 1 ? (
            <li
              className={`page-item`}
              onClick={() => props.nextPage(props.currentPage + 1)}
            >
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
