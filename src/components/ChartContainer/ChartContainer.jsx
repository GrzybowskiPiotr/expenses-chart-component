import styles from "./ChartContainer.module.css";
export function ChartContainer({ children }) {
	return (
		<main>
			<h2>Spending - Last 7 days</h2>
			<div className={styles.chart}>{children}</div>
			<section className={styles.totalContainer}>
				<ul>
					<li>
						<h3>Total this month</h3>
						<p>$478.33</p>
					</li>
					<li>
						<h3>from last month</h3>
						<p>+2.4%</p>
					</li>
				</ul>
			</section>
		</main>
	);
}
