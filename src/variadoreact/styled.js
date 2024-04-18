import styled from "styled-components";

export const Box = styled.div`
width: 100px;
height: 100px;
background-color: red;


background-color: ${(props) => props.color};
background-color: red;
margin: ${(props) => props.m}px;
span {
    font-weight: bold;
}

`;