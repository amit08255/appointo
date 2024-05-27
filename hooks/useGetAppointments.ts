import * as React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type GetOptions = {
    startDate: string,
    endDate: string,
};

const useGetAppointments = () => {
    const [appointments, setAppointments] = React.useState({});
    const [duration, setDuration] = React.useState(null);

    const {
        data, isLoading, error,
    } = useQuery({
        queryKey: ['appointments', duration],
        queryFn: async () => {
            const res = await axios.get(`https://app.appointo.me/scripttag/mock_timeslots?${duration}`);
            return res.data;
        },
        enabled: !!duration, // Only fetch when pageNumber is defined
    });

    const getAppointments = ({ startDate, endDate }:GetOptions) => {
        setDuration(`start_date=${startDate}&end_date=${endDate}`);
    };

    const dateObjectTo12HoursFormat = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        const strTime = `${hours }:${ minutes } ${ ampm}`;
        return strTime;
    };

    function convertTimeToRangeString(startTimeStr, endTimeStr) {
        const start = dateObjectTo12HoursFormat(new Date(startTimeStr));
        const end = dateObjectTo12HoursFormat(new Date(endTimeStr));

        return `${start} - ${end}`;
    }

    const convertSlotsToSlotInfo = (slotsArr:Array<{ start_time: string, end_time: string }>) => (
        slotsArr.map((slot) => ({
            formattedDuration: convertTimeToRangeString(slot.start_time, slot.end_time),
            startTime: slot.start_time,
            endTime: slot.end_time,
        })));

    const processAppointmentInfo = (appointmentList:AppointmentResponse[]):AppointmentInfo => {
        if (!Array.isArray(appointmentList) || appointmentList.length < 1) {
            return {};
        }

        const appointmentInfo:AppointmentInfo = {};

        appointmentList.forEach((item) => {
            appointmentInfo[item.date] = convertSlotsToSlotInfo(item.slots);
        });

        return appointmentInfo;
    };

    React.useEffect(() => {
        if (data) {
            setAppointments(processAppointmentInfo(data));
        }
    }, [data]);

    return {
        appointments, getAppointments, isLoading, error, data,
    };
};

export default useGetAppointments;
