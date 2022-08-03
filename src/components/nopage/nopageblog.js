import styled from "styled-components";

const Container = styled.div`
  padding-top: 60px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

const BlogNoPage = () => {
  return (
    <Container>
      <Title>Sorry, Blog page have not been loaded yet</Title>
    </Container>
  );
};

export default BlogNoPage;
