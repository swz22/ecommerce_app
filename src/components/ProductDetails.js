import { useState, useEffect, useContext } from "react";
import { fetchProductById } from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import styled from "styled-components";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    const item = {
      id: product.id,
      name: product.title,
      price: product.price,
      images: product.images,
    };
    let updatedCart = [...cart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  useEffect(() => {
    fetchProductById(id)
      .then((res) =>
        setProduct({
          id: res.id,
          title: res.title,
          price: res.price,
          description: res.description,
          category: res.category,
          images: res.images,
        })
      )
      .catch((err) => console.error("An error occured: " + err));
  });

  return (
    <div>
      <Container>
        <img src={product.images} alt="pic" style={{ height: 220, width: 200, marginBottom:'30px' }}/>
        <p>{product.title}</p>
        <p style={{ width: "35%" }}>{product.description}</p>
        <p style={{ fontSize: "24px" }}>{`$${product.price}`}</p>
        <ButtonContainer>
          <label htmlFor="quantity">Quantity:</label>
          <input id="quantity" type="number" name="quantity" min="1" placeholder="1" style={{ width: "20%", marginTop: '10px', marginBottom: '40px' }}/>
          <CoolButton onClick={() => addToCart(product)}> Add to Cart </CoolButton>
          <Link to={`/products`}>
            <CoolButton> Back </CoolButton>
          </Link>
        </ButtonContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoolButton = styled.button`
  padding: 0.1em 0.4em;
  border-radius: 0.4em;
  color: white;
  background-color: #3369ff;
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }
`;

export default ProductDetails;
