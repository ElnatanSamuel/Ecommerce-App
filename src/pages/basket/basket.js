import styled from "styled-components";
import BasketItems from "../../components/basketitems/basketitems";
import SubTotal from "../../components/subtotal/subtotal";
import { useStateValue } from "../../StateProvider";

const Container = styled.div`
  padding: 60px;
  display: flex;
  margin: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.p`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

const Left = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  background: rgba(0, 0, 0, 0.09);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Basket = () => {
  const [{ basket }] = useStateValue();
  return (
    <Container>
      <Left>
        <Title>Your Basket</Title>
        {basket.map((item) => (
          <BasketItems
            id={item.id}
            price={item.price}
            image={item.image}
            name={item.name}
          />
        ))}
      </Left>
      <Right>
        <Title>Sub Total</Title>
        <SubTotal />
      </Right>
    </Container>
  );
};

export default Basket;
