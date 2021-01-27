import React from 'react';

// Sections
import AboutUsSection from '../../Components/AboutUsSection/AboutUsSection';
import BoardSection from '../../Components/BoardSection/BoardSection';
import ContactUs from '../../Components/ContactUsSection/ContactUs';
import DomainSection from '../../Components/DomainSection/DomainSection';
import EventsSection from '../../Components/EventsSection/EventsSection';
import LandingSection from '../../Components/LandingSection/LandingSection';
import NavBar from '../../Components/NavBar/NavBar';
import ProjectSection from '../../Components/ProjectSection/ProjectSection'

// Styles
import './HomePage.Styles.scss'

const HomePage = () => {
    return (
        <div className='Homepage'>
            <NavBar />
            <LandingSection />
            <AboutUsSection />
            <EventsSection />
            <DomainSection />
            <ProjectSection />
            <BoardSection />
            <ContactUs />
        </div>
    )
}

export default HomePage