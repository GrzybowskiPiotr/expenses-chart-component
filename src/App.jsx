import { Chart } from "./components/Chart/Chart";
import { ChartContainer } from "./components/ChartContainer/ChartContainer";
import { ExpensesComponent } from "./components/ExpensesComponent/ExpensesComponent";
import { Footer } from "./components/Footer/Footer";
import { MyBalance } from "./components/MyBalance/MyBalance";
import "./Styles/theme.css";
import DATA from "./JSON/data.json";
export function App() {
	return (
		<>
			<ExpensesComponent >
				<MyBalance></MyBalance>
				<ChartContainer>
					<Chart data={DATA}/>
				</ChartContainer>
			</ExpensesComponent>
			<Footer />
		</>
	);
}
