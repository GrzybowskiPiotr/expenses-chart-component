import styles from "./ExpensesComponent.module.css";
export function ExpensesComponent({ children }) {
	return <div className={styles.mainComponent}>{children}</div>;
}
