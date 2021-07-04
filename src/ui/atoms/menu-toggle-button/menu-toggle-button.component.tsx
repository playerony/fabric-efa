import S from './menu-toggle-button.styles';

import { MenuToggleButtonProps } from './menu-toggle-button.types';

export const MenuToggleButton = ({
  onClick,
  isActive,
  className,
}: MenuToggleButtonProps): JSX.Element => (
  <S.StyledWrapper onClick={onClick} className={className}>
    <S.StyledCenterLine isActive={isActive} />
  </S.StyledWrapper>
);
