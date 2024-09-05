'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Link, usePathname } from '@navigation/*';
import { useTranslations } from 'next-intl';

import { useAuthorizedUser } from '@hooks/user/useAuthorizedUser';

import MainContainer from '../MainContainer/MainContainer';

import Navigation from './Navigation/Navigation';

import Exit from '@svg/common/exit.svg';

import MainLogo from '@png/main_logo.png';

const MainHeader: FC = () => {
  const t = useTranslations('Navigation');
  const { user } = useAuthorizedUser();

  const pathname = usePathname();

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

          {pathname !== '/cars' && (
            <li>
              <div className="flex h-full items-center gap-8">
                <Link className="flex h-full items-center" href="/cars">
                  <div className="text-center hover:text-violet-600 align-middle text-xs font-semibold uppercase">
                    {t('Catalog')}
                  </div>
                </Link>
              </div>
            </li>
          )}

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
