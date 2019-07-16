import React from "react";
import Container from "Components/container";
import {NavLink} from "react-router-dom";

const Post = ({ post = {}, author = {} }) => (
  <Container>
    <div className="blog-post my-5">
      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-post-meta">
        {new Date(post.createdAt).toLocaleString()} by{" "}
        <NavLink to={`/author/${author._id}`}>{author.login}</NavLink>
      </p>
      {post.image && (
        <img className="card-img-top" src={post.image} alt="bike" />
      )}
      <p>{post.text}</p>
      <p>{post.tags}</p>
    </div>
  </Container>
);

export default Post;
