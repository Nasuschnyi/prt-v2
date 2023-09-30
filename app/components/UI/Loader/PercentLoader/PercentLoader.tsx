import styles from './percentLoader.module.scss';

interface PercentLoaderProps {
	percent: number;
}

const PercentLoader: React.FC<PercentLoaderProps> = ({ percent }) => {
	return (
		<div className={styles.loader}>
			<span className={styles.counter}>{percent}%</span>
			<div className={styles.percent}>
				<div
					className={styles.progress}
					style={{ width: `${percent}%` }}
				></div>
			</div>
			<span className={styles.loading}>loading...</span>
		</div>
	);
};

export default PercentLoader;
