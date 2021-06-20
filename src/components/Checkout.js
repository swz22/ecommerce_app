import React from "react";
import styled from "styled-components";

const Checkout = () => {
  return (
    <form>
      <Container>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Shipping Address" />
        <input type="text" placeholder="Billing Address" />
        <input type="text" placeholder="Credit Card #" />
      </Container>

      <CoolButton type="submit">
        <b> Make Purchase </b>
      </CoolButton>
    </form>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;
const CoolButton = styled.button`
   padding: 0.1em 0.4em;
   border-radius: 0.4em;
   color: white;
   background-color: #3369ff;
`;

export default Checkout;
