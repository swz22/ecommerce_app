import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import styled from "styled-components";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    console.log(cart) 

    return (
        <Container>
            <span style= {{marginRight:'1.25em'}}>Items in Cart: {cart.length}</span>
            <span style= {{marginRight:'1.25em'}}>Total Price: {totalPrice}</span>
            {cart.map(item => (<h6>{item.name} - {item.price}</h6>))}
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: csenter;
font-size: 15px;
color: blue;
`

export default Cart


