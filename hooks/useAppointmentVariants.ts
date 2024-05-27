import React from 'react';

const useAppointmentVariants = (slots:AppointmentSlotInfo[], selectedDate:Date) => {
    const [variant, setVariant] = React.useState(null);
    const [slotList, setSlotList] = React.useState<AppointmentSlotInfo[]>([]);
    const [selectedSlot, setSelectedSlot] = React.useState<AppointmentSlotInfo>(null);

    const getFormattedDate = (date:Date) => {
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options as any); // Locale can be adjusted
        return formattedDate;
    };

    const formatMinutes = (minutes:number) => {
        if (minutes === 0) return '0 min'; // Handle zero minutes

        const hours = Math.floor(minutes / 60); // Calculate hours (integer division)
        const remainingMinutes = minutes % 60; // Get remaining minutes

        let formattedString = '';

        if (hours > 0) {
            formattedString += `${hours} hour${hours > 1 ? 's' : ''}`; // Pluralize hours
        }

        if (remainingMinutes > 0) {
            formattedString += `${formattedString.length > 0 ? ' ' : '' }${remainingMinutes} min`; // Add remaining minutes with space
        }

        return formattedString;
    };

    function getDateDifferenceInMinutes(date1:Date, date2:Date) {
        // Get the difference in milliseconds
        const differenceInMs = Math.abs(date2.getTime() - date1.getTime());

        // Convert milliseconds to minutes and round to nearest integer
        const differenceInMinutes = Math.round(differenceInMs / (1000 * 60));

        return differenceInMinutes;
    }

    const getVariants = () => {
        const map = {};
        const variants = [];

        slots.forEach((slot) => {
            const start = new Date(slot.startTime);
            const end = new Date(slot.endTime);
            const minutes = getDateDifferenceInMinutes(start, end);

            if (map[minutes]) {
                return;
            }

            map[minutes] = true;

            variants.push({ label: formatMinutes(minutes), value: minutes });
        });

        return variants;
    };

    const filterSlotsByVariant = (value:number) => slots.filter((slot) => {
        const start = new Date(slot.startTime);
        const end = new Date(slot.endTime);
        const minutes = getDateDifferenceInMinutes(start, end);

        return minutes === value;
    });

    const onVariantSelect = (e) => {
        setVariant(e);
        setSlotList(filterSlotsByVariant(e.value));
    };

    const onSlotSelect = (info:AppointmentSlotInfo) => {
        setSelectedSlot(info);
        window.dispatchEvent(new CustomEvent('appointment/slot-selected', { detail: info }));
    };

    React.useEffect(() => {
        setSlotList(slots);
    }, [slots]);

    React.useEffect(() => {
        setSlotList(slots);
        setVariant(null);
        onSlotSelect(null);
    }, [selectedDate.toDateString()]);

    return ({
        getFormattedDate,
        slotList,
        getVariants,
        onVariantSelect,
        variant,
        selectedSlot,
        onSlotSelect,
    });
};

export default useAppointmentVariants;
