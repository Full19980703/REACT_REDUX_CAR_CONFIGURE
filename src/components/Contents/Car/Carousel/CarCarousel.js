
import { Carousel } from "react-bootstrap"
import './CarCarousel.css' ;

const CarCarousel = () => {
    return (
        <>
        <Carousel nextIcon={<span aria-hidden="true" className="carousel-control-next-icon"/>} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
                        
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="./assets/cars/model_s_white_wheel_1.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/cars/model_x_white_wheel_1.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/cars/model_y_white_wheel_1.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
    )
}

export default CarCarousel ;