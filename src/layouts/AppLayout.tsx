import { ReactNode } from 'react';

export declare interface AppLayoutTypes {
  children?: ReactNode;
}

export default function AppLayout({ children }: AppLayoutTypes): JSX.Element {
  return <>{children}</>;
}
