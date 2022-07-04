import React, { ReactElement } from 'react';

import { Root } from './MainLayout.styles';

/* eslint-disable-next-line */
export interface MainLayoutProps {
	header: ReactElement;
	footer: ReactElement;
	content?: ReactElement;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	header,
	footer,
	content,
}) => {
	return (
		<Root>
			<header>{header}</header>
			<main>{content}</main>
			<nav>{footer}</nav>
		</Root>
	);
};
