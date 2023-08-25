import { useEffect, useState } from "react";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import "../styles/Form2.sass";
import { v4 as uuidv4 } from "uuid";
import Switch from "./Switch";
import { FormPropsInterface } from "./Form1";

type displayedPlanTypeInterface = "Monthly" | "Yearly";

const plansInformation = {
	icons: [arcadeIcon, advancedIcon, proIcon],
	monthly: [
		{ name: "Arcade", price: "$9/mo", isMonthlyPlan: true },
		{ name: "Advanced", price: "$12/mo", isMonthlyPlan: true },
		{ name: "Pro", price: "$15/mo", isMonthlyPlan: true },
	],
	yearly: [
		{ name: "Arcade", price: "$90/yr", isMonthlyPlan: false },
		{ name: "Advanced", price: "$120/yr", isMonthlyPlan: false },
		{ name: "Pro", price: "$150/yr", isMonthlyPlan: false },
	],
};

export default function Form2({ formData, setFormData }: FormPropsInterface) {
	const [displayedPlans, setDisplayedPlans] = useState(
		plansInformation.monthly
	);
	const [displayMonthlyPlans, setDisplayMonthlyPlans] = useState(true);
	const selectedPlanStyles = {
		backgroundColor: "hsl(217, 100%, 97%)",
		border: "solid 1px hsl(243, 100%, 62%)",
	};
	const handleDisplayChanges = () => {
		setDisplayMonthlyPlans(!displayMonthlyPlans);
	};
	const [displayedPlanType, setDisplayedPlanType] =
		useState<displayedPlanTypeInterface>("Monthly");

	useEffect(() => {
		displayedPlans[0].isMonthlyPlan == true
			? setDisplayedPlanType("Monthly")
			: setDisplayedPlanType("Yearly");
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
						style={formData.plan == plan ? selectedPlanStyles : {}}
					>
						<img
							src={plansInformation.icons[index]}
							alt={`${plan.name} icon`}
						/>
						<div className="plan-info">
							<div>{plan.name}</div>
							<div>{plan.price}</div>
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
