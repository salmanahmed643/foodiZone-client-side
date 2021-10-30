import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import banner from '../../../images/001.png';
import './Banner.css'


const Banner = () => {
    return (
        <>
          <Container className="mt-5">
            <Row className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <h1 className="d-inline">Express <br /> <span className="delivery_style px-3 d-inline-block m-3"> Home Delivery </span> </h1>
                        <p className="py-3 text-muted">
                            Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.
                        </p>
                        <div className="express_button">
                            <Button>
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </Row>
          </Container>  
        </>
    );
};

export default Banner;