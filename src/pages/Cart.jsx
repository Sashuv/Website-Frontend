import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {Add, Remove} from '@material-ui/icons';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';


const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color:${(props) => props.type === "filled" ? "black": "transparent"};
    color: ${(props) => props.type === "filled" && "white"};

`;

const TopTexts = styled.div`
   
`;

const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`

const Info = styled.div`
    flex: 3;
    justify-content: space-between;
`;


const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
    
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer= styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 20px;
`;
const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height:1px;
`;


const SummaryTitle= styled.h1`
    font-weight: 150;
`;
const SummaryItem= styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};

`;
const SummaryItemText= styled.span`
    
`;
const SummaryItemPrice= styled.span`
    
`;
const Button= styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;



const Cart = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <Title>Dress</Title>
    <Top>
    <TopButton>Continue Shopping</TopButton>
    <TopTexts>
    <TopText>Shopping Bag(2)</TopText>
    <TopText>Your Wishlist(0)</TopText>
    </TopTexts>
    <TopButton type = "filled">Checkout Now</TopButton>
    </Top>
    <Bottom>
    <Info>
        <Product>
            <ProductDetail>
                <Image src = "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80"/>
                <Details>
                <ProductName><b>Product:</b> Awesome Jeans</ProductName>
                    <ProductId><b>ID:</b> 9002802840</ProductId>
                    <ProductColor color= "black"/>
                    <ProductSize><b>Size:</b> XL</ProductSize>
                </Details>
                    
            </ProductDetail>
            <PriceDetail>

                <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>

                </ProductAmountContainer>
                <ProductPrice>$ 300</ProductPrice>

            </PriceDetail>
        </Product>
        <Hr/>
        <Product>
            <ProductDetail>
                <Image src = "https://np-live-21.slatic.net/kf/Sf116a0677d7e4d488d8bedc6190c0aa0D.jpg"/>
                <Details>
                <ProductName><b>Product:</b> Awesome Jeans</ProductName>
                    <ProductId><b>ID:</b> 9002802840</ProductId>
                    <ProductColor color= "gray"/>
                    <ProductSize><b>Size:</b> XL</ProductSize>
                </Details>
                    
            </ProductDetail>
            <PriceDetail>

                <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>

                </ProductAmountContainer>
                <ProductPrice>$ 300</ProductPrice>

            </PriceDetail>
        </Product>
    </Info>
    <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
            <SummaryItemText>Subtext</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 4.89</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Shipping Discound</SummaryItemText>
            <SummaryItemPrice>- $ 5.60</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type = "total">
            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>$ 90</SummaryItemPrice>
        </SummaryItem>
        <Button>CHECKOUT NOW! </Button>
    </Summary>


    </Bottom>
    </Wrapper>
    
    <Footer/>

    </Container>
  )
}

export default Cart
