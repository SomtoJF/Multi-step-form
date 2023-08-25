import { useState } from "react";
import "./App.sass";
import SideBar from "./components/SideBar";
import "./styles/Form.sass";
import StepOne from "./components/Form1";
import StepTwo from "./components/Form2";
import StepThree from "./components/Form3";
import StepFour from "./components/Form4";

type planType = {
	name: string;
	price: string;
	isMonthlyPlan: boolean;
};

interface FormDataInterface {
	name: string;
	email: string;
	phone: string;
	plan: planType;
}

const defaultFormData: FormDataInterface = {
	name: "",
	email: "",
	phone: "",
	plan: {
		name: "",
		price: "",
		isMonthlyPlan: true,
	},
};

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormDataInterface>(defaultFormData);
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
							<StepThree />
						) : currentStep === 4 ? (
							<StepFour />
						) : null}
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
							<button type="button">Confirm</button>
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
export type { FormDataInterface };
