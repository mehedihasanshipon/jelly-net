import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';
import client1 from '../../../images/woman.jpg';

// const reviewData = [
//     {
//         image:client1,
//         name:'Catherine McNally',
//         review:'We compared price, availability and connection type, download speed, and customer service scores for dozens of large internet service providers (ISPs) in the US. And we found Comcast Xfinity to be the best value, while Verizon Fios Home Internet was our Editor’s Choice for its excellent internet speeds.',
//         designation:'Sr. Writer, Internet & Gaming'
//     },
//     {
//         image:client1,
//         name:'Catherine McNally',
//         review:'We compared price, availability and connection type, download speed, and customer service scores for dozens of large internet service providers (ISPs) in the US. And we found Comcast Xfinity to be the best value, while Verizon Fios Home Internet was our Editor’s Choice for its excellent internet speeds.',
//         designation:'Sr. Writer, Internet & Gaming'
//     },
//     {
//         image:client1,
//         name:'Catherine McNally',
//         review:'We compared price, availability and connection type, download speed, and customer service scores for dozens of large internet service providers (ISPs) in the US. And we found Comcast Xfinity to be the best value, while Verizon Fios Home Internet was our Editor’s Choice for its excellent internet speeds.',
//         designation:'Sr. Writer, Internet & Gaming'
//     }
// ]



const Testimonials = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3002/reviews')
        .then(res=>res.json())
        .then(data=> {
            setReviews(data);
        })
    },[])
    return (
        <div className="testimonial my-5">
            <div className="text-center">
                <h2>TESTIMONIALS</h2>
                <p>See what people say about our company</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <TestimonialCard review={review} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;