import './style.css';

type InputProps = {
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