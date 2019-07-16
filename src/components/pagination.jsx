import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ current = 0, count }) => (
  <ul className="pagination justify-content-center mb-4">
    <li className={`page-item ${current >= count && "disabled"}`}>
      <NavLink className="page-link" to={`/page/${+current + 1}`}>
        &larr; Older
      </NavLink>
    </li>
    <li className={`page-item ${current || "disabled"}`}>
      <NavLink
        className="page-link"
        to={current > 1 ? `/page/${current - 1}` : `/`}
      >
        Newer &rarr;
      </NavLink>
    </li>
  </ul>
);
export default Pagination;
