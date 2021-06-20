import React, { Component, useState, useEffect } from "react";
import { fetchProductById, fetchProducts } from "../api";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});


  useEffect(() => {
    fetchProductById(id) 
      .then((res) =>
        setProduct({
            id: res.id,
            title: res.title,
            price: res.price,
            description: res.description,
            category: res.category,
            image: res.image,
          },
        ))
      .catch((err) => console.error("An error occured: " + err));
  });

  return (
    <div>
      <img src={product.image} style={{ height: 200, width: 200 }} />
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <Link to={`/products`}>
            Back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;