import React from "react";
import { Container, Table } from "react-bootstrap";

const MyOrders = () => {
  return (
    <div>
      <Container>
        <h1>My Orders</h1>

        <Table responsive="sm" className="text-center">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>

              <th>phone Number</th>
              <th>Action</th>
              <th>payment</th>
              <th>Status</th>
            </tr>
          </thead>
          {/* maping hobe */}
          <tbody>
            <tr className="align-items-center">
              <td>Name</td>
              <td>Email</td>
              <td>Phone </td>
              <td>delete </td>
              <td>Payment </td>
              <td>done/pending </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MyOrders;
