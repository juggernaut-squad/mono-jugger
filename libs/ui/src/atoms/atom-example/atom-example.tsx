import styles from './atom-example.module.scss';

export function AtomExample() {
	return (
		<div className={styles['container']}>
			<h1>Welcome to AtomExample!</h1>
		</div>
	);
}

export default AtomExample;
