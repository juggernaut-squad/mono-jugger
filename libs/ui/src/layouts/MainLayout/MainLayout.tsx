import React, { ReactElement } from 'react';

import { Root } from './MainLayout.styles';
import { AppHeader } from '../../organisms/AppHeader/AppHeader';
import { BottomNavigation } from '../../organisms/BottomNavigation/BottomNavigation';

/* eslint-disable-next-line */
export interface MainLayoutProps {
	children: ReactElement;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<Root>
			<header>
				<AppHeader />
			</header>
			<main>{children}</main>
			<nav>
				<BottomNavigation />
			</nav>
		</Root>
	);
};
