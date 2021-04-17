import React, { useState } from "react";
import Stripe from "../Stripe/Stripe/Stripe";
import { useForm } from "react-hook-form";

const BookForm = ({ service }) => {
  const [orders, setOrders] = useState(null);
  console.log(orders);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    setOrders(data);
  };
  //   console.log(service);
  return (
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center form-left  pt-5">
        
        <div className="">
       
            <h4>Your Service</h4>
            <hr/>
            <h6>Service name: {service.name} </h6>
            <h6>Total cost: {service.price} </h6>
            
        </div>
      </div>
      <div className="col-md-8 form-right">
      <div
        style={{ display: orders ? "none" : "block" }}
        className="col-md-10 p-5 mx-auto"
      >
        <h2 className="text-center pb-4">Book your Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {errors.name && <span style={{color:'red'}}>This field is required</span>}
          </div>

          <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email && <span style={{color:'red'}}>This field is required</span>}
          </div>

          <div className="mb-3">
          <label htmlFor="service" className="form-label">Your service here</label>
            <input
              className="form-control"
              value={service.name}
              type="text"
              {...register("service", { required: true })}
              placeholder="email"
            />
            {errors.service && <span style={{color:'red'}}>This field is required</span>}
          </div>
          <input className="form-control book-btn" type="submit"  value="Next &#8594;"/>
        </form>
        
      </div>

      <div className="p-5 m-5" style={{ display: orders ? "block" : "none" }}>
        <Stripe orders={orders} />
      </div>
      </div>
    </div>
  );
};

export default BookForm;
