import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import {React, useState} from 'react'
import styled from 'styled-components';
const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
`;

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position:absolute;
   top: 0;
   bottom: 0;
   left: ${props=> props.direction === "left" && "10px"};
   right: ${props=> props.direction === "right" && "10px"};
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
   margin: auto;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * - 100}vw);
    transition: all 1.5s ease;

`;


const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #{props=> props.bg};
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
     flex: 1;
     padding: 50px;

`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {

    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    }
    else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }

  };
  return (
    <Container>
        <Arrow direction= "left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>

        <Slide bg= "f5fafd">
        <ImageContainer>
            <Image src = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
        </ImageContainer>
        <InfoContainer>
        <Title>Lorem, ipsum.</Title>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing.</Desc>
        <Button>SHOP NOW!</Button>
        </InfoContainer>
        </Slide>

        <Slide bg= "fcf1ed">
        <ImageContainer>
            <Image src = "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>
        </ImageContainer>
        <InfoContainer>
        <Title>Lorem, ipsum dolor.</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!</Desc>
        <Button>SHOP NOW!</Button>
        </InfoContainer>
        </Slide>



        <Slide bg= "fbf0f4">
        <ImageContainer>
            <Image src = "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        </ImageContainer>
        <InfoContainer>
        <Title>Lorem ipsum dolor sit.</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, rem.</Desc>
        <Button>SHOP NOW!</Button>
        </InfoContainer>
        </Slide>

        </Wrapper>

        <Arrow direction= "right" onClick={()=> handleClick("left")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
      
    
  )
}

export default Slider
