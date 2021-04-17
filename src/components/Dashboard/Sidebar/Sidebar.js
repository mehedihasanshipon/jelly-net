import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome,faCartPlus,faShoppingBag,faCommentDots,faPlus,faUserCog,faCogs } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon className="me-2" icon={faHome} /> Home
            </Link>
          </li>
          {!admin ? (
            <div>
              <li className="pb-2">
                <Link className="sidebar-menu"><FontAwesomeIcon className="me-2" icon={faCartPlus} /> Book</Link>
              </li>
              <li className="pb-3">
                <Link to="/dashboard" className="sidebar-menu">
                <FontAwesomeIcon className="me-2" icon={faShoppingBag} /> Booking list
                </Link>
              </li>
              <li className=" pb-3">
                <Link to="/addReview" className="sidebar-menu"><FontAwesomeIcon className="me-2" icon={faCommentDots} />Review</Link>
              </li>
            </div>
          ) : (
            <div>
              <li className=" pb-3">
                <Link to="/dashboard" className="sidebar-menu"> <FontAwesomeIcon className="me-2" icon={faCartPlus} />Order list</Link>
              </li>
              <li className=" pb-3">
                <Link to="/addService" className="sidebar-menu"> <FontAwesomeIcon className="me-2" icon={faPlus} />Add service list</Link>
              </li>
              <li className=" pb-3">
                <Link to="addAdmin" className="sidebar-menu">
                <FontAwesomeIcon className="me-2" icon={faUserCog} /> Make Admin
                </Link>
              </li>
              <li className=" pb-3">
                <Link to="/manageServices" className="sidebar-menu"><FontAwesomeIcon className="me-2" icon={faCogs} />Manage Service</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
