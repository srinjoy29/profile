import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, SeeMoreButton } from './ProductsStyle';
import FeatureProdCards from '../Cards/FeatureProdCards';
import { products } from '../../data/constants';

const Products = () => {
  const [toggle, setToggle] = useState('all');
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredProducts = toggle === 'all'
    ? products
    : products.filter((item) => item.category === toggle);

  const handleSeeMore = () => {
    navigate('/products'); // Redirect to /products for more products
  };

  const handleCardClick = (product) => {
    navigate(`/products`, { state: { product } }); // Redirect to product page with product id and details
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
          <ToggleButton 
            active={toggle === 'all'} 
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          
          {/* Toggle button for 'DSA' */}
          <ToggleButton 
            active={toggle === 'dsa'} 
            onClick={() => setToggle('dsa')}
          >
            DSA
          </ToggleButton>
          <Divider />
          
          {/* Toggle button for 'Development' */}
          <ToggleButton 
            active={toggle === 'development'} 
            onClick={() => setToggle('development')}
          >
            Development
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {/* Display up to 3 Products */}
          {filteredProducts.slice(0, 3).map((product) => (
            <FeatureProdCards 
              key={product.id} 
              product={product} 
              onClick={() => handleCardClick(product)} // Pass click handler
            />
          ))}
        </CardContainer>

        {/* "See More" button to redirect to /products */}
        <SeeMoreButton onClick={handleSeeMore}>See More Products</SeeMoreButton>
      </Wrapper>
    </Container>
  );
};

export default Products;
