import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from './NextPageWithLayout';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
