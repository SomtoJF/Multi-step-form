interface planType {
	name: string;
	price: number;
	isMonthlyPlan: boolean;
}

interface addOnType {
	name: string;
	description: string;
	price: number;
	isMonthlyPlan: boolean;
}

interface FormDataInterface {
	name: string;
	email: string;
	phone: string;
	plan: planType;
	addOns: Array<addOnType | null>;
}

interface FormPropsInterface {
	formData: FormDataInterface;
	setFormData: (object: FormDataInterface) => void;
}

export type { FormDataInterface, addOnType, planType, FormPropsInterface };
