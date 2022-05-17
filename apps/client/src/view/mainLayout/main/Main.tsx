import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './main.module.scss';

const Main = () => {
	return (
		<div className={styles.mainWrapper}>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Main;
