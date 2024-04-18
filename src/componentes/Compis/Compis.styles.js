import { styled, createGlobalStyle } from 'styled-components';

const styledComponents = {};

styledComponents.StyledDivWithFont = styled.div`
  padding: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: background-color 0.3s ease;

  
  @media (max-width: 768px) {
    background-color: red;
  }
  &:hover {
    background-color: yellow;
  }
`;

styledComponents.StyledDivWithProp = styled.div`
  padding: 20px;
  background-color: ${({ color }) => color || 'lightblue'};
  transition: background-color 1s ease;

  @media (max-width: 768px) {
    background-color: red;
  }
  
  &:hover {
    background-color: lightsalmon;
  }
`;



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
  
    

  }
`;


export { GlobalStyle, styledComponents };
