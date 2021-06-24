import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  // const totalPrice = (cart === undefined ? 0 : cart.reduce((acc, curr) => acc + curr.price, 0));

  const refreshPage = () => {
    window.location.reload();
  };

  const removeFromCart = (index) => {
    let tempCart = cart;
    tempCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    setCart(tempCart);
    refreshPage();
  };

  const buildProduct = (product, index) => {
    return (
      <div>
        <img src={product.image} alt="Pic" style={{ height: 90, width: 90, display: "block", margin: "auto" }} />
        <div style={{ textAlign: "center" }}>
          <p>{product.name}</p>
          <span style={{ fontSize: "1.5em" }}> {`$${product.price}`} </span>
          <CoolButton onClick={() => removeFromCart(index)}>
            Remove From Cart
          </CoolButton>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Heading> Shopping Cart </Heading>
      <Container>
        {cart === undefined ? ( <div></div> ) : (
          cart.map((product, index) => {
            return buildProduct(product, index);
          })
        )}
      </Container>
      <div style={{display: 'flex', justifyContent: 'center', marginTop:'40px'}}>
      <Link to={`/products`}>
        <CoolButton2> Back </CoolButton2>
      </Link>
      </div>
    </div>
  );
};

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 40px;
  margin-right: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const CoolButton = styled.button`
  padding: 0.3em 0.5em;
  border-radius: 0.4em;
  color: white;
  background-color: #3369ff;
  margin-top: 10px;
  margin-bottom: 4px;
  font-size: 15px;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }
`;

const CoolButton2 = styled.button`
  padding: 0.3em 0.5em;
  border-radius: 0.4em;
  color: white;
  background-color: #3369ff;
  margin-top: 5px;
  margin-bottom: 4px;
  font-size: 20px;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }
`;

export default Cart;
