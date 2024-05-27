import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppointmentForm from '..';

describe('Appointment form tests', () => {
    test('Should render form correctly', async () => {
        const fakeTimersConfig: FakeTimersConfig = {
            now: new Date(2024, 4, 27, 12, 30, 0), // May 7th, 2024, 12:30:00
            // Add other configuration options if needed
        };

        jest.useFakeTimers(fakeTimersConfig); // Replace with desired date/time

        const queryClient = new QueryClient();

        const { getByText, getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <AppointmentForm />
            </QueryClientProvider>,
        );

        // Simulate any component interactions that might trigger date/time display
        await act(async () => {
            // ... your component interaction code
        });

        expect(getByTestId('calendar')).toBeInTheDocument();
        expect(getByTestId('variants')).toBeInTheDocument();
        expect(getByTestId('footer')).toBeInTheDocument();
        expect(getByText(/select from variants/i)).toBeInTheDocument();
        expect(getByText(/monday, may 27 - available slots/i)).toBeInTheDocument();
    });
});
