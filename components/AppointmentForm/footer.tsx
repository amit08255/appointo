import * as React from 'react';
import { AppointmentFooter } from './index.style';

type Props = {
    selectedSlot: AppointmentSlotInfo,
};

function AppointmentFormFooter({ selectedSlot }:Props) {
    return (
        <AppointmentFooter>
            <div className="product-info">
                Powered By
                <span style={{ marginLeft: '2px' }}>
                    <a href="https://apps.shopify.com/appointo">Appointo</a>
                </span>
            </div>
            <button type="button" disabled={selectedSlot === null || selectedSlot === undefined}>
                Next
                <span className="chevron-right">›</span>
            </button>
        </AppointmentFooter>
    );
}

export default AppointmentFormFooter;
