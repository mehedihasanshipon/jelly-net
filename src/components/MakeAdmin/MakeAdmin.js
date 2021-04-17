import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';



const MakeAdmin = () => {

    const [admin,setAdmin] = useState({});
    console.log(admin);

    const handleBlur = (e)=>{
        // console.log(e.target.value);
        const newInfo = {...admin};
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }
    
    const handleAddAdmin = (e)=> {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('admin',admin)
        fetch('http://localhost:3002/addAdmin',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(admin)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
        })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-6 my-5">
                <form onSubmit={handleAddAdmin}>
                    <div className="mb-3">
                        <input name="name" onBlur={handleBlur} type="text"/>
                    </div>
                    <input type="submit" value="Add admin"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;