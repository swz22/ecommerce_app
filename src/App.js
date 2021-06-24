import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import MiniCart from "./components/MiniCart";
import { CartContext } from "./contexts/CartContext";
import styled from "styled-components";
import Cart from "./components/Cart";

const App = () => {
  var storedCart = JSON.parse(localStorage.getItem("cart"));

  //if cart does not yet exist in local storage, set value of storedCart to an empty array
  if (!storedCart) {
    storedCart = [];
  }
  //use the storedCart value to set the intial value of cart to be used for my CartContext
  const [cart, setCart] = useState(storedCart);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Switch>
          <Wrapper>
            <Header />
            <MiniCart/>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Wrapper>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
};

const Wrapper = styled.div`
  font-family: system-ui;
`;

export default App;
