function ThemeToggler({colorScheme, colorSchemeFn}: any) {
	return (
		<div className="theme-toggler">
			<img
				className="theme-toggler__icon-sun"
				src="/assets/icons/icon-sun.svg"
				alt=""
			/>
			<button
				className={`btn-theme-togler ${
					colorScheme === 'light' ? 'light' : 'dark'
				}`}
				onClick={colorSchemeFn}
				title="Change Color Theme"></button>
			<img
				className="theme-toggler__icon-moon"
				src="/assets/icons/icon-moon.svg"
				alt=""
			/>
		</div>
	);
}

export default ThemeToggler;
