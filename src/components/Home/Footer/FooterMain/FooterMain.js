import React from 'react';
import { Link } from 'react-router-dom';

const FooterMain = () => {
    return (
        <div className="container py-4 footer-main">
            <div className="row">
                <div className="col-md-3">
                    <h2>My Services</h2>
                    <ul className="list-unstyled">
                        <li><Link className=" footer-link text-secondary ">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Check Email</Link></li>
                        <li><Link className=" footer-link text-secondary">Check Voicemail</Link></li>
                        <li><Link className=" footer-link text-secondary">Manage Your Plan</Link></li>
                        <li><Link className=" footer-link text-secondary">Group Counseling</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h2>My Account</h2>
                    <ul className="list-unstyled">
                        <li><Link className=" footer-link text-secondary">Pay Bill</Link></li>
                        <li><Link className=" footer-link text-secondary">Manage My Account</Link></li>
                        <li><Link className=" footer-link text-secondary">Manage Users & Alerts</Link></li>
                        <li><Link className=" footer-link text-secondary">Move Services</Link></li>
                        <li><Link className=" footer-link text-secondary">Cable Customer Agreement</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h2>Support</h2>
                    <ul className="list-unstyled">
                        <li><Link className=" footer-link text-secondary">Comcast Customer Service</Link></li>
                        <li><Link className=" footer-link text-secondary">Bill & Payments</Link></li>
                        <li><Link className=" footer-link text-secondary">Contact Us</Link></li>
                        <li><Link className=" footer-link text-secondary">Support Forums</Link></li>
                        <li><Link className=" footer-link text-secondary">Comcast Customer Service</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2>Subscribe us</h2>
                    <input className="form-control" placeholder="Your email" type="text" name="" id=""/>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;