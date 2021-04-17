import React from 'react';

const TestimonialCard = ({review}) => {
    console.log(review);
    return (
        <div className="col-md-4 pt-5">
            <div className="testimonial-card text-center p-4 shadow">
            <img
          style={{ height: "100px" }}
          className="img-fluid"
          src={`data:image/png;base64,${review.image.img}`}
          alt=""
        />
                <p className="pt-2">{review.desc}</p>
                <h6>{review.name}</h6>
                <small>{review.designation}</small>
            </div>
        </div>
    );
};

export default TestimonialCard;