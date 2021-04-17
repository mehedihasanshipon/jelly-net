import { Dropdown } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const OrderTable = ({ orders }) => {
  console.log(orders);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setIsAdmin] = useState(false);
  // console.log(admin);

  useEffect(() => {
    fetch("https://arcane-earth-23452.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  const handleUpdateStatus = (id, status) => {
    // console.log(e.target.id);
    console.log(id);
    console.log(status);
    const something = { id, status };
    // const formData = new FormData();
    // formData.append('status',status);


    fetch("https://arcane-earth-23452.herokuapp.com/update/:id", {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body:JSON.stringify(something)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Service</th>
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
            <td>{order.data.service}</td>
            {/* <td>{order._id}</td> */}
            {admin ? (
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Change Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleUpdateStatus(order._id, "Done")}
                    >
                      Done
                    </Dropdown.Item>
                    <Dropdown.Item  onClick={() => handleUpdateStatus(order._id, "Pending")}>Pending</Dropdown.Item>
                    <Dropdown.Item  onClick={() => handleUpdateStatus(order._id, "Ongoing")}>Ongoing</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                
              </td>
            ) : (
              <td>{order.data.status}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
