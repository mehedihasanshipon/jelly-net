import React from 'react';
import './ContactSection.css';
import headPhone from '../../../images/headphones.png'
import ContactCard from '../ContactCard/ContactCard';

const contactData = [
    {
        image:headPhone,
        contact:'Talk To An Agent',
        contactType:'Get a Call'
    },
    {
        image:headPhone,
        contact:'Chat With An Agent',
        contactType:'Chat Now'
    },
    {
        image:headPhone,
        contact:'Visit Jellynet Store',
        contactType:'Find a Service Center'
    }
]

const ContactSection = () => {
    return (
        <section className="contact mt-5 py-5">
           <div className="text-center text-white pt-5">
                <h6>HAVE YOU ANY QUESTIONS</h6>
                <h2>Will You Want Know More?</h2>
            </div>
            <div className="container">
                <div className="row pt-3">
                    {
                        contactData.map(contact => <ContactCard contact={contact} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ContactSection;