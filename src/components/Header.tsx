import ThemeToggler from './ThemeToggler';
import {Link} from 'react-router-dom';
function Header({colorScheme, colorSchemeFn}: any) {
	return (
		<header className="l-header m-header-bkg">
			<Link to="/">
				<div className="m-logo">
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
