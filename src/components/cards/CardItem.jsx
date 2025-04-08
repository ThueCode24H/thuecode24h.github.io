import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./card.scss"
import imgCard from "~/assets/831102fd-64d2-4bf5-88c0-598eecc3.jpg"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Card } from "react-bootstrap"

const CardItem = (props) => {



    return (
        <Card>
            <Card.Img variant="top" src={imgCard} />
            <Card.Body>
                <Card.Title>Ninh Hoang Khai</Card.Title>
                <div className="card_btn">
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardItem
