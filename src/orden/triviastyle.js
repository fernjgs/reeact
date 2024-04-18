import styled from 'styled-components'

export const Container = styled.div`
        width: 700px;
        margin: auto;
        font-size: 1.6rem;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    img{
        width: 75%;
    }
`;

export const Preguntas = styled.p`
    text-align: center;
`;
