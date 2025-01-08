import styled from 'styled-components'; 

export const Heading = styled.h1` 
    text-align: center; 
    color: green; 

    @media (max-width: 480px) {
        font-size: 1.5rem; /* Adjust font size for smaller screens */
    }
`; 

export const Content = styled.div` 
    overflow-y: scroll; 
    height: 2500px; 
`; 

export const Button = styled.div` 
    position: fixed; 
    width: 100%; 
    left: 95%; 
    bottom: 40px; 
    height: 60px; 
    font-size: 1.8rem; 
    z-index: 1; 
    cursor: pointer; 
    color: #4c88dc; 

    @media (max-width: 480px) {
        left: 84%;
        bottom: 20%;
    }
    @media (max-width: 834px) {
        left: 84%;
        bottom: 20%;
    }
`;

