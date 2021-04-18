import React from "react";
import { useHistory } from "react-router";

const ServiceCard = ({ service }) => {
  const history = useHistory();

  const handleClick = (id)=>{
    history.push(`/bookService/${id}`);
    // console.log(id);
  }

  console.log(service);
  return (
    <div className="col-md-6 col-lg-4 gx-4 gy-4">
      <div onClick={()=>handleClick(service._id)} className="service-card h-100 text-center p-4 serviceImg">
        <figure>
        <img
          style={{ height: "100px" }}
          className="img-fluid"
          src={`data:image/png;base64,${service.image.img}`}
          alt=""
        />
        </figure>
        <h4 >{service.name}</h4>
        <h6>$ {service.price} </h6>
        <p>{service.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
