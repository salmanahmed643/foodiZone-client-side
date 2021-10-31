import React from 'react';
import './Restaurant.css'

const Restaurant = props => {
    const {name, day, time, img} = props.restaurant;
    const dayIcon = <i className="far fa-calendar-alt"></i>;
    const timeIcon = <i className="fas fa-history"></i>;
    const longArrowicon = <i class="fas fa-long-arrow-alt-right"></i>;

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 restaurant">
                <div className="restaurant_img overflow-hidden">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="restaurant_info">
                    <div className="text-center">
                        <h5 style={{color: '#39B44A'}}> {name} </h5>
                    </div>
                    <div className="ps-3">
                        <p className="py-3 px-3 m-0"> {dayIcon} {day} </p>
                        <div className="d-flex align-items-center justify-content-between px-3">
                            <div>
                                <span className="d-block"> {timeIcon} {time} </span>
                            </div>
                            <div className="arrow_long">
                                {longArrowicon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Restaurant;