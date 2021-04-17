import React from 'react';

const ContactCard = ({contact}) => {
    return (
        <div className="col-md-4">
            <div className="contact-card text-center p-4">
                <img className="img-fluid" src={contact.image} alt=""/>
                <h2>{contact.contact}</h2>
                <p className="text-secondary">{contact.contactType}</p>
            </div>
        </div>
    );
};

export default ContactCard;