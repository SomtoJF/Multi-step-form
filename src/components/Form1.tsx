import { FormEvent } from "react";
import { FormDataInterface } from "../App";
import Label from "./Label";

type props = {
	formData: FormDataInterface;
	setFormData: (object: FormDataInterface) => void;
};

export default function Form1({ formData, setFormData }: props) {
	const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
		setFormData({ ...formData, name: e.currentTarget.value });
	};

	const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
		setFormData({ ...formData, email: e.currentTarget.value });
	};

	const handlePhoneChange = (e: FormEvent<HTMLInputElement>) => {
		setFormData({ ...formData, phone: e.currentTarget.value });
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
				required
			/>
			<Label text="Phone Number" htmlFor="phone" watchedText={formData.phone} />
			<input
				type="tel"
				placeholder="e.g. +1 234 567 890"
				id="phone"
				value={formData.phone}
				onChange={handlePhoneChange}
				required
			/>
		</>
	);
}
