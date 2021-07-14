import './style.css';
import Logo from '../../molecules/logo/Logo';
import NavLinks from '../../molecules/navlinks/NavLinks';
import Search from '../../molecules/search/Search';
import { ReactElement } from 'react';

function Header():ReactElement {
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
