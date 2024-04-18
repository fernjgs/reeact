import { Container, Content, Overlay } from "./Triviapop.styles";

const Poptriv = ({ visible }) => (
  <Container visible={visible}>
    <Overlay />
    <Content>
      Enhorabuena!
    </Content>
  </Container>
);


export default Poptriv;
