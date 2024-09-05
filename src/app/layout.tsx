import './globals.scss';
import { ReactNode } from 'react';

interface IProps {
  /**
   * Дочерние элементы.
   */
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return children;
}
