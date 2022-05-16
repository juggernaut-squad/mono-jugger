import React, { ReactElement } from 'react';

import { Loader } from '@jugger/ui';

const LazyRoute: React.FC<{ children: ReactElement }> = ({ children }) => (
	<React.Suspense fallback={<Loader style={{ minHeight: 500 }} delay={100} />}>
		{children}
	</React.Suspense>
);

export default LazyRoute;
