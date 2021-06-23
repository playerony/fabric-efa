import styled from 'styled-components';
import { cover, padding } from 'polished';

import { BigHeading } from '@ui';
import { spacing } from '@infrastructure';

const StyledWrapper = styled.div`
  ${cover()}
  ${padding(spacing.medium)}

  width: 30%;
  left: unset;
  position: fixed;
  box-sizing: border-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;

const StyledHeading = styled(BigHeading)`
  ${padding(spacing.small, spacing.small, spacing.medium)}

  text-align: center;
`;

const StyledButtonsWrapper = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
`;

const S = {
  StyledWrapper,
  StyledHeading,
  StyledButtonsWrapper,
};

export default S;
