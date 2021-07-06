import './style.css';
import Logo from '../../molecules/logo/Logo';
import NavLinks from '../../molecules/navlinks/NavLinks';
import Search from '../../molecules/search/Search';

function Header() {
  return (
    <div className="header">
        <div className="header-wrapper">
            <Logo />
            <NavLinks />
            <Search />
        </div>
    </div>
  );
}

export default Header;
