import React, { useEffect, useState } from 'react';
import ManageServiceTable from '../ManageServiceTable/ManageServiceTable';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://arcane-earth-23452.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> {
            setServices(data);
        })
    },[])
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <h2>Manage list</h2>
               <div className="col-md-8">
                    <ManageServiceTable services={services} />
               </div>
            </div>
        </div>
    );
};

export default ManageService;