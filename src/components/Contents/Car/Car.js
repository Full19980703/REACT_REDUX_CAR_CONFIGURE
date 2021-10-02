import { Container, Row , Col} from "react-bootstrap"
import CarCarousel from "./Carousel/CarCarousel";
import CarAttribute from "./CarAttribute/CarAttribute";

const Car = () => {

    return (
        <>
        <Container fluid>
            <Row>
                <Col sm={12} xs={9} lg={9} style={{borderRight:'2px solid  #dfdfdf'}}>
                    <Row >
                        <CarCarousel />
                    </Row>
                    <Row>
                        <Col style={{borderRight:'2px solid #dfdfdf'}}>
                            <div className="custom_ability">371mi</div>
                            <div className="custom_unit">Range (EPA est.)</div>
                        </Col>
                        <Col style={{borderRight:'2px solid #dfdfdf'}}>
                            <div className="custom_ability">155mph</div>
                            <div className="custom_unit">Top Speed</div>
                        </Col>
                        <Col >
                            <div className="custom_ability">4.4s</div>
                            <div className="custom_unit">0-60 mph</div>
                        </Col>
                    </Row>
                    
                </Col>
                <Col sm={12} xs={3} lg={3}>
                    <CarAttribute />
                </Col>
            </Row>
            
        </Container>
            
        </>
    )
}

export default Car ;