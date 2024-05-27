import * as React from 'react';
import useGetAppointments from './useGetAppointments';

const useAppointmentForm = () => {
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [slotList, setSlotList] = React.useState([]);
    const [selectedSlot, setSelectedSlot] = React.useState<AppointmentSlotInfo>(null);

    const {
        appointments, getAppointments, isLoading, error,
    } = useGetAppointments();

    const convertDateToString = (date:Date):string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    function getStartAndEndDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);

        return {
            startDate: convertDateToString(startDate),
            endDate: convertDateToString(endDate),
            month: month + 1,
        };
    }

    const onSlotSelect = (e) => {
        setSelectedSlot(e.detail);
    };

    React.useEffect(() => {
        getAppointments(getStartAndEndDate(new Date()));
        window.addEventListener('appointment/slot-selected', onSlotSelect);

        return () => {
            window.removeEventListener('appointment/slot-selected', onSlotSelect);
        };
    }, []);

    React.useEffect(() => {
        if (!isLoading) {
            const currentDate = convertDateToString(selectedDate);
            setSlotList(appointments[currentDate] || []);
        }
    }, [isLoading, appointments]);

    const onSelectDate = (date) => {
        const pickedDateStr = convertDateToString(date);
        setSelectedDate(date);

        if (selectedMonth !== date.getMonth()) {
            setSelectedMonth(date.getMonth());
            getAppointments(getStartAndEndDate(new Date(date)));
        } else {
            setSlotList(appointments[pickedDateStr] || []);
        }
    };

    return ({
        isLoading, error, selectedDate, onSelectDate, slotList, selectedSlot,
    });
};

export default useAppointmentForm;
