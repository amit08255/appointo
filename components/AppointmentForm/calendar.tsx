import * as React from 'react';
import Calendar from 'react-calendar';
import { AppointmentCalendar } from './index.style';

type Props = {
    selectedDate: Date,
    onSelectDate: (date:Date) => void,
};

function AppointmentFormCalendar({ selectedDate, onSelectDate }:Props) {
    return (
        <AppointmentCalendar data-testid="calendar">
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
                onClickDay={(value) => onSelectDate(value)}
                tileDisabled={({ date }) => {
                    const currentDate = new Date().getDate();
                    const selectedDateVal = date.getDate();

                    const currentMonth = new Date().getMonth();
                    const selectedMonth = date.getMonth();

                    const currentYear = new Date().getFullYear();
                    const selectedYear = date.getFullYear();

                    return ((selectedDateVal < currentDate && selectedMonth <= currentMonth
                    && selectedYear <= currentYear) || (selectedMonth < currentMonth
                    && selectedYear <= currentYear));
                }}
            />
        </AppointmentCalendar>
    );
}

export default AppointmentFormCalendar;
