import { Carousel } from "react-bootstrap"
import CardItem from "../cards/CardItem"
import "./carousel.scss"
import { useState } from "react";


const CarouselController = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="carousel">
            <Carousel.Item
                className={`d-block w-100 custom-slide ${activeIndex === 1 ? 'active-slide' : 'blur-slide'}`}>
                <CardItem />
            </Carousel.Item>
            <Carousel.Item
                className={`d-block w-100 custom-slide ${activeIndex === 0 ? 'active-slide' : 'blur-slide'}`}>
                <CardItem />
            </Carousel.Item>
            <Carousel.Item
                className={`d-block w-100 custom-slide ${activeIndex === 2 ? 'active-slide' : 'blur-slide'}`}>
                <CardItem />
            </Carousel.Item>
            {/* <div className="carousel-inner">
                <div className=" carousel_item">
                    <CardItem />
                </div>
                <div className=" carousel_item">
                    <CardItem />
                </div>
                <div className=" carousel_item">
                    <CardItem />
                </div>
            </div> */}

        </div>
    )
}

export default CarouselController