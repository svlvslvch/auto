'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@mantine/core';
import { Link } from '@navigation/*';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('ErrorPage');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto my-auto flex flex-col items-center gap-4">
      <h2>{t('Something went wrong!')}</h2>

      <Link href="/support">
        <Button>{t('Support')}</Button>
      </Link>

      <Button onClick={() => reset()}>{t('To try again')}</Button>
    </div>
  );
}
