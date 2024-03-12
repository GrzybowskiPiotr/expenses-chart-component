import styles from "./Chart.module.css";
import { NumberOfDayToDayName } from "../../constans/NumberOfDayToDayName";

export function Chart({ data }) {
	const currentDate = new Date();
	const dayNumber = currentDate.getDay();

	return (
		<ul className={styles.list}>
			{data.map((day) => {
				const heightOfBar = { height : `${(day.amount).toString()}%`};
				
				return (
					<li key={day.day}>
						<p>{day.day}</p>
						<div
							style={heightOfBar} 
							className={`${styles.bar} ${
								NumberOfDayToDayName[dayNumber] === day.day
									? `${styles.currentDay}`
									: ""
							}`}></div>
							<div className={styles.amount}><p>${day.amount}</p></div>
					</li>
				);
			})}
		</ul>
	);
}
