import React from "react";
import Header from "./Header"
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Cart from "./Cart"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <h1>Premium Products on Sale!</h1>
//       <div>
//         <ProductList />
//         <ProductDetails/>
//       </div>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <Router>
      <Switch>
        <div>
        <Header />
          <h1>Premium Products on Sale!</h1>
          <div className="container">
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            {/* <ProductDetails/> */}
            {/* <ProductList /> */}
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default Home;
