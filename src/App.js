import React from "react";
import Header from "./components/Header"
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";


const App = () => {
  return (
    <Router>
      <Switch>
        <Wrapper>
        <Header />
        <News>
          <h1 style={{fontSize:25}}>4TH OF JULY SALE!</h1>
          <h3>FREE SHIPPING ON PURCHASES OVER $50!</h3>
          </News>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
        </Wrapper>
      </Switch>
    </Router>
  );
};

const Wrapper = styled.div`
font-family: system-ui;
`

const News = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default App;