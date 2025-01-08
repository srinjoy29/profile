import React, { useState } from 'react';
import Products from '../components/Products'; // Assuming you have a Products component
import Footer from '../components/Footer';
import styled from "styled-components";
import ProductDetails from '../components/ProductDetails';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const Store = ({ openModal, setOpenModal }) => {
  return (
    
    <Body>
   
        {/* Pass the modal props to Products component */}
        <Products openModal={openModal} setOpenModal={setOpenModal} />
      
      <Footer/>
      {/* Conditionally render ProductDetails modal if openModal.state is true */}
      {openModal.state && (
        <ProductDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Body>
    
  );
};

export default Store;
