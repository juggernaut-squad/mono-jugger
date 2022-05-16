import React, {useContext} from 'react';

import styles from './home.module.scss';
import {OnlineStatusContext} from "@jugger/utils";

const HomePage = () => {
  const online = useContext(OnlineStatusContext);
	return (
		<div className={styles.homeWrapper}>
			<div>Client app</div>
			<div>home page</div>
			<code>{`online = ${online}`}</code>
		</div>
	);
};

export default HomePage;
