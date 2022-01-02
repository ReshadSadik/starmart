import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

import './Banner.css'


const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-inline w-100 bannerimg"
      src="https://i.ibb.co/n7KdkJM/Abstract-background-of-yellow-and-green-twisting-cables.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='outline-warning bannerh1'>High Potential Products By Country</h1>
      <p className='bannerp'>Picked items for local tastes</p>
      <Button variant="outline-light">Explore More</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bannerimg"
      src="https://i.ibb.co/Mk1KrGX/photo-1505740420928-5e560c06d30e.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className='outline-warning bannerh1'>Popular Supplier</h1>
      <p className='bannerp'>Discover Popular Products</p>
      <Button variant="outline-light">Explore More</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bannerimg"
      src="https://i.ibb.co/JqHTcVk/photo-1512425406684-952ff74cb8d1.jpg"
      alt="Third slide"
    />


    <Carousel.Caption>
      <h1 className='outline-warning bannerh1'>Featured Marchants</h1>
      <p className='bannerp'>Discover Suppliers With Local Warehouses</p>
      <Button variant="outline-light">Explore More</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </>
   
    );
};

export default Banner;