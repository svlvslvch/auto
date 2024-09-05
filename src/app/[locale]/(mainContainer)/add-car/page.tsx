import { NextPage } from 'next';

import MainContainer from '@components/MainContainer/MainContainer';
import CenterPageWrapper from '@components/Wrappers/CenterPageWrapper/CenterPageWrapper';

const AuthPage: NextPage = () => {
  return (
    <MainContainer isLimitedHeight={true}>
      <CenterPageWrapper>{'Тут добавление нового авто'}</CenterPageWrapper>
    </MainContainer>
  );
};

export default AuthPage;
