import styled from "styled-components";
import MenProducts from "../../components/menproduct/menproducts";
import FemaleProducts from "../../components/femaleproduct/femaleproducts";
import SaleProducts from "../../components/saleproducts/saleproducts";
import NewProducts from "../../components/newproduct/newproducts";
import Footer from "../../components/footer/footer";
import { BlockLoading, NineCellLoading } from "react-loadingg";
import { useState, useEffect } from "react";

const Container = styled.div`
  padding-top: 60px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

const Label = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-left: 2rem;
  text-decoration: underline;
`;

const Product = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  const Loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    Loading();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader>
          <BlockLoading color="#000" />
        </Loader>
      ) : (
        <Container>
          <Title>Products</Title>
          <Product>
            <Label id="men">For Men</Label>
            <MenProducts />
          </Product>
          <Product>
            <Label>For Woman</Label>
            <FemaleProducts />
          </Product>
          <Product>
            <Label>On Sale</Label>
            <SaleProducts />
          </Product>
          <Product>
            <Label>New Arrivals</Label>
            <NewProducts />
          </Product>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Products;
