import { NextPage } from 'next';

import MainContainer from '@components/MainContainer/MainContainer';
import CenterPageWrapper from '@components/Wrappers/CenterPageWrapper/CenterPageWrapper';

import { Auth } from '@modules/Auth';

const AuthPage: NextPage = () => {
  return (
    <MainContainer isLimitedHeight={true}>
      <CenterPageWrapper>
        <Auth />
      </CenterPageWrapper>
    </MainContainer>
  );
};

export default AuthPage;
