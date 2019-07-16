import React from "react";
import PropTypes from "prop-types";

Categories.propTypes = {
  tags: PropTypes.array
};

function Categories({ tags }) {
  return (
    <div className="card my-4">
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              {tags.slice(0, Math.ceil(tags.length / 2)).map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              {tags.slice(Math.ceil(tags.length / 2), tags.length).map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
