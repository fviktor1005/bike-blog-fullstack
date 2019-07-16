import React from "react";
import { NavLink } from "react-router-dom";

export const Card = ({ title, text, image, author, _id, authors }) => {
  const timestamp = _id.toString().substring(0, 8);
  return (
    <div className="card mb-4">
      {image && (
        <img className="card-img-top" src={image} alt="bike" />
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text.substring(0, 255)}...</p>
        <NavLink className="btn btn-primary" to={`/post/${_id}`}>
          Read More &rarr;
        </NavLink>
      </div>
      <div className="card-footer text-muted">
        Posted on {new Date(parseInt(timestamp, 16) * 1000).toLocaleString()} by
        <NavLink to={`/author/${authors[author]._id}`}> {(authors[author] || {}).login || author}</NavLink>
      </div>
    </div>
  );
};
