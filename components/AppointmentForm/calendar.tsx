import * as React from 'react';
import Calendar from 'react-calendar';
import { AppointmentCalendar } from './index.style';

type Props = {
    selectedDate: Date,
    onSelectDate: (date:Date) => void,
};

function AppointmentFormCalendar({ selectedDate, onSelectDate }:Props) {
    return (
        <AppointmentCalendar>
            <h1 className="title">Test Service</h1>
            <div className="timezone">
                <div className="timezone-title">Timezone:</div>
                <div className="timezone-subtitle">Asia/Calcutta</div>
            </div>
            <Calendar
                calendarType="hebrew"
                prev2Label={null}
                next2Label={null}
                value={selectedDate}
                defaultValue={selectedDate}
                onClickDay={(value, event) => onSelectDate(value)}
                tileDisabled={({ date }) => date.getTime() < Date.now()}
            />
        </AppointmentCalendar>
    );
}

export default AppointmentFormCalendar;
