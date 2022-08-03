import styled from 'styled-components'

const Container = styled.div`
  background: rgb(121, 180, 183);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 40;
`

const Paragraph = styled.p`
    
`

const Announcement = () => {
  return(
    <>
      <Container>
        <Paragraph>Lang: ENG</Paragraph>
      </Container>
    </>
  )
}

export default Announcement;