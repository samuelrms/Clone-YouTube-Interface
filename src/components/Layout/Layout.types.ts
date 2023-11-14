import { PropsWithChildren } from 'react';

export type LayoutProps = {
  title: string;
  description: string;
} & PropsWithChildren;
