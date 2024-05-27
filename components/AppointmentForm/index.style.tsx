import styled from 'styled-components';

export const AppointmentFormWrapper = styled.div`
    width: 90vw;
    height: calc(100vh - 85px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 85px;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;

export const AppointmentCard = styled.div`
    width: 100%;
    max-width: 928px;
    height: 494px;
    display: flex;
    border-radius: 12px;
    background-color: red;
`;

export const AppointmentCalendar = styled.div`
    width: 100%;
    max-width: 464px;
    background-color: rgba(235, 235, 240, 1);
    border-top-left-radius: 12px;
    padding: 40px;

    .title {
        margin: 0;
        padding: 0;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0.25px;
        color: var(--colors-dark-1);
        margin-bottom: 4px;
    }

    .timezone {
        display: flex;
        align-items: center;
    }

    .timezone-title {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        margin-bottom: 20px;
        padding-right: 6px;
        color: var(--colors-dark-2);
    }

    .timezone-subtitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: var(--colors-dark-2);
        margin-bottom: 20px;
    }

    button {
        background: transparent;
        border: none;
    }

    .react-calendar {
        background-color: var(--colors-light-3);
        border-radius: 10px;
        border: 1px solid var(--colors-dark-4);
        height: 334px;
    }

    .react-calendar__navigation {
        height: 26px;
        padding: 15px 16px;
        border-bottom: 1px;
        border-bottom: 1px solid var(--colors-light-2);
        display: flex;
        justify-content: space-between;
    }

    .react-calendar__viewContainer {
        padding: 10px;
        min-height: 277px;
    }

    .react-calendar__year-view__months {
        gap: 15px;
    }

    .react-calendar__month-view__weekdays__weekday {
        text-align: center;
        height: 30.33px;
        font-size: 14px;
        font-weight: 600;
        color: var(--colors-primary);
    }

    .react-calendar__month-view__weekdays__weekday abbr {
        text-decoration: none;
    }

    .react-calendar__navigation__label__labelText {
        font-size: 18px;
    }

    .react-calendar__navigation__prev-button, .react-calendar__navigation__next-button {
        font-size: 23px;
        line-height: 1px;
        color: var(--colors-primary);
        cursor: pointer;
    }

    .react-calendar__month-view__days__day {
        height: 30.33px;
        margin-top: 15px;
    }

    .react-calendar__tile--now {
        background: var(--colors-primary);
        border-radius: 99px;
        color: white;
    }
`;

export const AppointmentVariation = styled.div`
    width: 100%;
    max-width: 464px;
    background-color: white;
    border-top-right-radius: 12px;
    padding: 40px;
    gap: 20px;
    display: flex;
    flex-direction: column;

    .title {
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-weight: 600;
        line-height: 21px;
        color: var(--colors-dark-2);
        text-transform: uppercase;
        margin-bottom: 6px;
    }

    .variants-select {
        font-size: 14px;

        .variants-select__control {
            cursor: pointer;
            padding: 5px 7px;
            border-radius: 10px;
            border: 1px solid var(--colors-dark-4);
            background-color: var(--colors-light-3);
        }

        .variants-select__input-container, .variants-select__single-value {
            color: var(--colors-primary);
            font-weight: 600;
        }

        .variants-select__indicator-separator {
            display: none;
        }
    }

    .divider {
        border-top: 1px solid var(--colors-dark-4);
    }

    .variant-checkbox {
        font-size: 14px;
        font-weight: 600;
        height: 30px;
        padding: 8px 12px 8px 12px;
        border-radius: 10px;
        border: 1px solid var(--colors-primary);
        justify-content: center;
        display: flex;
        align-items: center;
        color: var(--colors-primary);
        margin-bottom: 15px;
        cursor: pointer;
    }

    .variant-checkbox.checked {
        justify-content: space-between;
        background-color: var(--colors-primary);
        color: white;
    }

    .scrollable-durations {
        max-height: 300px;
        overflow: auto;
        scrollbar-width: none;

        &::-webkit-scrollbar { 
            display: none;
        }
    }
`;

export const AppointmentFooter = styled.div`
    width: 100%;
    max-width: 928px;
    margin-left: 14px;
    margin-right: 14px;
    height: 78px;
    display: flex;
    justify-content: space-between;
    background-color: var(--colors-primary);
    align-items: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    .product-info {
        padding-left: 30px;
        font-size: 12px;
        font-weight: 600;
        line-height: 21px;
        color: white;
    }

    a {
        color: white;
    }

    button {
        height: 48px;
        padding: 8px 30px 8px 30px;
        gap: 8px;
        border-radius: 10px;
        border: 1px solid var(--colors-primary);
        background-color: var(--colors-light-4);
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        margin-right: 30px;

        .chevron-right {
            color: var(--colors-primary);
            line-height: 1;
            font-size: 30px;
            font-weight: 400;
            margin-top: -3px;
        }
    }
`;
