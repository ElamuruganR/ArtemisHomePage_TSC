import './style.css';
import Image from '../../atoms/image/Image';
import { ReactElement } from 'react';

function Logo():ReactElement {
  return (
    <div className="logo">
            <Image 
                source="/images/menu.jpg" 
                altText="hamburger"
                className="menu-icon" />
            <Image 
                source="/images/discovery-logo.png" 
                altText="discovery-plus-logo" 
                className="discovery-logo"
             />
        </div>
  );
}

export default Logo;
