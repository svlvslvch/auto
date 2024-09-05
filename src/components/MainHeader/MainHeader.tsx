'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Link } from '@navigation/*';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';

import MainContainer from '../MainContainer/MainContainer';

import Navigation from './Navigation/Navigation';

import Exit from '@svg/common/exit.svg';

import MainLogo from '@png/main_logo.png';

const MainHeader: FC = () => {
  const { user } = useAuthorizedUser();

  return (
    <header className="h-headerHeight bg-white">
      <MainContainer>
        <ul className="flex h-headerHeight w-full items-center justify-between">
          <li>
            <Link href="/cars">
              <Image
                src={MainLogo}
                width="48"
                height="48"
                alt="Auto logo"
                priority
              />
            </Link>
          </li>

          {user ? (
            <Navigation user={user} />
          ) : (
            <Link href="/login">
              <Exit width="24" height="24" alt="Login" />
            </Link>
          )}
        </ul>
      </MainContainer>
    </header>
  );
};

export default MainHeader;
