import { ReactNode } from 'react';

export declare interface DashboardLayoutTypes {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutTypes): JSX.Element {
  return <>{children}</>;
}
