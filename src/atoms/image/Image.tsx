import React from 'react';
import './style.css';

interface ImageProps {
    source: string,
    altText: string,
    className: string,
    style?: object,
    handleClick?: ()=>void
}

export default function Image(props:ImageProps){
    return(
        <img
            src= {props.source}
            alt={props.altText}
            className={props.className}
            style= {props.style}
            onClick={props.handleClick} 
        />
    )
}