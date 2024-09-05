import Cookies from 'js-cookie';

import { ILoginResponse } from './userStore.types';

export const saveTokenToStorage = (data: ILoginResponse) => {
  // Cookies.set('accessToken', data.tokens.accessToken);
  Cookies.set('accessToken', 'plug_access_token');
};

export const removeToStorage = () => {
  Cookies.remove('accessToken');
};
