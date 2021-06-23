import { cover } from 'polished';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  ${cover()}

  z-index: 10;
`;

const S = {
  StyledCanvas,
};

export default S;
