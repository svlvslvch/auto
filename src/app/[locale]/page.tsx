import { NextPage } from 'next';

import MainContainer from '@components/MainContainer/MainContainer';
import CenterPageWrapper from '@components/Wrappers/CenterPageWrapper/CenterPageWrapper';

const AuthPage: NextPage = () => {
  return (
    <MainContainer isLimitedHeight={true}>
      <CenterPageWrapper>
        {'Тут что-то рекламное, как на auto.ru'}
      </CenterPageWrapper>
    </MainContainer>
  );
};

export default AuthPage;
