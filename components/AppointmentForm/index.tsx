import * as React from 'react';
import useAppointmentForm from 'hooks/useAppointmentForm';
import { AppointmentCard, AppointmentFormWrapper } from './index.style';
import AppointmentFormCalendar from './calendar';
import AppointmentFormVariants from './variants';
import AppointmentFormFooter from './footer';

function AppointmentForm() {
    const {
        slotList, selectedDate, onSelectDate, selectedSlot, isLoading,
    } = useAppointmentForm();

    return (
        <AppointmentFormWrapper>
            <AppointmentCard>
                <AppointmentFormCalendar selectedDate={selectedDate} onSelectDate={onSelectDate} />
                <AppointmentFormVariants
                    isLoading={isLoading}
                    selectedDate={selectedDate}
                    slots={slotList}
                />
            </AppointmentCard>
            <AppointmentFormFooter selectedSlot={selectedSlot} />
        </AppointmentFormWrapper>
    );
}

export default AppointmentForm;
