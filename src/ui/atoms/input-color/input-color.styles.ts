import styled from 'styled-components';

const StyledWrapper = styled.div``;

const StyledInput = styled.input`
  padding: 0;
  width: 3em;
  height: 2em;
  cursor: pointer;
  appearance: none;
  background: none;

  &::-webkit-color-swatch {
    border: none;
  }
`;

const S = {
  StyledWrapper,
  StyledInput,
};

export default S;
