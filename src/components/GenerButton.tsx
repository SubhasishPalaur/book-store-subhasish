import styled from "styled-components";
import arrow from "../assets/Next.svg"
import { useNavigate } from "react-router-dom";

interface Details {
    logo: string; // URL of the logo image
    name: string; // Name to display on the button
  }

  interface GenerButtonProps {
    details: Details; // Use the Details interface
  }

export function GenerButton({ details }: GenerButtonProps) {
  console.log(details);
  const navigate = useNavigate()
  const navigateToBooks = () => {
    navigate(`/books/${details.name}`)
  }

  return (
    <ButtonContainer onClick={()=>navigateToBooks()}>
      <img src={details.logo} alt="Button Icon" style={{ width: '24px', height: '24px' }} />
      <ButtonText>{details.name}</ButtonText>
      <Arrow><img src={arrow} alt="next" style={{height: '16px', width: '16px'}}/></Arrow> {/* You can replace this with an actual arrow icon if needed */}
    </ButtonContainer>
  );
}

  const ButtonContainer = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 14% 76% 10%;
  align-items: center;
  padding: 10px 10px;
  background-color:white; 
  color: #A0A0A0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
`;

const ButtonText = styled.span`
  text-align: left
`;

const Arrow = styled.span`
  display: flex; 
  align-items: center; 
  transition: transform 0.3s; /* Transition for the arrow movement */

  ${ButtonContainer}:hover & {
    transform: translateX(4px); /* Move the arrow 2px to the right on hover */
  }
`;

