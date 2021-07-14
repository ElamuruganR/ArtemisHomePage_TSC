import './slide.css';
import Image from '../../atoms/image/Image';
import SlideInfo from '../../molecules/slideinfo/SlideInfo';

interface slideProps {
    data: {
        id: number,
        title: string,
        imgSrc: string,
        info: string,
        btn1: string,
        btn2: string
    }    
}

export default function Slide({data}:slideProps) {
    return (
        <a href="#" className="slide" key={data.id}>
            <SlideInfo data={data} />
            <div className="slide-image">
                <Image 
                    source={data.imgSrc}
                    altText={data.title}
                    className="carousel-img"
                />
            </div>
        </a>
    )
}