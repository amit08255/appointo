/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import Select from 'react-select';
import useAppointmentVariants from 'hooks/useAppointmentVariants';
import CheckIcon from 'components/Icons/check';
import Loading from 'components/Loading';
import { AppointmentVariation } from './index.style';

type Props = {
    selectedDate: Date,
    slots: AppointmentSlotInfo[],
    isLoading: boolean,
};

function AppointmentFormVariants({ selectedDate, slots, isLoading }:Props) {
    const {
        getFormattedDate, getVariants, slotList, onVariantSelect, variant,
        selectedSlot, onSlotSelect,
    } = useAppointmentVariants(slots, selectedDate);

    return (
        <AppointmentVariation>
            <div style={{ display: slotList.length > 0 ? 'block' : 'none' }}>
                <h1 className="title">Select From Variants</h1>
                <Select value={variant} onChange={onVariantSelect} className="variants-select" classNamePrefix="variants-select" options={getVariants()} />
            </div>
            <div style={{ display: slotList.length > 0 ? 'block' : 'none' }} className="divider" />
            <div>
                <h1 className="title">{`${getFormattedDate(selectedDate)} - Available Slots`}</h1>
                <div className="scrollable-durations">
                    {
                        !isLoading && slotList.map((slot) => (
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
                <div style={{ display: !isLoading && slotList.length < 1 ? 'block' : 'none' }} className="empty-placeholder">
                    Uh-Oh. All time slots have been filled for the day. Please choose another date
                </div>
                {
                    isLoading ? (
                        <div className="loader">
                            <Loading />
                        </div>
                    ) : null
                }
            </div>
        </AppointmentVariation>
    );
}

export default AppointmentFormVariants;
