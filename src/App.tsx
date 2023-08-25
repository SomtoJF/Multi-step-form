import { useState } from "react";
import "./App.sass";
import SideBar from "./components/SideBar";
import "./styles/FormStyles/Form.sass";
import StepOne from "./components/FormStages/Form1";
import StepTwo from "./components/FormStages/Form2";
import StepThree from "./components/FormStages/Form3";
import StepFour from "./components/FormStages/Form4";
import Confirmation from "./components/FormStages/Confirmation";

type planType = {
	name: string;
	price: number;
	isMonthlyPlan: boolean;
};

type addOnType = {
	name: string;
	description: string;
	price: number;
	isMonthlyPlan: boolean;
};

interface FormDataInterface {
	name: string;
	email: string;
	phone: string;
	plan: planType;
	addOns: Array<addOnType | null>;
}

const defaultFormData: FormDataInterface = {
	name: "",
	email: "",
	phone: "",
	plan: {
		name: "",
		price: 0,
		isMonthlyPlan: true,
	},
	addOns: [],
};

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormDataInterface>(defaultFormData);
	const [displayConfirmation, setdisplayConfirmation] = useState(false);
	return (
		<div id="form-page">
			<div id="popover">
				<SideBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
				<form action="">
					<div className="form-fields">
						{currentStep === 1 ? (
							<StepOne formData={formData} setFormData={setFormData} />
						) : currentStep === 2 ? (
							<StepTwo formData={formData} setFormData={setFormData} />
						) : currentStep === 3 ? (
							<StepThree formData={formData} setFormData={setFormData} />
						) : currentStep === 4 && displayConfirmation ? (
							<Confirmation />
						) : (
							<StepFour formData={formData} setFormData={setFormData} />
						)}
					</div>
					<section id="form-stepper-container">
						{currentStep < 4 ? (
							<button
								type="button"
								className="next-button"
								onClick={() => setCurrentStep(currentStep + 1)}
							>
								Next Step
							</button>
						) : (
							<button
								type="button"
								onClick={() => setdisplayConfirmation(true)}
							>
								Confirm
							</button>
						)}

						{currentStep > 1 ? (
							<button
								type="button"
								className="back-button"
								onClick={() => setCurrentStep(currentStep - 1)}
							>
								Go Back
							</button>
						) : null}
					</section>
				</form>
			</div>
		</div>
	);
}

export default App;
export type { FormDataInterface, addOnType };
