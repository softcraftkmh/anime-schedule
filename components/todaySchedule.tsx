import styles from "../styles/components/todaySchedule.module.scss";
import ScheduleGroup from "./scheduleGroup";

import { TODAY_SCHEDULE } from "../data/todaySchedule";

const TodaySchedule = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Time</h2>
			<p>January 19th 2021, 18:16:00</p>
			<ScheduleGroup
				title={TODAY_SCHEDULE.title}
				schedules={TODAY_SCHEDULE.schedules}
			/>
		</div>
	);
};

export default TodaySchedule;
