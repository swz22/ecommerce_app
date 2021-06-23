import React, { useContext } from 'react';
import {CartContext} from '../contexts/CartContext';

const Test = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const tshirt = { name: props.name, price: props.price };
        setCart(currentState => [...currentState, tshirt]);
      }

    return (
        <div>
            HELLO!
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Test
