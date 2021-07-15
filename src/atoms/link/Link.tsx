import { AnchorHTMLAttributes } from 'react';
import './style.css';

interface linkProps extends AnchorHTMLAttributes<HTMLLinkElement> {
    className: string,
    children: string
}

export default function Link({className, children}:linkProps) {
    return(
        <a href="#" 
           className = {className}
        >
            {children}
        </a>
    )
}