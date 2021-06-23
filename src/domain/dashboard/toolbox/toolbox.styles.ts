import styled from 'styled-components';
import { cover, padding } from 'polished';

import { BigHeading } from '@ui';
import { spacing, CANVAS_WIDTH_SCALE } from '@infrastructure';

const tooltipWidth = 100 * (1 - CANVAS_WIDTH_SCALE);

const StyledWrapper = styled.div`
  ${cover()}
  ${padding(spacing.medium)}

  left: unset;
  position: fixed;
  box-sizing: border-box;
  width: ${tooltipWidth}%;
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
