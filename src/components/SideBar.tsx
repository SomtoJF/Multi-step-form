import { v4 as uuidv4 } from "uuid";
import "../styles/SideBar.sass";

const steps = [
	{
		key: 1,
		prompt: "your info",
	},
	{
		key: 2,
		prompt: "select plan",
	},
	{
		key: 3,
		prompt: "add-ons",
	},
	{
		key: 4,
		prompt: "summary",
	},
];

export default function SideBar() {
	return (
		<aside id="side-bar">
			<ol>
				{steps.map((step) => (
					<li key={uuidv4()}>
						<div>{step.key}</div>
						<div>{`STEP ${step.key}`}</div>
						<div>{step.prompt.toUpperCase()}</div>
					</li>
				))}
			</ol>
		</aside>
	);
}
