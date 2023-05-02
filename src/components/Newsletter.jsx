
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;

`; 
const Title = styled.h1`

    font-size: 50px;
    margin-bottom: 20px;


`; 
const Desc = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;


`; 
const InputContainer = styled.div`

    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;




`; 
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`; 
const Button = styled.button`
    flex: 1;
    border:none;
    background-color: #1d6705;
    color: white;

`; 



const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.</Desc>
        <InputContainer>
        
        <Input placeholder='Your email address: '/>
        <Button>
            Send
        </Button>
        
        </InputContainer>
    </Container>
  )
}

export default Newsletter
