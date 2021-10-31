import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import Foods from '../Foods/Foods';
import Restaurants from '../Restaurants/Restaurants';

const Home = () => {
    return (
        <>
          <Banner></Banner>
          <Category></Category>
          <Foods></Foods>
          <DeliveryInfo></DeliveryInfo>
          <Restaurants></Restaurants>
        </>
    );
};

export default Home;