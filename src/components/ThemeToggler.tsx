function ThemeToggler({colorScheme, colorSchemeFn}: any) {
	return (
		<div className="m-theme-toggler">
			<img
				className="m-theme-toggler__icon-sun"
				src="/assets/icons/icon-sun.svg"
				alt=""
			/>
			<button
				className={`m-toggle-btn ${colorScheme === 'light' ? 'light' : 'dark'}`}
				onClick={colorSchemeFn}
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
