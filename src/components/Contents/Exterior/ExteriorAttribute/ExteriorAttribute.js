
import { Container, Row , Col } from "react-bootstrap"
import './ExteriorAttribute.css' ;

const ExteriorAttribute = () => {

    return (
        <>
            <Container >
                <Row >
                    <Col >
                        <div style={{fontSize:'30px' , fontWeight:'bold'}}>Select Color</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div  className="option color-option active">
                            <div className="white" title="Pearl White Multi-Coat"></div>
                        </div>
                    </Col>    
                    <Col>    
                        <div  className="option color-option">
                            <div className="black" title="Solid Black"></div>
                        </div>
                    </Col>
                    <Col>
                        <div  className="option color-option">
                            <div className="silver" title="Midnight Silver Metallic"></div>
                        </div>
                    </Col>
                    <Col>
                        <div  className="option color-option">
                            <div className="blue" title="Deep Blue Metallic"></div>
                        </div>
                    </Col>
                    <Col>
                        <div  className="option color-option">
                            <div className="red" title="Red Multi-Coat"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div style={{fontSize:'30px' , fontWeight:'bold'}}>Select Wheels</div>
                    </Col>
                </Row>
                <Row className="settings-options settings-options-image">
                    <Col>
                        <div  className="option image-option active">
                            <img src="/wheels/model_x/model_x_wheel_1.png" alt=""/>
                        </div>
                    </Col>
                    <Col>
                        <div  className="option image-option">
                            <img src="/wheels/model_x/model_x_wheel_2.png" alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExteriorAttribute ;