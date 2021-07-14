import './style.css';

export default function Link({className, children}:{className:string, children:string}) {
    return(
        <a href="#" 
           className = {className}
        >
            {children}
        </a>
    )
}