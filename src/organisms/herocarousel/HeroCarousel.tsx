import { useEffect,  useState } from 'react';
import './herocarousel.css';
import {carouselData as data} from '../../testdata/data';
import Slide from './Slide';
import LeftArrow from '../../molecules/arrows/LeftArrow';
import RightArrow from '../../molecules/arrows/RightArrow';

enum Direction {
    Right=-1,
    None,
    Left
}

export default function HeroCarousel(){
    
    const [index, setIndex] = useState<number>(0);
    const [direction, setDirection] = useState<Direction.Left | Direction.None |Direction.Right>(0);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const slider = document.querySelector(".slider") as HTMLDivElement;
    const carousel = document.querySelector('.carousel-container') as HTMLDivElement;

    const handleLeftClick = ():void => {
        if(direction === Direction.Right) {
            slider.appendChild(slider.firstElementChild as HTMLAnchorElement);
        }

        setDirection(Direction.Left);
        carousel.style.justifyContent = "flex-end";
        index===0 ? setIndex(3) : setIndex(prevIndex => prevIndex-1);
    }

    const handleRightClick = ():void => {
        if(direction === Direction.Left) {
            slider.prepend(slider.lastElementChild as HTMLAnchorElement);
        }

        setDirection(Direction.Right);
        carousel.style.justifyContent = "flex-start";
        index===3 ? setIndex(0) : setIndex(prevIndex => prevIndex+1);
    }

    const handleIndicators = (ind:number):void => {
        updateIndicators(ind);
        setIndex(ind);
    }

    const updateIndicators = (ind:number):void => {
        document.querySelector(".controls ul li.selected")!.classList.remove("selected");
        document.querySelector(`.controls ul li.ind${ind}`)!.classList.add("selected");
    }

    const handleTransitionEnd = ():void => {
        if(direction === Direction.Right) {
            slider.appendChild(slider.firstElementChild as HTMLAnchorElement);
        } else if(direction === Direction.Left) {
            slider.prepend(slider.lastElementChild as HTMLAnchorElement);
        }
        slider.style.transition = 'none';
        slider.style.transform = "translate(0)";
        setTimeout(()=>{
            slider.style.transition = 'all 0.5s';
        })
    }

    useEffect(() => {
        if(!isMounted){
            setIsMounted(true);
            return;
        }
        slider.style.transform = `translate(${direction===-1 ? -25 : 25}%)`;
        updateIndicators(index);
    }, [index])
    
    useEffect(()=>{
        //AutoSlide
        let autoSlide = setTimeout(()=>{handleRightClick()}, 3000);
        return ()=>clearTimeout(autoSlide);
    })

    return(
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <div className="slider" onTransitionEnd={handleTransitionEnd} >
                    {
                        data.map((slideData)=>{
                            console.log(slideData.title);
                            return (
                                <Slide data={slideData}/>
                            )
                        })
                    }
                </div>
                <div className="controls">
                    <LeftArrow 
                        handleClick={handleLeftClick}
                    />
                    <RightArrow 
                        handleClick={handleRightClick}
                    />
                    <ul>
                        {data.map((slideData, i)=>{
                           return <li className={i===0 ?`ind${i} selected` : `ind${i}`} onClick={()=>handleIndicators(i)}></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}