import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css'


const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-inline w-100"
      src="https://i.ibb.co/n7KdkJM/Abstract-background-of-yellow-and-green-twisting-cables.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>first banner this is</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/Mk1KrGX/photo-1505740420928-5e560c06d30e.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/JqHTcVk/photo-1512425406684-952ff74cb8d1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </>
   
    );
};

export default Banner;