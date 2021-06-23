import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage"
import Checkout from "./components/Checkout"
import {CartProvider} from "./contexts/CartContext"
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <Switch>
        <CartProvider>
        <Wrapper>
        <Header />
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={Checkout} />
        </Wrapper>
        </CartProvider>
      </Switch>
    </Router>
    
  );
};

const Wrapper = styled.div`
font-family: system-ui;
`


export default App;