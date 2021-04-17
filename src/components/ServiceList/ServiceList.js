import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://arcane-earth-23452.herokuapp.com/serviceList?email='+loggedInUser.email,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        .then(res=>res.json())
            .then(data=>{
                setServices(data);
            })
        
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h2>Service list</h2>
                    {
                        services.map(service => <li>{service.data.paymentId}</li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;