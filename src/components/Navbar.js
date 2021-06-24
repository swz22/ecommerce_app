import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <NavItem href="/" className="navbar-item"> Home </NavItem>
      <NavItem href="/cart" className="navbar-item"> Cart </NavItem>
      <NavItem href="/checkout" className="navbar-item"> Checkout </NavItem>
    </Nav>
  );
}

const Nav = styled.section`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: inherit;
  text-decoration: inherit;
  text-transform: uppercase;
  outline: none;
  font-family: system-ui;
`;

export default Navbar;
