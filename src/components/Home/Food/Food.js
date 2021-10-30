import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = props => {
    const {name, price, img, description, _id} = props.food
    return (
        <>
            
        <CardGroup className="col-lg-3 col-md-4 col-sm-6 text-center">
            <Card className="food_container">
                <Card.Img className="food_img" variant="top" src={img} />
                <Card.Body className="mt-2 h-100">
                    <Card.Title>
                        <p className="food_title fw-bold"> {name} </p>
                    </Card.Title>
                    <div>
                        <h5 className="fw-bold mt-3"> Price ${price} </h5>
                        </div>
                    <Card.Text>
                        <p className="text-muted">{description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-transparent mb-3'>
                    <Link to={`/orderplace/${_id}`}>
                        <div className="add_to_cart_button text-center">
                            <Button > Add To Cart </Button>
                        </div>
                    </Link>
                </Card.Footer>
            </Card>
        </CardGroup>
        </>
    );
};

export default Food;


