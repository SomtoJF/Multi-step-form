import { useEffect, useState } from "react";
import { FormDataInterface, addOnType } from "../App";
import checkMarkIcon from "../assets/icon-checkmark.svg";

type propType = {
	item: addOnType;
	formData: FormDataInterface;
	setFormData: (formData: FormDataInterface) => void;
};

export default function AddOnItem({ item, formData, setFormData }: propType) {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		formData.addOns.includes(item) ? setIsSelected(true) : setIsSelected(false);
	}, [formData.addOns]);

	function handleAddOnSelection() {
		isSelected ? removeThisItem() : addThisItem();
	}
	function addThisItem() {
		setFormData({ ...formData, addOns: formData.addOns.concat(item) });
	}
	function removeThisItem() {
		setFormData({
			...formData,
			addOns: formData.addOns.filter((addOn) => addOn != item),
		});
	}
	return (
		<div
			className={isSelected ? "add-on-item selected" : "add-on-item"}
			onClick={handleAddOnSelection}
		>
			<button type="button" className="checkbox">
				{isSelected ? <img src={checkMarkIcon} alt="checkmark-icon" /> : null}
			</button>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
			<div>{item.price}</div>
		</div>
	);
}
