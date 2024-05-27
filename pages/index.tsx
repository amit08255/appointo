import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from 'components/Navbar';
import GlobalStyles from 'components/global.style';
import AppointmentForm from 'components/AppointmentForm';

function Homepage() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Navbar />
            <AppointmentForm />
        </QueryClientProvider>
    );
}

export default Homepage;
