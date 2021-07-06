import './style.css';

type TextProps = {
    type: "text" | "number",
    placeholder: string,
    className: string
}

export default function Text({type, placeholder, className}:TextProps){
    return(
        <input 
            type={type}
            placeholder={placeholder}
            className={className}  
        />
    )
}