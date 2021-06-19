import React from "react";
import Product from "./Product";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="wrapper">
        <h1>"Check Out These Awesome Products!"</h1>
        <div>
          <Product/>
          {/* <ProductList/> */}
        </div>
    </div>
  )
}

export default Home;
