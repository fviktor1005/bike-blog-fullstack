import React from "react";
import Widget from "./widget";
import Categories from "Components/categories";
import Search from "Components/search";

const Container = props => (
  <main className="container">
    <div className="row">
      <div className="col-8">{props.children}</div>

      <div className="col-4">
        <Search />
        <Categories />
        <Widget />
      </div>
    </div>
  </main>
);

export default Container;
