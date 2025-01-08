import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, SeeMoreButton } from './ProductsStyle';
import ProductCard from '../Cards/ProductCards';
import { products } from '../../data/constants';

const Products = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredProducts = toggle === 'all'
    ? products
    : products.filter((item) => item.category === toggle);

  const handleSeeMore = () => {
    navigate('/products'); // Redirect to /products for more products
  };

  return (
    <Container id="products">
      <Wrapper>
        <Title>Featured Materials</Title>
        <Desc>
        Comprehensive resources to help you prepare for technical interviews, including coding problems, system design concepts, and behavioral questions. Tailored for roles in software engineering and full-stack development.
        </Desc>
        <ToggleButtonGroup>
          {/* Toggle button for 'All' */}
          {toggle === 'all' ? 
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton> 
            : 
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          
          {/* Toggle button for 'DSA' */}
          {toggle === 'dsa' ? 
            <ToggleButton active value="dsa" onClick={() => setToggle('dsa')}>DSA</ToggleButton>
            : 
            <ToggleButton value="dsa" onClick={() => setToggle('dsa')}>DSA</ToggleButton>
          }
          <Divider />
          
          {/* Toggle button for 'Development' */}
          {toggle === 'development' ? 
            <ToggleButton active value="development" onClick={() => setToggle('development')}>Development</ToggleButton> 
            : 
            <ToggleButton value="development" onClick={() => setToggle('development')}>Development</ToggleButton>
          }
        </ToggleButtonGroup>

        <CardContainer>
          {/* Display up to 3 Products */}
          {filteredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>

        {/* "See More" button to redirect to /products */}
        <SeeMoreButton onClick={handleSeeMore}>See More Products</SeeMoreButton>
      </Wrapper>
    </Container>
  );
};

export default Products;
