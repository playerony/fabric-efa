import { ButtonHTMLAttributes } from 'react';
import { ModifierNames } from 'styled-components-modifiers';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?: ModifierNames;
}
