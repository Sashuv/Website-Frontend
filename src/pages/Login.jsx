import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255, 255,0.5),rgba(255,255, 255,0.5) ), url("https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")center;
    background-size: cover;
    width: 100vw;
    height: 100vh;

    `;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 10px;
    
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #006c3b;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Sign In</Title>
        <Form>
            
            <Input placeholder="Username"/>  
            <Input placeholder="Password"/>

            <Button>Login</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE ACCOUNT</Link>


        </Form>
    </Wrapper>
   </Container>
  )
}

export default Login
