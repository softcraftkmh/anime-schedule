import Head from "next/head";

import Nav from "../components/nav";
import TodaySchedule from "../components/todaySchedule";
import styles from "../styles/pages/schedule.module.scss";

const Schedule = () => {
	return (
		<div>
			<Head>
				<title>Schedule - SubsPlease</title>
			</Head>
			<Nav />
			<div className={styles.container}>
				<TodaySchedule />
				<div>weekly</div>
			</div>
		</div>
	);
};

export default Schedule;
