import styled from 'styled-components';

export const Back = styled.div`
    background: rgba(28, 70, 73, 0.5);
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    position:fixed;
    top:0;
    left:0;

    div{
        background-color: #1dce3bdf;

    width: 600px;
    height:600px;
    }
`