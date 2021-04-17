import React from 'react';

const OrderTable = ({orders}) => {
    console.log(orders);
    return (
        <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Status</th>
          {/* <th scope="col">Action</th> */}
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{order.data.name}</td>
            <td>{order.data.email}</td>
            <td>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
};

export default OrderTable;