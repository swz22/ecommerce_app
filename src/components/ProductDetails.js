import React, { useState, useEffect, useContext } from "react";
import { fetchProductById} from "../api";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import MiniCart from './MiniCart';
import {CartContext} from '../contexts/CartContext'
import styled from 'styled-components'

const ProductDetails = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const item = {name: props.name, price: props.price };
    setCart(currentState => [...currentState, item]); // destructuring all elements in array
  }


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
      <MiniCart/>
    <Container>
      <img src={product.image} alt="pic" style={{ height: 200, width: 200 }} />
        <p>{product.title}</p>
        <p style={{width: "40%"}}>{product.description}</p>
        <p style={{fontSize: "24px"}}>{`$${product.price}`}</p>
        <ButtonContainer>
        <label htmlFor="quantity">Quantity:</label>
        <input id="quantity" type="number" name="quantity" min="1" placeholder="1" style={{width:'25%'}}/>
        <CoolButton onClick={addToCart}> Add to Cart </CoolButton>
        <Link to={`/products`}> 
        <CoolButton> Back </CoolButton> 
        </Link>
        </ButtonContainer>
    </Container>
    </div>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5px;
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CoolButton = styled.button`
 padding: 0.1em 0.4em;
 border-radius: 0.4em;
 color: white;
 background-color: #3369ff;
 margin-top: 4px;
 margin-bottom: 4px;
`

export default ProductDetails;