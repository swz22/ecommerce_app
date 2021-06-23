import React from "react";
import styled from "styled-components";
import Cart from "./Cart";

const Checkout = () => {
  return (
    <div>
      <Cart/>
    <form>
      <Container>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Shipping Address" />
        <input type="text" placeholder="Billing Address" />
        <input type="text" placeholder="Credit Card #" />
    
      <CoolButton type="submit">
        <b> Make Purchase </b>
      </CoolButton>
      </Container>
    </form>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: auto;
  margin-top: 125px;
`;
const CoolButton = styled.button`
   padding: 0.1em 0.4em;
   border-radius: 0.4em;
   color: white;
   background-color: #3369ff;
   width: 50%;
   margin: auto;
   margin-top: 15px;
`;

export default Checkout;
