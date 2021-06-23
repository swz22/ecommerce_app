import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import styled from "styled-components";

const MiniCart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);


    console.log(cart) 

    return (
        <Container>
            <span style= {{marginRight:'1.25em'}}>Items in Cart: {cart.length}</span>
            <span style= {{marginRight:'1.25em'}}>Total Price: {totalPrice}</span>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 40  px;
font-size: 15px;
color: blue;
`

export default MiniCart