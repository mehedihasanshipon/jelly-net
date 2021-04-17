import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderCard from '../OrderCard/OrderCard';
import OrderTable from '../OrderTable/OrderTable';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([]);
    // console.log(orders);
    
    useEffect(() => {
        fetch("https://arcane-earth-23452.herokuapp.com/orderList", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: loggedInUser.email }),
        })
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, []);
    return (
        <div className="row">
            <div className="col-md-3 g-0">
                <Sidebar />
            </div>
            <div className="col-md-9 p-4 bg-light g-0">
                <h2 className="p-4">Order list</h2>
                <div className="container">
                {/* <OrderCard orders={orders} /> */}
                <OrderTable orders={orders} />
                </div>
            </div>
        </div>
    );
};

export default OrderList;