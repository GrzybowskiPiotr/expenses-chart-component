import styles from "./MyBalance.module.css";
export function MyBalance() {
	return (
		<header>
			<section>
				<h1>My Balance</h1>
				<p>$921.48</p>
			</section>
			<section>
				<div
					className={`${styles["circle-transparent"]} ${styles.circle}`}></div>
				<div className={`${styles["circle-solid"]} ${styles.circle}`}></div>
			</section>
		</header>
	);
}
