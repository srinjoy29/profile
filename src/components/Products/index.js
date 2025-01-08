import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, SeeMoreButton } from './ProductsStyle';
import ProductCard from '../Cards/ProductCards'; // Use ProductCard instead of ProjectCard
import { products } from '../../data/constants';

const Products = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6); // State to control the number of visible products

  const handleSeeMore = () => {
    setVisibleCount(visibleCount + 6); // Increase the count by 6 on "See More"
  };

  const filteredProducts = toggle === 'all'
    ? products
    : products.filter((item) => item.category === toggle);

  return (
    <Container id="products">
      <Wrapper>
        <Title>Products</Title>
        <Desc>
          I have worked on a wide range of Products. From web apps to DSA and Development. Here are some of my Products.
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
          {/* Display Products based on selected category */}
          {filteredProducts
            .slice(0, visibleCount) // Limit the number of products displayed
            .map((product) => (
              <ProductCard key={product.id} product={product} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>

        {/* Show "See More" button if there are more products to display */}
        {visibleCount < filteredProducts.length && (
          <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Products;
