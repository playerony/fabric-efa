export interface StyledCenterLineProps {
  isActive: boolean;
  className?: string;
}

export interface MenuToggleButtonProps extends StyledCenterLineProps {
  onClick: () => void;
}
