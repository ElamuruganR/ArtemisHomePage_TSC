import './style.css';

type ButtonProps = {
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