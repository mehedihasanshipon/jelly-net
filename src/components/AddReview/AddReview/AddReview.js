import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ReviewForm from '../ReviewForm/ReviewForm';

const AddReview = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9 bg-light">
                <h3>Add review</h3>
                <ReviewForm />
            </div>
        </div>
    );
};

export default AddReview;