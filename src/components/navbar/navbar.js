import styled from "styled-components";

import MobileNav from "./mobilenav";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

import { UilUserCircle } from "@iconscout/react-unicons";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 30;
  top: 0;
  background: #fff;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  margin-left: 1rem;
  flex: 1;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Logo2 = styled.h1`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
`;

const Lists = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const List = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const Icon = styled.div`
  margin-right: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    margin-right: 1rem;
  }
`;

const Count = styled.p`
  font-size: 12px;
  font-weight: 700;
  background: #000;
  border-radius: 100%;
  color: #fff;
  width: 18px;
  height: 18px;
  position: relative;
  top: -6px;
  left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  display: none;
  margin-left: 1rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

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
  margin-bottom: 2rem;
  cursor: pointer;
  text-align: center;
`;

const NavBar = () => {
  const [{ basket, favorite }] = useStateValue();
  const [isOpen, setOpen] = useState(false);

  const menuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <Container>
        <Menu>
          <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
        </Menu>

        <Logo>ES.</Logo>
        {isOpen ? (
          <Container2>
            <Lists2>
              <Logo2>ES.</Logo2>
              <Link
                style={{ textDecoration: "inherit", color: "inherit" }}
                to="/"
              >
                <List2 onClick={menuClick}>HOME</List2>
              </Link>
              <Link
                style={{ textDecoration: "inherit", color: "inherit" }}
                to="/products"
              >
                <List2 onClick={menuClick}>PRODUCTS</List2>
              </Link>
              <Link
                style={{ textDecoration: "inherit", color: "inherit" }}
                to="/shop"
              >
                <List2 onClick={menuClick}>SHOP</List2>
              </Link>
              <Link
                style={{ textDecoration: "inherit", color: "inherit" }}
                to="/blog"
              >
                <List2 onClick={menuClick}>BLOG</List2>
              </Link>
            </Lists2>
          </Container2>
        ) : null}
        <Lists>
          <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/">
            <List>HOME</List>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/products"
          >
            <List>PRODUCTS</List>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/shop"
          >
            <List>SHOP</List>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/blog"
          >
            {" "}
            <List>BLOG</List>
          </Link>
        </Lists>
        <Icons>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/favorites"
          >
            <Icon>
              <UilHeartAlt size="25" color="#000" />
              <Count>{favorite.length}</Count>
            </Icon>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/basket"
          >
            <Icon>
              <UilShoppingCart size="25" color="#000" />
              <Count>{basket.length}</Count>
            </Icon>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/signup"
          >
            <Icon>
              <UilUserCircle size="25" color="#000" />
            </Icon>
          </Link>
        </Icons>
      </Container>
    </>
  );
};

export default NavBar;
