import StepOne from "./FormStages/Form1";
import StepTwo from "./FormStages/Form2";
import StepThree from "./FormStages/Form3";
import StepFour from "./FormStages/Form4";
import Confirmation from "./FormStages/Confirmation";
import { FormDataInterface } from "../../Types";

interface formProps {
	currentStep: number;
	formData: FormDataInterface;
	setFormData: (data: FormDataInterface) => void;
	displayConfirmation: boolean;
	setCurrentStep: (step: number) => void;
}

export default function Form({
	currentStep,
	formData,
	setFormData,
	displayConfirmation,
	setCurrentStep,
}: formProps) {
	return (
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
				<StepFour
					formData={formData}
					setFormData={setFormData}
					setCurrentStep={setCurrentStep}
				/>
			)}
		</div>
	);
}
