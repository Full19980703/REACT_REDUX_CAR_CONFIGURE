
import { Link } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './Header.css' ;

import { Navbar ,Container , Nav } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sel_nav_item } from '../../actions/pages';

const Header = (props) => {
    // window.alert(props.cur_page.isNext) ;

    const onClickNavItem = (cur_page) => {
        props.onSelNavItem(cur_page.item) ;
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="custom_navbar">
            <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    width="150"
                    src="/logo.svg"
                    className="d-inline-block align-top"
                    style={{ marginLeft:'25%' }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Link to="/cars" className="custom_navitem" onClick={() => onClickNavItem({
                        item : 1 ,
                        isPrev : false ,
                        isNext : true ,
                    })}>
                         1. Car 
                    </Link>
                    <Link to="/exterior" className="custom_navitem" onClick={() => onClickNavItem({
                        item : 2 ,
                        isPrev : true ,
                        isNext : true ,
                    })}> 
                        2. Exterior
                    </Link>
                    <Link to="/summary" className="custom_navitem" onClick={() => onClickNavItem({
                        item : 3 ,
                        isPrev : true ,
                        isNext : false ,
                    })}> 
                        3. Summary 
                    </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

Header.propTypes = {
    onSelNavItem : PropTypes.func.isRequired ,
    cur_page : PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cur_page : state.pages
    }
}
const mapActionsToProps = {
    onSelNavItem : sel_nav_item
}

export default connect( mapStateToProps , mapActionsToProps )(Header)