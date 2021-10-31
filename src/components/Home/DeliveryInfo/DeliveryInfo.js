import React from 'react';
import './DeliveryInfo.css';
import delivaryImg from '../../../images/002.jpg'
import { Container, Row } from 'react-bootstrap';

const DeliveryInfo = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-center align-items-center">

                    <div className="col-md-6 text-center">
                        <h1 className="mb-4">
                            Sit at Home <br /> 
                            <span className="fw-bold" style={{color: "#39B44A"}}>We Will Take Care</span> 
                        </h1>
                        <p>
                            Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.
                        </p>


                        <div>
                            <Row className="gx-2 mt-4">
                                <div className="col-md-6 col-lg-3 delivery_info">
                                    <div className="delivary_icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="delivary_time">
                                        <h5>
                                            Fast Delivery <br /> in 1 Hour
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 delivery_info">
                                    <div className="delivary_icon">
                                        <i className="fas fa-mobile"></i>
                                    </div>
                                    <div className="delivary_time">
                                        <h5>
                                            Amazing <br /> Mobile App
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 delivery_info">
                                    <div className="delivary_icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="delivary_time">
                                        <h5>
                                            Wide <br /> Coverage Map
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 delivery_info">
                                    <div className="delivary_icon">
                                        <i class="fas fa-user-injured"></i>
                                    </div>
                                    <div className="delivary_time">
                                        <h5>
                                            More Then <br /> 150 Couriers
                                        </h5>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <img src={delivaryImg} className="img-fluid" alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default DeliveryInfo;