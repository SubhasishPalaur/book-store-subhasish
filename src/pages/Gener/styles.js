import styled from "styled-components"
import pattern from "../../assets/Pattern"

export const HeaderPattern = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${pattern};
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

export const TitleText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
`;

