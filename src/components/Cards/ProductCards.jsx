import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.primaryDark};
    }
`;

const Card = styled.div`
    width: 330px;
    height: auto;
    background-color: ${({ theme }) => theme.card};
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    }
`;
const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0;
`;

const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
`;

const ProductCards = ({ product, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({state: true, product: product})}>
            <Image src={product.image} alt={product.name} />
            <Tags>
                {product.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{product.name}</Title>
                <Description>{product.description}</Description>
                
            </Details>
        </Card>
    );
};

export default ProductCards;
