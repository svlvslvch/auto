import { IUser } from '@shared/types/user/user.types';

export interface ILoginResponse {
  /**
   * Данные юзера.
   */
  user: IUser;
}

export interface IEmailPassword {
  /**
   * Логин юзера.
   */
  login: string;
  /**
   * Пароль юзера.
   */
  password: string;
}

export interface IUserStore {
  /**
   * Данные юзера.
   */
  user: IUser | null;
  /**
   * Состояние загрузки.
   */
  isLoading: boolean;
  /**
   * Метод авторизации.
   */
  login: (params: IEmailPassword) => void;
  /**
   * Метод выхода из сервиса.
   */
  logout: () => void;
}
