interface formStepperProps {
	currentStep: number;
	setCurrentStep: (step: number) => void;
	handleConfirmation: () => void;
	displayConfirmation: boolean;
	setDisplayConfirmation: (bool: boolean) => void;
}

const FormStepper = ({
	currentStep,
	setCurrentStep,
	handleConfirmation,
	displayConfirmation,
	setDisplayConfirmation,
}: formStepperProps) => {
	const renderNextButton = () => {
		if (currentStep < 4) {
			return (
				<button
					type="button"
					className="next-button"
					onClick={() => setCurrentStep(currentStep + 1)}
				>
					Next Step
				</button>
			);
		}
		return (
			<button
				type="button"
				disabled={displayConfirmation === true}
				onClick={handleConfirmation}
			>
				Confirm
			</button>
		);
	};

	const renderGoBackButton = () => {
		if (currentStep > 1) {
			return (
				<button
					type="button"
					className="back-button"
					onClick={() => {
						setCurrentStep(currentStep - 1);
						setDisplayConfirmation(false);
					}}
				>
					Go Back
				</button>
			);
		}
		return null;
	};

	return (
		<section id="form-stepper-container">
			{renderNextButton()}
			{renderGoBackButton()}
		</section>
	);
};

export default FormStepper;
