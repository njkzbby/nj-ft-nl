import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navibar.scss';



export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#" className='LogoName' >NJFTNL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={["me-auto", "font-large"]}>
                            <Nav.Link><Link to="/"> Home </Link></Nav.Link>
                            <Nav.Link><Link to="/users"> Users </Link></Nav.Link>
                            <Nav.Link><Link to="/about"> About </Link></Nav.Link>
                        </Nav>
                        <Nav className='justify-content-end'>
                            <Button className='btn-custom me-2'>Log In</Button>
                            <Button className='btn-custom'>Log Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
