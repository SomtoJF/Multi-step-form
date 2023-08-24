import { useState } from "react";
import "./App.sass";
import SideBar from "./components/SideBar";

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	return (
		<div id="form-page">
			<div id="popover">
				<SideBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
				<form action="">this is a form</form>
			</div>
		</div>
	);
}

export default App;
