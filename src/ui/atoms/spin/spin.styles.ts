import { size } from 'polished';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  ${size(40, 40)}

  display: flex;
  position: static;
  align-items: center;
`;

const StyledRectangle = styled.div`
  ${size(4, 40)}

  animation: rotating 1s ease infinite;
  background-color: ${({ theme }) => theme.color.primaryColor};

  @keyframes rotating {
    0% {
      transform: rotate(0deg) scaleY(1);
    }
    50% {
      transform: rotate(180deg) scaleY(10);
    }
    100% {
      transform: rotate(360deg) scaleY(1);
    }
  }
`;

const S = {
  StyledWrapper,
  StyledRectangle,
};

export default S;
