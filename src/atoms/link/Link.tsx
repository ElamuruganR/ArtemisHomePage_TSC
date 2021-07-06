import './style.css';

export default function Link(props:{className:string, children:string}) {
    return(
        <a href="#" 
           className = {props.className}
        >
            {props.children}
        </a>
    )
}