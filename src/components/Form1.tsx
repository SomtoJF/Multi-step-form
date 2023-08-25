import { FormEvent } from "react";
import { FormDataInterface } from "../App";
import { AsYouType } from "libphonenumber-js";
import Label from "./Label";

interface FormPropsInterface {
	formData: FormDataInterface;
	setFormData: (object: FormDataInterface) => void;
}

export default function Form1({ formData, setFormData }: FormPropsInterface) {
	const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
		setFormData({ ...formData, name: e.currentTarget.value });
	};

	const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
		setFormData({ ...formData, email: e.currentTarget.value });
	};

	const handlePhoneChange = (e: FormEvent<HTMLInputElement>) => {
		const formatter = new AsYouType();
		setFormData({ ...formData, phone: formatter.input(e.currentTarget.value) });
	};

	return (
		<>
			<h1>Personal info</h1>
			<p className="information-paragraph">
				Please provide your name, email address, and phone number.
			</p>
			<Label text="Name" htmlFor="name" watchedText={formData.name} />
			<input
				type="text"
				id="name"
				value={formData.name}
				onChange={handleNameChange}
				maxLength={50}
				placeholder="e.g. Stephen King"
				required
			/>
			<Label
				text="Email Address"
				htmlFor="email"
				watchedText={formData.email}
			/>
			<input
				type="email"
				id="email"
				value={formData.email}
				onChange={handleEmailChange}
				maxLength={25}
				placeholder="e.g. stephenking@lorem.com"
				required
			/>
			<Label text="Phone Number" htmlFor="phone" watchedText={formData.phone} />
			<input
				type="tel"
				placeholder="e.g. +1 234 567 890"
				id="phone"
				value={formData.phone}
				onChange={handlePhoneChange}
				maxLength={17}
				required
			/>
		</>
	);
}

export type { FormPropsInterface };
