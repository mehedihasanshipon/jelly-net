import React from 'react';
import ContactSection from '../ContactSection/ContactSection';
import DiscountSection from '../DiscountSection/DiscountSection';
import Footer from '../Footer/Footer/Footer';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Projects />
            <Packages />
            <DiscountSection />
            <Testimonials />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;