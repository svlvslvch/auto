import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { errorCatch } from '@api/api.helper';

import { IUserStore } from './userStore.types';
import { StoreService } from './userStore.service';
import { removeToStorage } from './userStore.helper';

export const useUserStore = create<IUserStore>()(
  persist(
    devtools((set) => {
      return {
        user: null,
        isLoading: false,
        login: async ({ login, password }) => {
          try {
            const response = await StoreService.login(login, password);

            set({ user: response.user });
          } catch (error: any) {
            console.error(error);

            return error;
          }
        },
        logout: async () => {
          try {
            set({ user: null });

            removeToStorage();
          } catch (error: any) {
            console.error(error);

            return errorCatch(error);
          }
        },
      };
    }),
    { name: 'userStore' }
  )
);
