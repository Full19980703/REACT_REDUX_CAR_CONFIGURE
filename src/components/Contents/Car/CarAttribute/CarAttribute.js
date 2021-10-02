
import { Container, Row , Col , Button} from "react-bootstrap"
import './CarAttribute.css' ;

const CarAttribute = () => {

    return (
        <>
            <Container>
                <Row >
                    <Col className="custom_attribute">
                        <div style={{fontSize:'30px' , fontWeight:'bold'}}>Select Car</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <Button variant="outline-danger" className="button_model">Model S</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <Button variant="outline-danger" className="button_model">Model X</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <Button variant="outline-danger" className="button_model">Model Y</Button>
                    </Col>
                </Row>

                <Row>
                    <Col className="custom_attribute">
                        <div style={{fontSize:'30px' , fontWeight:'bold'}}>Select Types</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <p>
                            All cars have Dual Moter All-Wheel Drive, adaptive air suspension, premium interior and sound.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <Button variant="outline-danger" className="button_model">Long Range Plus</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <Button variant="outline-danger" className="button_model">Performance</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <Button variant="outline-danger" className="button_model">Plaid</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="custom_attribute">
                        <p>
                            Tesla All-Whell Drive has two independent motors that digitally control
                            torque to the fron and rear wheels-for better handling and traction
                            control. Your car can drive on either motor, so you don't need to worry 
                            about getting stuck on the road
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CarAttribute ;