import ThemeToggler from './ThemeToggler';
import {Link} from 'react-router-dom';
function Header({colorScheme, colorSchemeFn}: any) {
	return (
		<header className="header header--bkg">
			<Link to="/">
				<div className="main-logo">
					<img
						src="/assets/logo.svg"
						alt="logo"
					/>
				</div>
			</Link>

			<ThemeToggler
				colorScheme={colorScheme}
				colorSchemeFn={colorSchemeFn}
			/>
		</header>
	);
}

export default Header;
