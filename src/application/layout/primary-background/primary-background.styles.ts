import styled from 'styled-components';

const StyledPrimaryBackground = styled.div`
  width: 100vw;
  height: 100vh;
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
