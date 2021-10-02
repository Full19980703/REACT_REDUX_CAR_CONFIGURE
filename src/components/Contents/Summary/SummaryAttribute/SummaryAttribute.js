
import { Container, Row , Col } from "react-bootstrap"
import './SummaryAttribute.css' ;

const SummaryAttribute = () => {

    return (
        <>
            <Container >
                <Row style={{marginTop:'50px'}}>
                    <Col>
                        <div style={{fontSize:'30px' , fontWeight:'bold'}}>Your Model S</div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <div><u>Estimated delivery: 5-9 weeks</u></div>
                    </Col>
                </Row>
                <Row>
                    <div className="summary-content">
                        <p>Summary</p>
                        <ul>
                            <li>
                                <span>Model S Long Range Plus</span>
                                <span>$69,420</span>
                            </li>
                            <li>
                                <span>Pearl White Multi-Coat</span>
                                <span>included</span>
                            </li>
                            <li>
                                <span>19" Tempest Wheels</span>
                                <span>included</span>
                            </li>
                            <li>
                                <span>All black Figured Ash Wood Décor</span>
                                <span>included</span>
                            </li>
                            <li>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                        <p>
                            <span>Total price</span>
                            <span>$69,420</span>
                        </p>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default SummaryAttribute ;