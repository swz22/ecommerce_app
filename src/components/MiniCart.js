import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styled from "styled-components";

const MiniCart = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

  return (
    <Container>
      <span style={{ marginRight: "1.5em" }}> Items in Cart: {cart.length} </span>
      <span style={{ marginRight: "2em" }}> Total Price: {`$${numberWithCommas(totalPrice.toFixed(2))}`} </span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40 px;
  font-size: 15px;
  color: blue;
`;

export default MiniCart;
