import { FC, PropsWithChildren } from 'react';

const CenterPageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex h-full w-full items-center justify-center pt-10">
      {children}
    </section>
  );
};

export default CenterPageWrapper;
