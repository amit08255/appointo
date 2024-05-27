/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import Select from 'react-select';
import useAppointmentVariants from 'hooks/useAppointmentVariants';
import CheckIcon from 'components/Icons/check';
import { AppointmentVariation } from './index.style';

type Props = {
    selectedDate: Date,
    slots: AppointmentSlotInfo[],
};

function AppointmentFormVariants({ selectedDate, slots }:Props) {
    const {
        getFormattedDate, getVariants, slotList, onVariantSelect, variant,
        selectedSlot, onSlotSelect,
    } = useAppointmentVariants(slots, selectedDate);

    return (
        <AppointmentVariation>
            <div>
                <h1 className="title">Select From Variants</h1>
                <Select value={variant} onChange={onVariantSelect} className="variants-select" classNamePrefix="variants-select" options={getVariants()} />
            </div>
            <div className="divider" />
            <div>
                <h1 className="title">{`${getFormattedDate(selectedDate)} - Available Slots`}</h1>
                <div className="scrollable-durations">
                    {
                        slotList.map((slot) => (
                            <div
                                key={slot.formattedDuration}
                                className={`variant-checkbox ${selectedSlot?.formattedDuration === slot.formattedDuration ? 'checked' : ''}`}
                                onClick={() => onSlotSelect(slot)}
                            >
                                {slot.formattedDuration}
                                {
                                    selectedSlot?.formattedDuration === slot.formattedDuration
                                        ? (
                                            <CheckIcon />
                                        ) : null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </AppointmentVariation>
    );
}

export default AppointmentFormVariants;