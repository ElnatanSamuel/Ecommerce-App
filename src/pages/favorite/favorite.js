import styled from "styled-components";
import { useStateValue } from "../../StateProvider";
import FavoriteItem from "../../components/favoriteitem/favoriteitem";

const Container = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
`;

const Title = styled.p`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

const Favorite = () => {
  const [{ favorite }] = useStateValue();
  return (
    <Container>
      <Title>Your Favorites</Title>
      {favorite.map((item) => (
        <FavoriteItem
          id={item.id}
          price={item.price}
          image={item.image}
          name={item.name}
        />
      ))}
    </Container>
  );
};

export default Favorite;
