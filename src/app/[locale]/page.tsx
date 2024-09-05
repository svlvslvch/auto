'use client';

import { NextPage } from 'next';
import { Link } from '@navigation/*';
import { Button } from '@mantine/core';

import MainContainer from '@components/MainContainer/MainContainer';
import CenterPageWrapper from '@components/Wrappers/CenterPageWrapper/CenterPageWrapper';

const MainPage: NextPage = () => {
  return (
    <MainContainer isLimitedHeight={true}>
      <CenterPageWrapper>
        <div>
          <div>{'Тут что-то крутое рекламное, как на auto.ru'}</div>

          <Link className="mx-auto mt-4 block w-fit" href="/cars">
            <Button>{'Перейти в каталог'}</Button>
          </Link>
        </div>
      </CenterPageWrapper>
    </MainContainer>
  );
};

export default MainPage;
