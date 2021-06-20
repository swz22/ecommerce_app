import React from "react";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <h1>Premium Products on Sale!</h1>
      <div>
        <ProductList />
        {/* <ProductDetails/> */}
      </div>
    </div>
  );
};

export default Home;
