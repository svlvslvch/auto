import { IUser } from '@shared/types/user/user.types';

export interface INavigationProps {
  /**
   * Авторизованный юзер.
   */
  user: IUser;
}
