import { Container, Row , Col} from "react-bootstrap"
import SummaryAttribute from "./SummaryAttribute/SummaryAttribute";

const Summary = () => {

    return (
        <>
        <Container fluid>
            <Row>
                <Col sm={12} xs={12} lg={9} style={{borderRight:'2px solid #dfdfdf'}}>
                    <Row>
                        <img src='./assets/cars/model_s_white_wheel_1.png' alt=""></img>
                    </Row>
                </Col>
                <Col sm={12} xs={12} lg={3}>
                    <SummaryAttribute />
                </Col>
            </Row>
            
        </Container>
            
        </>
    )
}

export default Summary ;