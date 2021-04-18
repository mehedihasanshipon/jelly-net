import React, { useState } from 'react';

const ReviewForm = () => {

    const [reviews, setReviews] = useState({});
    const [image,setImage] = useState(null);

    const handleBlur = (e) => {
        const newReview = { ...reviews };
        newReview[e.target.name] = e.target.value;
        setReviews(newReview);
      };
    
      const handleImage = (e) => {
          const newImage = e.target.files[0];
          setImage(newImage);
      };
      const handleSubmit= (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);
        formData.append('name',reviews.name);
        formData.append('designation',reviews.designation);
        formData.append('desc',reviews.desc);
    
        fetch('https://arcane-earth-23452.herokuapp.com/addReview',{
            method: "POST",
            body: formData,
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                console.log(data);
                alert("Review added successfully")
            }
        }).catch(err => {
            console.log(err);
        })
      }
    return (
        <div className="col-md-6 ">
            <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onBlur={handleBlur}
              name="name"
              placeholder="Your name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handleBlur}
              name="designation"
              placeholder="Your designation"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <textarea onBlur={handleBlur}
              name="desc"
              placeholder="Review description"
              className="form-control"
              type="text">

            </textarea>
          </div>
          <div className="mb-3">
            <input
              onChange={handleImage}
              placeholder="Service description"
              className="form-control"
              type="file"
            />
          </div>
          <input type="submit" value="Add Review" />
        </form>
        </div>
    );
};

export default ReviewForm;