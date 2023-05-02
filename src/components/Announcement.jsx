import styled from 'styled-components';
const Container = styled.div`
    height: 30px;
    background-color: #068824;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    
`;
const Announcement = () => {
  return (
   <Container>
    Super Deal! Free Shipping on orders over $50.
   </Container> 
  )
}

export default Announcement
