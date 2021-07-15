import { InputHTMLAttributes } from 'react';
import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "number",
    placeholder: string,
    className: string
}

export default function Input({type, placeholder, className}:InputProps){
    return(
        <input 
            type={type}
            placeholder={placeholder}
            className={className}  
        />
    )
}