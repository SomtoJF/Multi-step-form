import { ReactNode } from "react";
import "./App.sass";
import SideBar from "./components/SideBar";

function App() {
	return (
		<div id="form-page">
			<SideBar />
			<form action="">this is a form</form>
		</div>
	);
}

export default App;
