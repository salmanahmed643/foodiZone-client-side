import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './OrderPlace.css'

const OrderPlace = () => {
    const {orderId} = useParams();
    const [order, setOrder] = useState([]);

    const {name, img, price} = order;

    useEffect( () => {
        fetch(`http://localhost:7000/foods/${orderId}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, []);


    const handleOrder = () => {
        alert("Order Completed");
    }

    return (
        <>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <img className="w-75" src={img} alt="" />
                        </div>
                        <div className="text-center">
                            <h4> {name} </h4>
                            <h6> Price ${price} </h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="order_details text-center">
                            <h1 className="mb-5"> Order Place </h1>
                            <input type="text" placeholder="Name" /> <br />
                            <input type="text" placeholder="Address" /> <br />
                            <input type="text" placeholder="City" /> <br />
                            <input type="tel" placeholder="Phone Number" />
                            <div className="order_completed">
                                <Button onClick={handleOrder}> Order Completed </Button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>  
        </>
    );
};

export default OrderPlace;