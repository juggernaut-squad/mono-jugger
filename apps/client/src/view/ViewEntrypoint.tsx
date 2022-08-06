/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@jugger/ui';
import { NetworkStatusProvider } from '@jugger/utils';
import AppRoutes from '@client/routes/AppRouter';

const ViewEntrypoint: React.FunctionComponent = () => {
	return (
		<NetworkStatusProvider>
			<ThemeProvider theme={theme}>
				<AppRoutes />
			</ThemeProvider>
		</NetworkStatusProvider>
	);
};

export default ViewEntrypoint;
