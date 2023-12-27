import ThemeToggler from './ThemeToggler';
function Header({colorScheme, colorSchemeFn}: any) {
	return (
		<header className="l-header m-header-bkg">
			<div className="m-logo">
				<img
					src="/assets/logo.svg"
					alt="logo"
				/>
			</div>
			<ThemeToggler
				colorScheme={colorScheme}
				colorSchemeFn={colorSchemeFn}
			/>
		</header>
	);
}

export default Header;
