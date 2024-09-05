import { FC, PropsWithChildren } from 'react';

import { IMainContainerProps } from './MainContainer.props';

const MainContainer: FC<PropsWithChildren<IMainContainerProps>> = (props) => {
  const { children, isLimitedHeight = false } = props;

  return (
    <main
      className={`MainContainer container mx-auto min-h-[560px] px-4 ${isLimitedHeight ? 'h-[calc(100vh-64px)]' : ''}`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
