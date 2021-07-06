import './slide.css';
import Image from '../../atoms/image/Image';
import SlideInfo from '../../molecules/slideinfo/SlideInfo';

export default function Slide({data}:{data:{id:number, title:string, imgSrc:string, info:string, btn1:string, btn2:string}}) {
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