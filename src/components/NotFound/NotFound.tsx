import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <section>
      <div className="w-maxWidth m-auto flex h-[calc(100vh-64px)] flex-col items-center justify-center">
        <div>{'Упс.... Такой страницы нет'}</div>
      </div>
    </section>
  );
};

export default NotFound;
