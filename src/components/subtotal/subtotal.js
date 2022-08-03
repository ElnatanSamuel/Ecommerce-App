import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Container = styled.div`
  margin: 0rem 2rem;
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Para = styled.p`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

const Item = styled.p`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

const Price = styled.p`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #000;
  color: #fff;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const Button2 = styled.button`
  padding: 10px 15px;
  background: red;
  color: #fff;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <Description>
            <Info>
              <Para>No of items: </Para>
              <Item>{basket.length}</Item>
            </Info>
            <Info>
              <Para>SubTotal: </Para>
              <Price>{value}</Price>
            </Info>
          </Description>
        )}
        decimalScale={3}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button>Checkout</Button>
    </Container>
  );
};

export default SubTotal;
