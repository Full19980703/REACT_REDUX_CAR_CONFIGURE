
import { Container , Row , Col  , Button } from "react-bootstrap";

import PropTypes from 'prop-types';
import { connect } from "react-redux";

import './Footer.css' ;

const Footer = (props) => {
   
    const { isPrev , isNext} = props.cur_page ;
    return (
        <>
            {/* <Navbar fixed="bottom" expand="lg"> */}
                <Container fluid>
                    <Row className="custom_row">
                        <Col className="custom_previous">
                            <Button disabled={!isPrev} variant="danger" className="custom_button" >Previous</Button>
                        </Col>
                        <Col >
                            <div style={{fontSize:'20px' , color:'white'}}>$79,900</div>
                        </Col>
                        <Col className="custom_next">
                            <Button disabled={!isNext} variant="danger" className="custom_button">Next</Button>
                        </Col>
                    </Row>
                </Container>
            {/* </Navbar> */}
        </>
    )
}

Footer.propTypes = {
    cur_page : PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cur_page : state.pages 
    }
}

export default connect( mapStateToProps , null )(Footer) ;