import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
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
  return (
    <div className="">
      <div className="sidebar">
        <ul className="list-unstyled p-4 ">
          <li className="pb-2">
            <Link to="/" className="sidebar-menu">
              Home
            </Link>
          </li>
          {!admin ? (
            <div>
              <li className="pb-2">
                <Link className="sidebar-menu">Book</Link>
              </li>
              <li className="pb-3">
                <Link to="/dashboard" className="sidebar-menu">
                  Booking list
                </Link>
              </li>
              <li className=" pb-3">
                <Link to="/addReview" className="sidebar-menu">Review</Link>
              </li>
            </div>
          ) : (
            <div>
              <li className=" pb-3">
                <Link className="sidebar-menu">Order list</Link>
              </li>
              <li className=" pb-3">
                <Link className="sidebar-menu">Add service list</Link>
              </li>
              <li className=" pb-3">
                <Link to="addAdmin" className="sidebar-menu">
                  Make Admin
                </Link>
              </li>
              <li className=" pb-3">
                <Link to="/manageServices" className="sidebar-menu">Manage Service</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
