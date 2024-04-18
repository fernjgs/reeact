import styled, { css, createGlobalStyle } from 'styled-components';
import flechaa from '../workoutapp/fotos/flechaa.png'

export const Row = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
`;

export const PrinImg = styled.img`
    width: 100%;
`;
export const Img = styled.img`
    width: 90%;
    border-radius: 200px;
    ${({ active }) => active ? 'border: 4px solid yellow; z-index:1' : 'border:3px solid blue'}
`;




const Boton = css`
    display: inline-block;
    cursor: pointer;
    background-image: url(${flechaa});
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
`;

export const BotonIzq = styled.span`
    ${Boton}
    margin-right: 10px;
`;

export const BotonDer = styled.span`
    ${Boton}
    transform: rotate(180deg);
    margin-left: 10px;
`;

export const GlobalStyle = createGlobalStyle`
body{
display: flex;
align-items:center;
justify-content:center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


`;