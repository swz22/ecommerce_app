import React, { Component, useState, useEffect } from "react";
import { fetchProductById, fetchProducts } from "../api";
// import styled from 'styled-components'

const ProductList = (props) => {
  const [productList, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.error("An error occured: " + err));
  }, [props]);

  const buildProduct = (product) => {
    return (
      <div>
        <img class="productImage" src={product.image} style={{ height: 200, width: 200 }} />
          <p>{product.title}</p>
          <p>{`$${product.price}`}</p>
          <button>View Details</button>
          <p></p>
      </div>
    );
  };

  return (
    <div>
      {productList.map((product) => {
        return buildProduct(product);
      })}
    </div>
  );
};

export default ProductList;
