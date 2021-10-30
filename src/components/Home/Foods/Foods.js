import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, []);
    return (
        <>
            <Container className="mt-5">
                <div className="text-center my-5">
                    <h1> Our Menu </h1>
                </div>
                <Row className="g-3 justify-content-center align-items-center">
                    {
                        foods.map(food => <Food 
                            key={food._id}
                            food={food}
                            ></Food>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Foods;