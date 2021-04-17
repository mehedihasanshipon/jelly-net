import React from 'react';
import discImg from '../../../images/disc-img.png'

const DiscountSection = () => {
    return (
        <section className="discount-section container my-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid" src={discImg} alt=""/>
                </div>
                <div className="col-md-6">
                    <h6>JELLYNET BENEFITS</h6>
                    <h2>Want To Go Faster? You Got It.</h2>
                    <p>The speed of data, as it travels from the Internet to your computer, is measured in megabits per second (Mbps). Different activities require different speeds.</p>
                    <li>50% off on professional installation</li>
                    <li>10 hours of cloud DVR service</li>
                    <li>HD included</li>
                    <li>Speed good for 6-8 devices at the same time</li>
                    <button className="btn btn-primary">Request a quote</button>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;