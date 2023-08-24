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
			<ul>
				{steps.map((step) => (
					<li key={uuidv4()}>
						<button className="list-marker">{step.key}</button>
						<div>{`STEP ${step.key}`}</div>
						<div>{step.prompt.toUpperCase()}</div>
					</li>
				))}
			</ul>
		</aside>
	);
}
