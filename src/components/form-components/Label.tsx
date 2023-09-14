// Displays required warning if the watchedText prop is empty
type LabelProps = {
	text: string;
	htmlFor: string;
	watchedText: string;
};

export default function Label({ text, htmlFor, watchedText }: LabelProps) {
	return (
		<label htmlFor={htmlFor}>
			<div>{text}</div>
			<div>{watchedText == "" ? "This field is required" : null}</div>
		</label>
	);
}
