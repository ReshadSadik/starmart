import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import { HashLink } from "react-router-hash-link";

const DashboardContainer = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#EB7C00" }}
        expand={false}
        className="p-lg-3 p-md-3 sticky-top"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand as={HashLink} to="/home" className="fs-2">
            Smart Mart
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                DashBoard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <>
                  {/* <Nav.Link as={HashLink} to="/" className="">
                    Home
                  </Nav.Link> */}
                  <Nav.Link as={HashLink} to="/dashboard/myOrders" className="">
                    My Orders
                  </Nav.Link>

                  <Nav.Link
                    as={HashLink}
                    to={`/dashboard/makePayment`}
                    className=""
                  >
                    Make Payment
                  </Nav.Link>
                  <Nav.Link
                    as={HashLink}
                    to={`/dashboard/addReview`}
                    className=""
                  >
                    Add Review
                  </Nav.Link>

                  {/* <Navbar.Text>
                    <span style={{ cursor: "pointer " }}>LogOut</span>
                  </Navbar.Text> */}
                </>

                <>
                  {/* <Nav.Link as={HashLink} to="/" className="">
                    Home
                  </Nav.Link> */}
                  <Nav.Link as={HashLink} to={`/dashboard/makeAdmin`}>
                    Make Admin
                  </Nav.Link>
                  <Nav.Link as={HashLink} to={`/dashboard/manageOrders`}>
                    Manage Orders
                  </Nav.Link>
                  <Nav.Link as={HashLink} to={`/dashboard/manageProducts`}>
                    Manage products
                  </Nav.Link>
                  <Nav.Link as={HashLink} to={`/dashboard/addProducts`}>
                    Add products
                  </Nav.Link>
                  <Nav.Link as={HashLink} to={`/dashboard/manageReviews`}>
                    Manage Reviews
                  </Nav.Link>

                  <Navbar.Text>
                    <span style={{ cursor: "pointer " }}>LogOut</span>
                  </Navbar.Text>
                </>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default DashboardContainer;
