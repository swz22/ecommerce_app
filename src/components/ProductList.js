import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { fetchProductById, fetchProducts } from "../api";
import ProductDetails from "./ProductDetails"
import styled from 'styled-components'

const ProductList = (props) => {
  const [productId, setProductId] = useState("");
  const [productList, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.error("An error occured: " + err));
  }, [props]);

  function viewProduct(productId) {
    setProductId(productId)
  }

  const buildProduct = (product) => {
    return (
      <div>
        <img class="productImage" src={product.image} style={{ height: 190, width: 190 }} />
          <p>{product.title}</p>
          <p>{`$${product.price}`}</p>
          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
          <p></p>
      </div>
    );
  };

  return (
    <Container>
      {productId === "" ?  productList.map((product) => {
        return buildProduct(product);
      }) : <ProductDetails setProductId={setProductId} productId = {productId} />
    }
    </Container>
  );
};

const Container = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 40px;
`

export default ProductList;