import { FormPropsInterface } from "../../Types";
import { useEffect, useState } from "react";
import "../../styles/FormStyles/Form4.sass";
import { v4 } from "uuid";

interface FormFourProps extends FormPropsInterface {
	setCurrentStep: (step: number) => void;
}

export default function Form4({ formData, setCurrentStep }: FormFourProps) {
	const isMonthlyPlanSelected = formData.plan.isMonthlyPlan;
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		let valueOfAddOns = 0;
		if (formData.addOns != null && formData.addOns.length > 0) {
			valueOfAddOns = formData.addOns?.reduce(
				(total: number, addOn: any) => total + addOn.price,
				0
			);
		}
		setTotalPrice(formData.plan.price + valueOfAddOns);
	}, []);
	const planSuffix = isMonthlyPlanSelected ? "/mo" : "/yr";

	return (
		<>
			<h1>Finishing up</h1>
			<p className="information-paragraph">
				Double-check everything looks OK before confirming.
			</p>
			<main id="checkout">
				<div>
					<div>
						<h4>{`${formData.plan.name} ${
							isMonthlyPlanSelected ? "(Monthly)" : "(Yearly)"
						}`}</h4>
						<button type="button" onClick={() => setCurrentStep(2)}>
							Change
						</button>
					</div>

					<h4>${formData.plan.price + planSuffix}</h4>
				</div>
				<div>
					{formData.addOns.map((addOn) => (
						<div key={v4()}>
							<div>{addOn?.name}</div>
							<div>+${addOn?.price + planSuffix}</div>
						</div>
					))}
				</div>
			</main>
			<div id="total">
				<div>Total (per {isMonthlyPlanSelected ? "month" : "year"})</div>
				<div>${totalPrice + planSuffix}</div>
			</div>
		</>
	);
}
