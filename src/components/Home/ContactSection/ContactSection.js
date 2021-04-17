import React from 'react';
import './ContactSection.css';
import headPhone from '../../../images/headphones.png'
import ContactCard from '../ContactCard/ContactCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHeadphones,faCommentDollar } from '@fortawesome/free-solid-svg-icons'

const contactData = [
    {
        image:faHeadphones,
        contact:'Talk To An Agent',
        contactType:'Get a Call'
    },
    {
        image:faCommentDollar,
        contact:'Chat With An Agent',
        contactType:'Chat Now'
    },
    {
        image:faStore,
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