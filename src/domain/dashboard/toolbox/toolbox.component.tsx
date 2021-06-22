import { ToolboxProps } from './toolbox.types';

import { BigHeading } from '@ui';

export const Toolbox = ({ canvas }: ToolboxProps): JSX.Element => {
  console.log(canvas);

  return <BigHeading>Toolbox</BigHeading>;
};
