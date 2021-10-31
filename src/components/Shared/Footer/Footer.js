import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const location = <i class="fas fa-map-marker-alt"></i>;
    const timeIcon = <i className="fas fa-history"></i>;
    const shoppingCart = <i class="fas fa-luggage-cart"></i>

    return (
        <>
            <div className="footer_container">
                <Container>
                    <div className="text-center text-white py-5">
                        <h1> Stay informed about special offers</h1>
                        <p style={{color: '#39B44A'}} className="text-decoration-underline fw-bold fs-5">Subscribe to the newsleter</p>
                        <div className="subscribe pt-3 pb-5">
                            <input className="p-2 rounded " type="email" placeholder="Enter Your Email" />
                            <button className="py-2 px-4 rounded"> Subscribe </button>
                        </div>
                    </div>



                    <Row className="g-5">
                        <div className="col-md-4 text-white">
                            <div className="text-center">
                                <h4 style={{color: '#39B44A'}}>LET’S GET TOGETHER</h4>
                            </div>
                            <div className="get_together">
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <div className="me-4">
                                        {location}
                                    </div>
                                    <div>
                                        <p className="m-0">55 East 70th Street, LD</p>
                                    </div>
                                </div>
                            </div>
                            <div className="get_together">
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <div className="me-4">
                                        {timeIcon}
                                    </div>
                                    <div>
                                        <p className="m-0">Mon - Sat: 11AM - 11PM <br /> Sun: 11AM - 08PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="get_together">
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <div className="me-4">
                                        {shoppingCart}
                                    </div>
                                    <div>
                                        <p className="m-0">Mon - Sat: 01PM - 10PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                        <div className="col-md-4 text-white">
                            <div className="text-center">
                                <h4 style={{color: '#39B44A'}}> About Us </h4>
                            </div>
                            <div className="about_us mt-4 text-center">
                                <Link to="#">Our Story</Link>
                                <Link to="#">Our Team</Link>
                                <Link to="#">Our Food</Link>
                                <Link to="#">Health Measures</Link>
                            </div>
                        </div>



                        <div className="col-md-4 text-white">
                            <div className="text-center">
                                <h4 style={{color: '#39B44A'}}> Social </h4>
                            </div>
                            <div className="about_us mt-4 text-center">
                                <Link to="#"> <i className="fab fa-facebook-f"></i> </Link>
                                <Link to="#"><i class="fab fa-instagram"></i></Link>
                                <Link to="#"><i class="fab fa-twitter"></i></Link>
                                <Link to="#"><i class="fab fa-google-plus-g"></i></Link>
                            </div>
                        </div>
                    </Row>

                </Container>
            </div>  
        </>
    );
};

export default Footer;