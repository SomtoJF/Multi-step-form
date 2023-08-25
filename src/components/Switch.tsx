import { useEffect, useRef } from "react";
import "../styles/Switch.sass";
import { displayedPlanTypeInterface } from "./Form2";
import gsap from "gsap";

type SwitchProps = {
	arg1: string;
	arg2: string;
	changeHandler: () => void;
	displayedPlanType: displayedPlanTypeInterface;
};
export default function Switch({
	arg1,
	arg2,
	changeHandler,
	displayedPlanType,
}: SwitchProps) {
	const switchButton = useRef<HTMLButtonElement>(null);
	const slideToMonthly = () => {
		gsap.to(switchButton.current, {
			x: 0,
			duration: 0.2,
		});
	};

	const slideToYearly = () => {
		gsap.to(switchButton.current, {
			x: 25,
			duration: 0.2,
		});
	};
	useEffect(() => {
		displayedPlanType === "Monthly" ? slideToMonthly() : slideToYearly();
	}, [displayedPlanType]);
	return (
		<div id="switch">
			{arg1}
			<div
				onClick={() => {
					changeHandler();
				}}
			>
				<button id="switch-knob" type="button" ref={switchButton}></button>
			</div>
			{arg2}
		</div>
	);
}
