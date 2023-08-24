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

interface SideBarProps {
	currentStep: number;
	setCurrentStep: (step: number) => void;
}

export default function SideBar({ currentStep, setCurrentStep }: SideBarProps) {
	return (
		<aside id="side-bar">
			<ul>
				{steps.map((step) => (
					<li key={uuidv4()}>
						<button
							className="list-marker"
							onClick={() => setCurrentStep(step.key)}
							style={
								currentStep == step.key
									? { backgroundColor: "hsl(228, 100%, 84%)", border: "none" }
									: {}
							}
						>
							{step.key}
						</button>
						<div>{`STEP ${step.key}`}</div>
						<div>{step.prompt.toUpperCase()}</div>
					</li>
				))}
			</ul>
		</aside>
	);
}
