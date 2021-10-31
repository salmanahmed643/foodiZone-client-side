import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar expand="lg" className="header_container">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <span className="header_logo"> <span className="foodi">Foodi</span><span className="zone">zone</span> </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav_bar justify-content-center align-items-center">
                            <Nav.Link as={Link} active to="/home">Home <span className="navbar_icon"><i className="fas fa-chevron-right"></i></span> </Nav.Link>
                            <Nav.Link as={Link} to="/category"> Category <span className="navbar_icon"><i className="fas fa-chevron-right"></i></span> </Nav.Link>
                            <Nav.Link as={Link} to="/foods"> Foods <span className="navbar_icon"><i className="fas fa-chevron-right"></i></span> </Nav.Link>
                            <Nav.Link as={Link} to="/restaurants"> Restaurants <span className="navbar_icon"><i className="fas fa-chevron-right"></i></span> </Nav.Link>

                            <Nav style={{color: '#39B44A'}} className="px-3 fw-bold">
                                {user?.displayName}
                            </Nav>
                            {
                                user?.email ?
                                <button className="Login_button" onClick={logOut}> Logout </button> 
                                :
                                <Nav.Link as={Link} to="/login"> 
                                <Button className="Login_button">
                                    Login
                                </Button>
                                </Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
};

export default Header;