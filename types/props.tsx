import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export type HandleClickProps = {
  handleClick(): void;
};
