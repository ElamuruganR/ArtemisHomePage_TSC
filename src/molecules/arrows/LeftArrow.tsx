import './style.css';
import Image from '../../atoms/image/Image';
import {ArrowProps} from './ArrowProps';

export default function LeftArrow({handleClick, containerStyle, imgStyle}: ArrowProps) {
    return(
        <div className="arrow left" style={containerStyle}>
            <Image 
                source="/images/carousel/previous.png" 
                altText="prev" 
                className="img-arrow"
                style={{imgStyle}}
                handleClick= {handleClick}
            />
        </div>
    )
}