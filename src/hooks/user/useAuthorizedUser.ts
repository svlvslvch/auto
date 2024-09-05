import { useUserStore } from '@store/userStore/useUserStore';

export const useAuthorizedUser = () => {
  return useUserStore((state) => {
    return {
      user: state.user,
    };
  });
};
