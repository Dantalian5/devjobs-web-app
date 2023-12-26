import ThemeToggler from "./ThemeToggler";
function Header() {
	return (
		<header className="l-header m-header-bkg">
			<div className="m-logo">
				<img
					src="/assets/logo.svg"
					alt="logo"
				/>
			</div>
			<ThemeToggler />
		</header>
	);
}

export default Header;
