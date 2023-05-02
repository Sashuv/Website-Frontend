import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex:1;
    `;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 200;
`;
const Price = styled.span`
    font-weight: 400;
    /* color: green; */
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.span`
    display: flex;
    align-items: center;
    
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
   
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
    
`;

const FilterSize = styled.select`
    margin-left:20px;
    padding: 5px;

`;

const FilterSizeOption = styled.option`    
`;
const AddContainer = styled.div` 
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`; 
const AmountContainer = styled.div` 
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`  
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin: 0px 5px;
`;
const Button = styled.button`    
    padding: 15px;
    border: 2px solid green;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }


`;


 


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src= "https://np-live-21.slatic.net/kf/Sf116a0677d7e4d488d8bedc6190c0aa0D.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Baltra Beard Trimmer</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima illum dolorem deleniti voluptate, harum pariatur recusandae et obcaecati sunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos vero expedita dolorum ex ipsa quam, laborum distinctio a quia perspiciatis voluptate dicta dolorem quis voluptatum eius illo exercitationem, pariatur sint.</Desc>
            <Price> $ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color = "black"/>
                    <FilterColor color = "darkblue"/>
                    <FilterColor color = "gray"/>
        
                </Filter>

                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>XS</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>

           <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to cart</Button>
            </AddContainer>
 
            </InfoContainer>


        </Wrapper>









        <Newsletter/>
        <Footer/>
        
    </Container>
  )
}

export default Product
