import React from 'react';
import aboutImg from '../../../assests/images/about_banner_pic.png';
import { AiFillCheckCircle } from 'react-icons/ai';
const About = () => {
  return (
    <div className="my-24">
      <section class="container">
        <div class="row">
          <div class="col-lg-6">
            <h6 class="text-orange-500 text-xl font-bold">About Us</h6>
            <h1 className="xl:text-4xl text-2xl font-bold xl:text-left text-center ">
              We are the best online marketplace for all your daily needs
              everyday!
            </h1>
            <p className="my-10 font-bold text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consectetur, beatae quod eaque reprehenderit non ab quibusdam
              doloribus voluptatibus! Voluptatum aspernatur quasi id dolore
              doloremque quo vero
            </p>
            <ul class="list-group list-group-flush text-left font-bold ">
              <li class="list-group-item flex items-center text-gray-500 ">
                <AiFillCheckCircle className="mx-10 text-blue-500"></AiFillCheckCircle>
                All Verified Seller
              </li>
              <li class="list-group-item flex items-center text-gray-500">
                <AiFillCheckCircle className="mx-10 text-blue-500"></AiFillCheckCircle>
                24 hours fastest delivery
              </li>
              <li class="list-group-item flex items-center text-gray-500">
                <AiFillCheckCircle className="mx-10 text-blue-500"></AiFillCheckCircle>
                Money back guarantee
              </li>
              <li class="list-group-item flex items-center text-gray-500">
                <AiFillCheckCircle className="mx-10 text-blue-500"></AiFillCheckCircle>
                Customer support
              </li>
              <li class="list-group-item flex items-center text-gray-500">
                <AiFillCheckCircle className="mx-10 text-blue-500"></AiFillCheckCircle>
                Marketing Products
              </li>
            </ul>
            <button class="btn bg-orange-500 text-white m-3">Order Now!</button>
          </div>
          <div class="col-lg-6">
            <img src={aboutImg} class="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
