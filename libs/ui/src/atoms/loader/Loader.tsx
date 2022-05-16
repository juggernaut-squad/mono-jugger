import React, { useEffect, useState } from 'react';

import styles from './Loader.module.scss';

export const Loader: React.FC<{
	delay?: number;
	style?: React.CSSProperties;
}> = ({ delay = 0, style }) => {
	const [showLoader, setShowLoader] = useState(delay === 0);

	useEffect(() => {
		const tId = setTimeout(() => {
			setShowLoader(true);
		}, delay);

		return () => {
			if (tId) {
				clearTimeout(tId);
			}
		};
	}, [delay]);

	if (!showLoader) {
		return null;
	}

	return <div className={styles['contentLoader']} style={style} />;
};
