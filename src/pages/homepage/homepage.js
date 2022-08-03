import Slide from "../../components/slide/slider";
import Featured from "../../components/featured/featured";
import FeaturedProducts from "../../components/featuredproducts/featuredproducts";
import Newspaper from "../../components/newpaper/newpaper";
import Footer from "../../components/footer/footer";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 60px;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Slide />
        <Featured />
        <FeaturedProducts />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
