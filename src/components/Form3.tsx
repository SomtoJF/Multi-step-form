import { useState, useEffect } from "react";
import "../styles/Form3.sass";
import AddOnItem from "./AddOnItem";
import { v4 as uuidv4 } from "uuid";
import { FormPropsInterface } from "./Form1";

const addOns = {
	monthly: [
		{
			name: "Online service",
			description: "Access to multiplayer games",
			price: "+$1/mo",
			isMonthlyPlan: true,
		},
		{
			name: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: "+$2/mo",
			isMonthlyPlan: true,
		},
		{
			name: "Customizable profile",
			description: "Custom theme on your profile",
			price: "+$2/mo",
			isMonthlyPlan: true,
		},
	],
	yearly: [
		{
			name: "Online service",
			description: "Access to multiplayer games",
			price: "+$10/yr",
			isMonthlyPlan: false,
		},
		{
			name: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: "+$20/yr",
			isMonthlyPlan: false,
		},
		{
			name: "Customizable profile",
			description: "Custom theme on your profile",
			price: "+$20/yr",
			isMonthlyPlan: false,
		},
	],
};

export default function Form3({ formData, setFormData }: FormPropsInterface) {
	const [displayedAddOns, setDisplayedAddOns] = useState(addOns.monthly);
	useEffect(() => {
		formData.plan.isMonthlyPlan
			? setDisplayedAddOns(addOns.monthly)
			: setDisplayedAddOns(addOns.yearly);
	}, [formData.plan]);
	return (
		<>
			<h1>Pick add-ons</h1>
			<p className="information-paragraph">
				Add-ons help enhance your gaming experience.
			</p>
			{displayedAddOns.map((item) => (
				<AddOnItem
					item={item}
					formData={formData}
					setFormData={setFormData}
					key={uuidv4()}
				/>
			))}
		</>
	);
}
