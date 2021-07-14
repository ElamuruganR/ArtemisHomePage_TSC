import { HTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    style?: object,
    children: string
}

export default function Button(props : ButtonProps) {
    return(
        <button 
            className={props.className}
            style = {props.style}
        >
            {props.children}
        </button>
    )
}