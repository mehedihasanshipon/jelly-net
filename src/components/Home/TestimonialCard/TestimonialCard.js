import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ review }) => {
  console.log(review);
  return (
    <div className="col-md-6 col-lg-4 ">
      <div className="review-card">
        
        <img
          className="img-fluid"
          src={`data:image/png;base64,${review.image.img}`}
          alt=""
        />
        <div className="bottom-box">
          <blockquote>
            <p className="pt-2">{review.desc}</p>
          </blockquote>
          <div className="test-details">
            <p>
              <span>{review.name}</span> <br /> {review.designation}
            </p>
          </div>
        </div>

        {/* <div className="testimonial-card text-center p-4 shadow">
         
          
          
          <small></small>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
