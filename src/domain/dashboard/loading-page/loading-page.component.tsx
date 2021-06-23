import { Spin, CenterBlock } from '@ui';

import S from './loading-page.styles';

export const LoadingPage = () => (
  <S.StyledWrapper>
    <CenterBlock>
      <Spin />
    </CenterBlock>
  </S.StyledWrapper>
);
