import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-gray-700">
        <div className="container  px-5 py-10 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left">
            <a
              href="/"
              className=" title-font font-medium items-center md:justify-start justify-center text-gray-900 mt-10"
            >
              <img className="w-36" src="" alt="" />
              <span className="ml-3 text-2xl text-orange-500 font-bold">
                STARMART
              </span>
            </a>
          </div>
          <div className="flex-grow flex justify-center items-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10  text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-orange-500 font-extrabold tracking-widest text-sm mb-3">
                HOME
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Reviews
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Listing
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-orange-500 font-extrabold tracking-widest text-sm mb-3">
                PRODUCTS
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    New Arrival
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Featured Products
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Top Seller
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-orange-500 font-extrabold tracking-widest text-sm mb-3">
                ABOUT US
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Contact Us
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Be an Admin?
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="container mx-auto text-center  py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white font-bold text-sm mx-auto ">
              © STARMART —
              <a href="/" className="text-orange-500 ml-1" target="_blank">
                @Team
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
