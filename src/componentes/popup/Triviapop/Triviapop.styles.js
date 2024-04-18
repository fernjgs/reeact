import styled from 'styled-components';

export const Container = styled.div`
display: ${({ visible }) => visible ? 'block' : 'none'};
 justify-content: center;
 align-items: center;
position: fixed;
width: 100%;
height: 100vh;
`;

export const Overlay = styled.div`
background-color: black;
position: fixed;
width: 100%;
height: 100vh;
left: 0;
top: 0;
`;

export const Content = styled.div` 
max-width: 600px;
background-color: white;
position: relative;
z-index: 10;
`;
