import { Carousel } from "react-bootstrap"
import CardItem from "../cards/CardItem"
import "./carousel.scss"


const CarouselController = () => {
    return (
        <div className="carousel">
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}

export default CarouselController