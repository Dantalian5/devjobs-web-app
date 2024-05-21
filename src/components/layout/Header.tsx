import { Link } from 'react-router-dom';
import { useColorSchemeStore } from '@/store/colorScheme.store';
import { svgLogo } from '@/utils/SvgIcon';

function Header() {
  const { colorScheme, toggleColorScheme } = useColorSchemeStore();
  return (
    <header className='header header--bkg'>
      <Link to='/' aria-label='Dashboard'>
        <h1 className='main-logo' aria-label='DevJobs'>
          {svgLogo}
        </h1>
      </Link>
      <div className='theme-toggler'>
        <img
          className='theme-toggler__icon-sun'
          src='/assets/icons/icon-sun.svg'
          alt=''
        />
        <button
          className={`btn-theme-togler ${
            colorScheme === 'light' ? 'light' : 'dark'
          }`}
          onClick={toggleColorScheme}
          title='Change Color Theme'
        ></button>
        <img
          className='theme-toggler__icon-moon'
          src='/assets/icons/icon-moon.svg'
          alt=''
        />
      </div>
    </header>
  );
}

export default Header;
