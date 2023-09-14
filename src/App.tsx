import { useState } from "react";
import "./App.sass";
import SideBar from "./components/SideBar";
import "./styles/FormStyles/Form.sass";
import { FormDataInterface } from "./Types";
import Form from "./components/Form";
import FormStepper from "./components/FormStepper";

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
	const [displayConfirmation, setDisplayConfirmation] = useState(false);

	function handleConfirmation() {
		if (areRequiredFieldsValid()) setDisplayConfirmation(true);
	}
	function areRequiredFieldsValid() {
		if (formData.name == "" || formData.email == "" || formData.phone == "") {
			setCurrentStep(1);
			return false;
		}
		if (formData.plan.name == "") {
			setCurrentStep(2);
			return false;
		}
		return true;
	}
	return (
		<div id="form-page">
			<div id="popover">
				<SideBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
				<form action="">
					<Form
						currentStep={currentStep}
						formData={formData}
						setFormData={setFormData}
						displayConfirmation={displayConfirmation}
						setCurrentStep={setCurrentStep}
					/>
					<section id="form-stepper-container">
						<FormStepper
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
							handleConfirmation={handleConfirmation}
							displayConfirmation={displayConfirmation}
							setDisplayConfirmation={setDisplayConfirmation}
						/>
					</section>
				</form>
			</div>
		</div>
	);
}

export default App;
