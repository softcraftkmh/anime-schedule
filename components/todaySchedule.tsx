import styles from "../styles/components/todaySchedule.module.scss";

const TodaySchedule = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Time</h2>
			<p>January 19th 2021, 18:16:00</p>
			<h2 className={styles.title}>Airtime today</h2>
			<div className={styles.scheduleContainer}>
				<div className={styles.scheduleItem}>
					<span>Fantasy Bishoujo Juniku Ojisan to</span>
					<span>00:00</span>
				</div>
				<div className={styles.scheduleItem}>
					<span>Fantasy Bishoujo Juniku Ojisan to</span>
					<span>00:00</span>
				</div>
				<div className={styles.scheduleItem}>
					<span>Fantasy Bishoujo Juniku Ojisan to</span>
					<span>00:00</span>
				</div>
				<div className={styles.scheduleItem}>
					<span>Fantasy Bishoujo Juniku Ojisan to</span>
					<span>00:00</span>
				</div>
				<div className={styles.scheduleItem}>
					<span>Fantasy Bishoujo Juniku Ojisan to</span>
					<span>00:00</span>
				</div>
			</div>
		</div>
	);
};

export default TodaySchedule;
