import React from "react";
import { Card } from "Components/card";
import Container from "Components/container";
import Pagination from "Components/pagination";

const Main = ({ posts, match, count, ...rest }) => (
  <Container>
    <h1 className="my-4">Fullstack JS example</h1>

    {posts.map(post => (
      <Card key={post._id} {...post} {...rest} />
    ))}

    <Pagination current={match.params.page} count={count} />
  </Container>
);

export default Main;
