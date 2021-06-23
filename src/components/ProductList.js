import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api";
import ProductDetails from "./ProductDetails";
import MiniCart from "./MiniCart";
import styled from "styled-components";

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

  const buildProduct = (product) => {
    return (
      <div>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt="Pic" style={{ height: 200, width: 180, display:"block", margin:"auto" }} />
        </Link>
        <div style={{ textAlign:"center"}}>
          <p>{product.title}</p>
          <p style={{ fontSize:"1.5em"}}>{`$${product.price}`}</p>
        </div>
      </div>
    );
  };

  return (
  <div>
    <MiniCart/>
  
    <Container>
      {productId === "" ?  productList.map((product) => {
        return buildProduct(product);
      }) : <ProductDetails setProductId={setProductId} productId = {productId} />
    }
    </Container>
    </div>

  );
};


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin-right: 40px;
  margin-top: 20px;
`;

export default ProductList;
