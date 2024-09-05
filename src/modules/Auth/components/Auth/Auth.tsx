'use client';

import { FC } from 'react';

import { useAuthorizedUserRedirect } from '@hooks/user/useAuthorizedUserRedirect';

import AuthForm from '../AuthForm/AuthForm';

const Auth: FC = () => {
  const isRender = useAuthorizedUserRedirect();

  return (
    isRender && (
      <div className="Auth flex w-full justify-center">
        <AuthForm />
      </div>
    )
  );
};

export default Auth;
