import confirmIcon from "../../assets/icon-thank-you.svg";
import "../../styles/FormStyles/Confirmation.sass";

export default function Confirmation() {
	return (
		<div id="confirmation-section">
			<img src={confirmIcon} alt="thank you icon" />
			<h1>Thank You</h1>
			<p className="information-paragraph">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
}
