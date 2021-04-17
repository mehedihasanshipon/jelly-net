import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddServices = () => {
  const [services, setServices] = useState({});
  const [image,setImage] = useState(null);

  const handleBlur = (e) => {
    const newService = { ...services };
    newService[e.target.name] = e.target.value;
    setServices(newService);
  };

  const handleImage = (e) => {
      const newImage = e.target.files[0];
      setImage(newImage);
  };

  const handleSubmit= (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('image',image);
    formData.append('name',services.name);
    formData.append('price',services.price);
    formData.append('desc',services.desc);

    fetch('http://localhost:3002/addService',{
        method: "POST",
        body: formData,
    })
    .then(res=>res.json())
    .then(data=>{
        if(data){
            console.log(data);
            alert("Service added successfully")
            e.target.reset();
        }
    }).catch(err => {
        console.log(err);
    })
  }
  return (
  
      <div className="row">
        <div className="col-md-3">
        <Sidebar />
        </div>
        <div className="col-md-9">
        <div className="col-md-6 mt-3">
          <h2>Add Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onBlur={handleBlur}
              name="name"
              placeholder="Service name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handleBlur}
              name="price"
              placeholder="Service price"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handleBlur}
              name="desc"
              placeholder="Service description"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleImage}
              placeholder="Service description"
              className="form-control"
              type="file"
            />
          </div>
          <input type="submit" value="Add service" />
        </form>
      </div>
        </div>
      </div>
   
  );
};

export default AddServices;
