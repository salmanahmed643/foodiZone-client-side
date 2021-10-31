import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';


const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);


    useEffect( () => {
        fetch('https://agile-journey-44288.herokuapp.com/restaurants')
        .then(res => res.json())
        .then(data => setRestaurants(data))
    }, []);
    
    return (
        <>
            <Container style={{marginBottom: "100px"}}>
                <Row className="g-4 justify-content-center">
                    <div className="text-center p-5">
                        <h1>Our Cafes & Restaurants</h1>
                    </div>
                    {
                        restaurants.map(restaurant => <Restaurant
                            key={restaurant._id}
                            restaurant={restaurant}
                        ></Restaurant>)
                    }
                </Row>
            </Container>  
        </>
    );
};

export default Restaurants;