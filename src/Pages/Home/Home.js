import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Details from './Details/Details';
import Doctors from './Doctors/Doctors';
import Exeptional from './Exeptional/Exeptional';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Details></Details>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>
           <Doctors></Doctors>
           <Exeptional></Exeptional>
           <Testimonial></Testimonial>
           <ContactUs></ContactUs>
           <Footer></Footer>

           
        </div>
    );
};

export default Home;