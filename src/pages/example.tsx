import AppLayout from 'layouts/AppLayout';

import type { NextPageWithLayout } from 'types/NextPageWithLayout';
import type { ReactElement } from 'react';

const Example: NextPageWithLayout = () => <div className="text-3xl">test</div>;

Example.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Example;
