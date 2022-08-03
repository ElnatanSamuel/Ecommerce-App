import styled from "styled-components";

const Container = styled.div`
	display; flex;
	flex-direction: column;
	
	align-items: center;
	background:rgb(121, 180, 183);
	height: 300px;
`;

const Title = styled.p`
  padding-top: 2rem;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: #000;
`;

const Para = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

const Signup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  height: 30px;
  outline: none;
  font-weight: 700;
`;

const Button = styled.button`
  padding: 1.1rem;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;

const Newspaper = () => {
  return (
    <Container>
      <Title>Join the Community</Title>
      <Para>Subscribe to our latest newspaper</Para>
      <Signup>
        <Input type="email" placeholder="Email" />
        <Button>Signup</Button>
      </Signup>
    </Container>
  );
};

export default Newspaper;
