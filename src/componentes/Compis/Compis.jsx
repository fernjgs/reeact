
import { GlobalStyle, styledComponents } from './Compis.styles';

const CompisConEstilos = () => {
  return (
    <>
      <GlobalStyle />
      <styledComponents.StyledDivWithFont>Styled fuente exclusiva</styledComponents.StyledDivWithFont>
      <styledComponents.StyledDivWithProp color="lightpink">Styled con prop</styledComponents.StyledDivWithProp>

    </>
  );
};

export default CompisConEstilos;
