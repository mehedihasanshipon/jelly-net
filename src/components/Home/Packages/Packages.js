import React from 'react';
import PackagesCard from '../PackagesCard/PackagesCard';
import './Packages.css';
import img1 from '../../../images/80.png';

const packageData = [
    {
        packageType: 'BASIC',
        int:'INTERNET',
        speed:'80 Mbps ',
        tv:'TV',
        chanels:'125+',
        price: '$ 39 .99/Mo',
        image: img1
    },
    {
        packageType: 'PREMIUM',
        int:'INTERNET',
        speed:'160 Mbps ',
        tv:'TV',
        chanels:'200+',
        price: '$ 89 .99/Mo',
        image: img1
    },
    {
        packageType: 'PREMIUM',
        int:'INTERNET',
        speed:'300 Mbps ',
        tv:'TV',
        chanels:'280+',
        price: '$139 .99/Mo',
        image: img1
    }
]

const Packages = () => {
    return (
        <section className="package-container my-5 py-5">
            <div className="text-center">
                <p>NEW INTERNET PACKAGES ARE HERE!</p>
                <h2>Better-Than-Ever Offers</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        packageData.map(packages =>  <PackagesCard packages={packages} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Packages;