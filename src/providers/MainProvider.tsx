'use client';

import { FC, PropsWithChildren } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IMainProviderProps extends PropsWithChildren {
  locale: string;
  messages: AbstractIntlMessages;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<IMainProviderProps> = ({
  children,
  locale,
  messages,
}) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <NextIntlClientProvider
      timeZone={userTimeZone}
      locale={locale}
      messages={messages}
    >
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MantineProvider>
    </NextIntlClientProvider>
  );
};

export default MainProvider;
