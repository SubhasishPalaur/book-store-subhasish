import React from "react";
import styled from "styled-components";

// Styled components specific to the Card component
const CardContainer = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

const CardImage = styled.img`
//   width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardAuthor = styled.p`
  font-size: 0.9rem;
  font-family: Montserrat; 
  color: #777;
`;

// Card component props interface
interface CardProps {
  title: string;
  authors: { name: string }; 
  formats: { 'image/jpeg': string };
}

const Card: React.FC<CardProps> = ({ title, authors, formats }) => {
  return (
    <CardContainer>
      <CardImage src={formats['image/jpeg']} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardAuthor>{authors && authors['name']}</CardAuthor>
    </CardContainer>
  );
};

export default Card;
