import styled from 'styled-components';

export const P = styled.p`
background-color: ${({ highlighting }) => highlighting ? 'red' : 'transparent'};
`