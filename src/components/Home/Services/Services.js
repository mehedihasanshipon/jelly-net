import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'



const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://arcane-earth-23452.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> {
            setServices(data);
        })
    },[])
    return (
        <section className="service-container mt-5 pb-5">
            <div className="container">
            <div className="text-center pt-5 text-top">
                <h6 style={{fontWeight:'800'}}>JELLYNET BROADBAND INTERNET</h6>
                <h4>Network Solutions From Jellynet</h4>
            </div>
            <div className="row ">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <div className="text-center mt-5">
                <button className="button-outline">Request a quote</button>
                <p className="pt-4">For more information call us at 800.567.1234 or chat live with Jellynet representative.</p>
            </div>
            </div>
        </section>
    );
};

export default Services;