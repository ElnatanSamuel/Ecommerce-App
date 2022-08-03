import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Container2 = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 60px;
  background: #fff;
  display: flex;

  justify-content: center;
`;

const Lists2 = styled.ul`
  display: flex;
  flex-direction: column;
`;
const List2 = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4rem;
  cursor: pointer;
  text-align: center;
`;

const Menu = styled.div`
  display: none;
  margin-left: 1rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container2>
      <Lists2>
        <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/">
          <List2>HOME</List2>
        </Link>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/products"
        >
          <List2>PRODUCTS</List2>
        </Link>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/shop"
        >
          <List2>SHOP</List2>
        </Link>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/blog"
        >
          <List2>BLOG</List2>
        </Link>
      </Lists2>
    </Container2>
  );
};

export default MobileNav;
