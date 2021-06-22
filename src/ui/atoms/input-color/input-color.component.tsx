import S from './input-color.styles';
import { InputColorProps } from './input-color.types';

export const InputColor = (inputProps: InputColorProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledInput {...inputProps} type="color" />
  </S.StyledWrapper>
);
