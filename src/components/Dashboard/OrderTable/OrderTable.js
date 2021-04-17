import { Dropdown } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const OrderTable = ({ orders }) => {
  console.log(orders);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setIsAdmin] = useState(false);
  // console.log(admin);

  useEffect(() => {
    fetch("http://localhost:3002/isAdmin", {
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


    fetch("http://localhost:3002/update/:id", {
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
            {/* <td>{order._id}</td> */}
            {admin ? (
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
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

                {/* <select onChange={() => handleUpdateStatus(order._id)} className="form-select" >
                <option onClick={()=>{
                  console.log("Button");
                }} value="1">Done</option>
                <option  value="2">Pending</option>
                <option  value="3">Ongoing</option>
            </select> */}
                {/* <button value="1" onClick={() => handleUpdateStatus(order._id)}>Done</button>
            <button value="2" onClick={() => handleUpdateStatus(order._id)}>Pending</button>
            <button value="3" onClick={() => handleUpdateStatus(order._id)}>Ongoing</button> */}
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
