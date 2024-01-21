import {Link} from 'react-router-dom';
import {svgLogo} from '@/utils/SvgIcon';

interface Header {
	colorScheme: 'dark' | 'light';
	colorSchemeFn: () => void;
}
function Header({colorScheme, colorSchemeFn}: Header) {
	return (
		<header className="header header--bkg">
			<Link to="/">
				<div className="main-logo">{svgLogo}</div>
			</Link>
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
		</header>
	);
}

export default Header;
