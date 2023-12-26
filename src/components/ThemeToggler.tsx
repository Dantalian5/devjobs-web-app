import {useState} from "react";

function ThemeToggler() {
	const [toggle, setToggle] = useState<boolean>(true);

	function toogleTheme() {
		setToggle((prevState) => !prevState);
	}

	return (
		<div className="m-theme-toggler">
			<img
				className="m-theme-toggler__icon-sun"
				src="/assets/icons/icon-sun.svg"
				alt=""
			/>
			<button
				className={`m-toggle-btn ${toggle ? "light" : "dark"}`}
				onClick={toogleTheme}
				title="Change Color Theme"></button>
			<img
				className="m-theme-toggler__icon-moon"
				src="/assets/icons/icon-moon.svg"
				alt=""
			/>
		</div>
	);
}

export default ThemeToggler;
