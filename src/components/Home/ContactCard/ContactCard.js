import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ContactCard = ({contact}) => {
    return (
        <div className="col-md-4 gy-4">
            <div className="contact-card text-center p-4 ">
                {/* <img className="img-fluid" src={contact.image} alt=""/> */}
                <FontAwesomeIcon className="py-2 img-fluid contact-icon"  icon={contact.image} />
                <h2>{contact.contact}</h2>
                <p className="text-secondary">{contact.contactType}</p>
            </div>
        </div>
    );
};

export default ContactCard;