
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';




const Service = ({ service }) => {
    // const {service} = props;
    const {key, name, img, wholePrice } = service;
   
    return (
        <div className="service pb-3">
            <div className='card'>
            <img src={img} alt="" className='img-fluid'/>
            <h3>{name}</h3>
            <h3>{wholePrice} $</h3>
            <Button variant="warning">Add to cart</Button>{' '}
            </div>
          
        </div>
    );
};

export default Service;