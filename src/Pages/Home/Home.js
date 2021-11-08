import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Details from './Details/Details';
import Exeptional from './Exeptional/Exeptional';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Details></Details>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>
           <Exeptional></Exeptional>
           <Testimonial></Testimonial>
           <ContactUs></ContactUs>
           
        </div>
    );
};

export default Home;