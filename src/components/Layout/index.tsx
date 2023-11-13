import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className='bg-gray-500'>{children}</div>;
};

export default Layout;
