import { Link } from "react-router-dom";
import { svgLogo } from "@/utils/SvgIcon";
import {useThemeStore} from "@/store/color.store.ts";

function Header() {
    const {color, toggleColorTheme} = useThemeStore()
  return (
    <header className="header header--bkg">
      <Link aria-label="dev-jobs logo" to="/">
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
            color === "light" ? "light" : "dark"
          }`}
          onClick={toggleColorTheme}
          title="Change Color Theme"
        ></button>
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
