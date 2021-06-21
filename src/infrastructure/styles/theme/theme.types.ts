export type Color =
  | 'disabled'
  | 'textColor'
  | 'primaryColor'
  | 'textOnDisabled'
  | 'primaryBackground'
  | 'secondaryBackground';

export interface Theme {
  color: { [key in Color]: string };
}
