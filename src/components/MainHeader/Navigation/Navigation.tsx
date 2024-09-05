import { FC } from 'react';
import Image from 'next/image';
import { Button, Menu } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { Link } from '@navigation/*';

import { useUserStore } from '@store/userStore/useUserStore';

import { INavigationProps } from './Navigation.props';

import Person from '@svg/common/person.svg';
import Plus from '@svg/common/plus.svg';
import Exit from '@svg/common/exit.svg';

const Navigation: FC<INavigationProps> = (props) => {
  const { user } = props;

  const t = useTranslations('Navigation');

  const logout = useUserStore((state) => state.logout);

  return (
    <li className="flex items-center gap-6">
      <Link href="/add-car">
        <Button
          className="hidden bg-blue-400 hover:bg-blue-500 md:block md:w-fit"
          fullWidth
          variant="filled"
          radius="xl"
          leftSection={<Plus width="20" height="20" alt={t('Log out')} />}
        >
          {t('Add a car')}
        </Button>
      </Link>

      <Menu shadow="md" position="bottom-end" offset={12} width={200}>
        <Menu.Target>
          <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-yellow-200 text-gray-500">
            {user.image ? (
              <Image src={user.image} alt="User avatar" fill priority />
            ) : (
              <Person width="24" height="24" alt="Default user avatar" />
            )}
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Link href="/add-car">
            <Menu.Item
              className="md:hidden"
              leftSection={<Plus width="24" height="24" alt={t('Add a car')} />}
            >
              {t('Add a car')}
            </Menu.Item>
          </Link>

          <Menu.Divider className="md:hidden" />

          <Menu.Item
            leftSection={<Exit width="24" height="24" alt={t('Log out')} />}
            onClick={() => logout()}
          >
            {t('Log out')}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </li>
  );
};

export default Navigation;
