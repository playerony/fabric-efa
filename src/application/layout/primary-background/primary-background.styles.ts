import { size } from 'polished';
import styled from 'styled-components';

const StyledPrimaryBackground = styled.div`
  ${size('100vh', '100vw')}

  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.primaryBackground};
`;

const S = {
  StyledPrimaryBackground,
};

export default S;
