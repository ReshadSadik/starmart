import React, { useEffect, useState } from 'react';
// import Service from '../Service/Service';
import './Services.css';
import Service from '../Service/Service';
import ReactPaginate from 'react-paginate';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    // const [pageCount, setPageCount ] = useState(0)
    // const [page, setPage] = useState(0);

    const [pageNumber, setPageNumber] = useState(0)

    const usersPerPage = 9
    const pagesVisited = pageNumber * usersPerPage

    const displayUsers = services.slice(pagesVisited, pagesVisited + usersPerPage)
    .map(service => <Service
        key={service.key}
        service={service}
    ></Service>)

    const pageCount = Math.ceil(services.length / usersPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data));
            // const count = 81;
            // const pageNumber = Math.ceil(count/10);
            // setPageCount(pageNumber)
            // console.log(pageNumber)

    }, [])

    

    return (
        <div id="services">
            <h1 className="text-warning mt-5 servicesh1">All Products</h1>
            <div className="service-container container-fluid">
                {/* {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                } */}

                {
                    displayUsers}
                    <ReactPaginate
                    
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount = {pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtn"}
                        previousLinkClassName={"prevBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                
            </div>



{/* 
            <div className="pagination">
                {
                    [...Array(pageCount).keys()]
                        .map((number) => (<button
                        className={number === page ? 'selected' : ''}
                        key={number}
                        onClick={() => setPage(number)}
                        >{number}</button>))
                }
            </div> */}

            
        </div>
    );
};

export default Services;