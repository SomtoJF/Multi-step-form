import { FormPropsInterface } from "./Form1";
import { useEffect, useState } from "react";
import "../styles/Form4.sass";
import { v4 } from "uuid";

export default function Form4({ formData }: FormPropsInterface) {
	const [isMonthlyPlanSelected] = useState(
		formData.plan.isMonthlyPlan ? true : false
	);
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
	const planSuffix: "/mo" | "/yr" = isMonthlyPlanSelected ? "/mo" : "/yr";
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
						<button type="button">Change</button>
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
