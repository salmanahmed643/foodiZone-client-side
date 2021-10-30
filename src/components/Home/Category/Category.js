import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Category.css'

const Category = () => {
    return (
        <>
            <Container>
                <Row className="g-4 mt-5">
                    <div className="col-sm-6 col-lg-3">
                        <div className="food_category  d-flex justify-content-center align-items-center p-4 rounded-3">
                            <div className="food_icon me-4">
                                <i className="fas fa-hamburger"></i>
                            </div>
                            <div className="food_title">
                                <h4> Fast Food </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="food_category  d-flex justify-content-center align-items-center p-4 rounded-3">
                            <div className="food_icon me-4">
                                <i className="fas fa-pizza-slice"></i>
                            </div>
                            <div className="food_title">
                                <h4> Hot Pizza </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="food_category  d-flex justify-content-center align-items-center p-4 rounded-3">
                            <div className="food_icon me-4">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className="food_title">
                                <h4> Asian Food </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="food_category  d-flex justify-content-center align-items-center p-4 rounded-3">
                            <div className="food_icon me-4">
                                <i className="fas fa-cheese"></i>
                            </div>
                            <div className="food_title">
                                <h4> Raw Meat </h4>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Category;