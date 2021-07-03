import { size, cover } from 'polished';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  ${cover()}
  ${size('100vh', '100vw')}

  z-index: 20;
  position: fixed;
`;

const S = {
  StyledWrapper,
};

export default S;
