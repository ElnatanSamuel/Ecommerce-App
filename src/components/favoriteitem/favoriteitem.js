import styled from "styled-components";
import { useStateValue } from "../../StateProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

const FavoriteItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  object-fit: content;
  margin-right: 4rem;
  flex: 1;
  width: 250px;
  height: 250px;
`;

const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
`;

const Name = styled.p`
  margin-bottom: 2rem;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 10px;
  flex: 1;
  background: red;
  border: none;
  font-size: 14px;
  font-weight: 700;
  margin-left: 4rem;
  margin-right: 2rem;
	cursor: pointer;

`;

const FavoriteItem = ({ id, image, price, name }) => {
  const [{ favorite }, dispatch] = useStateValue();
  const removeFromFav = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      id: id,
    });
  };
  return (
    <Container>
      <FavoriteItems>
        <Item>
          <Image src={image} />
          <Description>
            <Name>{name}</Name>
            <Price>$ {price}</Price>
          </Description>
          <Button onClick={removeFromFav}>Remove</Button>
        </Item>
      </FavoriteItems>
    </Container>
  );
};

export default FavoriteItem;
