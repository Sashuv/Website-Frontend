import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255, 255,0.5),rgba(255,255, 255,0.5) ), url("https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")center;
    width: 100vw;
    height: 100vh;

    `;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #00802d;
    color: white;
    cursor: pointer;
`;
const Register = () => {
  return (
   <Container>
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, necessitatibus?<b>Privacy Policy</b></Agreement>
            <Button>Create Account</Button>
        </Form>
    </Wrapper>
   </Container>
  )
}

export default Register
