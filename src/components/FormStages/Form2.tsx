import { useEffect, useState } from "react";
import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";
import "../../styles/FormStyles/Form2.sass";
import { v4 as uuidv4 } from "uuid";
import Switch from "../Switch";
import { FormPropsInterface } from "../../Types";

type displayedPlanTypeInterface = "Monthly" | "Yearly";

const plansInformation = {
	icons: [arcadeIcon, advancedIcon, proIcon],
	monthly: [
		{ name: "Arcade", price: 9, isMonthlyPlan: true },
		{ name: "Advanced", price: 12, isMonthlyPlan: true },
		{ name: "Pro", price: 15, isMonthlyPlan: true },
	],
	yearly: [
		{ name: "Arcade", price: 90, isMonthlyPlan: false },
		{ name: "Advanced", price: 120, isMonthlyPlan: false },
		{ name: "Pro", price: 150, isMonthlyPlan: false },
	],
};

export default function Form2({ formData, setFormData }: FormPropsInterface) {
	const [displayedPlans, setDisplayedPlans] = useState(
		plansInformation.monthly
	);
	const [priceSuffix, setPriceSuffix] = useState<"/mo" | "/yr">("/mo");
	const [displayMonthlyPlans, setDisplayMonthlyPlans] = useState(true);
	const handleDisplayChanges = () => {
		setDisplayMonthlyPlans(!displayMonthlyPlans);
	};
	const [displayedPlanType, setDisplayedPlanType] =
		useState<displayedPlanTypeInterface>("Monthly");

	useEffect(() => {
		if (displayedPlans[0].isMonthlyPlan) {
			setDisplayedPlanType("Monthly");
			setPriceSuffix("/mo");
		} else {
			setDisplayedPlanType("Yearly");
			setPriceSuffix("/yr");
		}
	}, [displayedPlans]);

	useEffect(() => {
		displayMonthlyPlans
			? setDisplayedPlans(plansInformation.monthly)
			: setDisplayedPlans(plansInformation.yearly);
	}, [displayMonthlyPlans]);

	return (
		<>
			<h1>Select your plan</h1>
			<p className="information-paragraph">
				You have the option of monthly or yearly billing.
			</p>
			<div className="plan-button-container">
				{displayedPlans.map((plan, index) => (
					<button
						key={uuidv4()}
						onClick={() => setFormData({ ...formData, plan: plan, addOns: [] })}
						className={formData.plan == plan ? "selected" : ""}
					>
						<img
							src={plansInformation.icons[index]}
							alt={`${plan.name} icon`}
						/>
						<div className="plan-info">
							<div>{plan.name}</div>
							<div>${plan.price + priceSuffix}</div>
							{!plan.isMonthlyPlan ? <div>2 months free</div> : null}
						</div>
					</button>
				))}
			</div>
			<Switch
				arg1="Monthly"
				arg2="Yearly"
				changeHandler={handleDisplayChanges}
				displayedPlanType={displayedPlanType}
			/>
		</>
	);
}

export type { displayedPlanTypeInterface };
