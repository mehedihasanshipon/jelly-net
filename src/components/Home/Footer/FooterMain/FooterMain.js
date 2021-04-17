import React from 'react';
import { Link } from 'react-router-dom';

const FooterMain = () => {
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-3">
                    <h2>My Services</h2>
                    <ul className="list-unstyled">
                        <li><Link className=" footer-link text-secondary text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h2>My Account</h2>
                    <ul className="list-unstyled">
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h2>Support</h2>
                    <ul className="list-unstyled">
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
                        <li><Link className=" footer-link text-secondary">Parental Controls</Link></li>
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