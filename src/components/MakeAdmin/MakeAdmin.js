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
        fetch('https://arcane-earth-23452.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(admin)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            alert("Admin added");
            e.target.reset();
        })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-6 my-5">
                <h2>Make Admin</h2>
                <form onSubmit={handleAddAdmin}>
                    <div className="mb-3">
                        <input className="form-control" name="name" onBlur={handleBlur} placeholder="Email" type="text"/>
                    </div>
                    <input type="submit" value="Add admin"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;