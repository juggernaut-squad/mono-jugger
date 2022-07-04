import React, { ReactElement } from 'react';
import { Root } from './HomePageLayout.styles';

/* eslint-disable-next-line */
export interface HomeLayoutProps {
	children?: ReactElement;
}

export const HomePageLayout: React.FC<HomeLayoutProps> = ({ children }) => {
	return <Root>{children}</Root>;
};

export default HomePageLayout;
