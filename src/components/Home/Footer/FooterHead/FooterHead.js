import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const FooterHead = () => {
    return (
        <div className="container ">
           <div className="row footer-header pt-2 d-flex align-items-center">
               <div className="col-md-6">
               <h2 className="nav-brand">BD <span style={{color:'#42B6E1'}}>net</span></h2>
               </div>
               <div className="col-md-6">
                   <h6> <FontAwesomeIcon icon={faYoutube} /> Find tutorials and demos</h6>
               </div>
           </div>
        </div>
    );
};

export default FooterHead;