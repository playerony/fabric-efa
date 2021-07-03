import { BigHeading, CenterBlock } from '@ui';

import { ErrorProps } from './error.types';

export const Error = ({ code }: ErrorProps): JSX.Element => (
  <CenterBlock>
    <BigHeading>{code}</BigHeading>
  </CenterBlock>
);
