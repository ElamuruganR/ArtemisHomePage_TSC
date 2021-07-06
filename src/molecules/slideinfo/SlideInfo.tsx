import './style.css';
import Image from '../../atoms/image/Image';
import Button from '../../atoms/button/Button';

type SlideInfoProps = {
    data: {title:string, info:string, btn1:string, btn2:string}
}

export default function SlideInfo({data}:SlideInfoProps) {
    return (
        <div className="slide-details">
            <div className="title">{data.title}</div>
            <div className="info">{data.info}</div>
            <div className="btns">
                <Button>{data.btn1}</Button>
                <Button>{data.btn2}</Button>
            </div>
            <div className="play-btn">
                <Image source="/images/carousel/play-button.png" altText="play-btn" className="play-btn-img" />
                <div className="text">Play</div>
            </div>
        </div>
    )
}