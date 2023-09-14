import { FormDataInterface, addOnType } from "../../Types";
import checkMarkIcon from "../../assets/icon-checkmark.svg";

type propType = {
	item: addOnType;
	formData: FormDataInterface;
	setFormData: (formData: FormDataInterface) => void;
};

export default function AddOnItem({ item, formData, setFormData }: propType) {
	const isItemSelected = formData.addOns.includes(item);

	const suffix = formData.plan.isMonthlyPlan ? "/mo" : "/yr";

	function handleAddOnSelection() {
		isItemSelected ? removeThisItem() : addThisItem();
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
			className={isItemSelected ? "add-on-item selected" : "add-on-item"}
			onClick={handleAddOnSelection}
		>
			<button type="button" className="checkbox">
				{isItemSelected ? (
					<img src={checkMarkIcon} alt="checkmark-icon" />
				) : null}
			</button>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
			<div>+${item.price + suffix}</div>
		</div>
	);
}
