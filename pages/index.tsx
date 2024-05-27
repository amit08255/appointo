import React from 'react';
import Navbar from 'components/Navbar';
import GlobalStyles from 'components/global.style';
import AppointmentForm from 'components/AppointmentForm';
import AppBackground from 'components/background';

function Homepage() {
    return (
        <>
            <GlobalStyles />
            <AppBackground />
            <Navbar />
            <AppointmentForm />
        </>
    );
}

export default Homepage;
