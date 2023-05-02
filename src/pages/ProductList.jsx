import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FilterText = styled.span`
    font-weight: 900;
    font-size: 15px;
    margin-right: 20px;
`;

const Filter = styled.div`
    margin: 20px;
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
`;

const Option = styled.option`

`;
const ProductList = () => {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    
    <Title>Shopping List</Title>
    <FilterContainer>
        <Filter><FilterText>Filter Products</FilterText>
        <Select>
            <Option disable selected>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
        </Select>
        <Select>
            <Option disable selected>Sizes</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products</FilterText>

        <Select>
            <Option disable selected>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
            <Option>Color</Option>
        </Select>


        </Filter>
    </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default ProductList
