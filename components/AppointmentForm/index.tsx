import * as React from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import CheckIcon from 'components/Icons/check';
import {
    AppointmentCalendar, AppointmentCard, AppointmentFooter,
    AppointmentFormWrapper, AppointmentVariation,
} from './index.style';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function AppointmentForm() {
    return (
        <AppointmentFormWrapper>
            <AppointmentCard>
                <AppointmentCalendar>
                    <h1 className="title">Test Service</h1>
                    <div className="timezone">
                        <div className="timezone-title">Timezone:</div>
                        <div className="timezone-subtitle">Asia/Calcutta</div>
                    </div>
                    <Calendar calendarType="hebrew" prev2Label={null} next2Label={null} />
                </AppointmentCalendar>
                <AppointmentVariation>
                    <div>
                        <h1 className="title">Select From Variants</h1>
                        <Select className="variants-select" classNamePrefix="variants-select" options={options} />
                    </div>
                    <div className="divider" />
                    <div>
                        <h1 className="title">Thursday, Dec 2 - Available Slots</h1>
                        <div className="scrollable-durations">
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox checked">
                                03:30 AM - 04:00 AM
                                <CheckIcon />
                            </div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                            <div className="variant-checkbox">03:30 AM - 04:00 AM</div>
                        </div>
                    </div>
                </AppointmentVariation>
            </AppointmentCard>
            <AppointmentFooter>
                <div className="product-info">
                    Powered By
                    <span style={{ marginLeft: '2px' }}>
                        <a href="https://apps.shopify.com/appointo">Appointo</a>
                    </span>
                </div>
                <button type="button">
                    Next
                    <span className="chevron-right">›</span>
                </button>
            </AppointmentFooter>
        </AppointmentFormWrapper>
    );
}

export default AppointmentForm;
