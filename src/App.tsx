//import {useState} from "react";
//import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
	return (
		<div className="main-container">
			<Header />
			<Jobs />
			<div>
				Jobs
				<div>jobs-wrapper</div>
				<div>load more button</div>
			</div>
		</div>
	);
}

export default App;
