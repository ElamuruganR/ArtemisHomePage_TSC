import './style.css';
import Image from '../../atoms/image/Image';
import {ArrowProps} from './ArrowProps';

export default function RightArrow({handleClick, containerStyle, imgStyle} : ArrowProps) {
    return(
        <div className="arrow right" style={containerStyle}>
            <Image 
                source="/images/carousel/next.png" 
                altText="next" 
                className="img-arrow"
                style={imgStyle}
                handleClick= {handleClick}
            />
        </div>
    )
}