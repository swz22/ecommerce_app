import { useContext } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import MiniCart from "./MiniCart";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const ClearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div>
      <Heading> C H E C K O U T </Heading>
      <Cart />
      <Summary>
        <span> Items in Cart: {cart.length} </span>
        <span> Total Price: {`$${totalPrice}`} </span>
      </Summary>

      <form> 
        <Container>
          <input type="text" placeholder="Full Name" style={{padding:'7px', width: '340px'}}/>
          <input type="text" placeholder="Shipping Address" style={{padding:'7px', width: '340px'}} />
          <input type="text" placeholder="Billing Address" style={{padding:'7px', width: '340px'}} />
          <input type="text" placeholder="Credit Card #" style={{padding:'7px', width: '340px', marginBottom: '10px'}} />
          <CoolButton type="submit" onClick={ClearCart}>
            <b>Make Purchase</b>
          </CoolButton>
        </Container>
      </form>
    </div>
  );
};

const Heading = styled.h1`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: auto;
  margin-top: 25px;
`;

const CoolButton = styled.button`
  padding: 0.3em 0.5em;
  border-radius: 0.4em;
  color: white;
  background-color: #32A23A;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 18px;
  width: 40%;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  margin-top: 20px;
`;

export default Checkout;
