import styled from 'styled-components';

import { typeScale, fontWeight, respondToMax } from '@infrastructure';

const StyledBigHeading = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.1;
  font-size: ${typeScale.h1};
  font-weight: ${fontWeight.bold};

  ${respondToMax.xmobile`
    font-size: ${typeScale.h3};
  `}
`;

const S = {
  StyledBigHeading,
};

export default S;
