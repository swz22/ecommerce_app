import React from 'react'
import { CartContext } from '../contexts/CartContext';
import Cart from "./Cart"
import Test from './Test'


const CartPage = () => {
    const database = [
      { name: 'red tshirt', price: 10.99, id: 1 },
      { name: 'yellow hoodie', price: 24.99, id: 2 },
      { name: 'blue polo', price: 18.99, id: 3 },
      { name: 'green polo', price: 18.99, id: 3 }
    ];
  
    return (
      <div>
          <Cart/>
        {database.map(item => (
          <Test name={item.name} price={item.price} key={item.id} />
        ))}
      </div>
    );
  };

  export default CartPage
  