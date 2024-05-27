interface AppointmentResponse {
    date: string,
    slots: Array<{
        start_time: string,
        end_time: string,
    }>,
}

interface AppointmentSlotInfo {
    formattedDuration: string,
    startTime: string,
    endTime: string,
}

interface AppointmentInfo {
    [key:string]: AppointmentSlotInfo[]
}
