import { addOnType } from "../App";

type propType = {
	item: addOnType;
};

export default function AddOnItem({ item }: propType) {
	return (
		<button type="button" className="add-on-item">
			<button type="button" className="checkbox"></button>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
			<div>{item.price}</div>
		</button>
	);
}
