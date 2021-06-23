import { size } from 'polished';
import styled from 'styled-components';

const StyledCenterBlock = styled.div`
  ${size('100%', '100%')}

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const S = {
  StyledCenterBlock,
};

export default S;
