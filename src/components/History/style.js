import styled from "styled-components";

const HistoryPage = styled.div`
    padding: 96px 20px 105px 20px;

    .history-title {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;

        margin-bottom: 15px;
    }

    .react-calendar {
        width: 335px;
        
        padding-bottom: 8px;
        
        border-radius: 10px;
        border: hidden;

        background: white;

        * {
            border: hidden;
        }

        .react-calendar__month-view__days {
            max-height: 315px;
            gap: 8.5px;
        }

        .react-calendar__navigation {
            display: flex;
            height: 44px;
            margin-bottom: 1em;
        }

        .react-calendar__navigation button {
            min-width: 44px;
            background: none;
        }

        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
            background-color: #e6e6e6;
        }
        
        .react-calendar__navigation button[disabled] {
            background-color: #f0f0f0;
        }

        .react-calendar__month-view__weekdays {
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.75em;
        }

        .react-calendar__month-view__weekdays__weekday {
            padding: 0.5em;
        }

        .react-calendar__month-view__days__day--weekend {
            color: #d10000;
        }
        .react-calendar__month-view__days__day--neighboringMonth {
            color: #757575;
        }

        .react-calendar__tile {
            width: 40px;
            height: 40px;

            text-align: center;
            padding: 0.75em 0.5em;
            background: #FFFFFF;

            border-radius: 50%;

            max-width: none !important;
            flex-basis: initial !important;
        }

        .react-calendar__tile:disabled {
            background-color: #f0f0f0;
        }

        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
            background-color: #e6e6e6;
        }

        .react-calendar__tile--now {
            background: #ffff76;

            border-radius: 0;
        }

        .react-calendar__tile--hasActive {
            background: #76baff;
        }

        .react-calendar__tile--hasActive:enabled:hover,
        .react-calendar__tile--hasActive:enabled:focus {
            background: #a9d4ff;
        }

        .react-calendar__tile--active {
            background: #006edc;
            color: white;
        }

        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
            background: #1087ff;
        }

        .react-calendar--selectRange .react-calendar__tile--hover {
            background-color: #e6e6e6;
        }

        .green {
            background: #8CC655;
        }

        .red {
            background: #EA5766;
        }
    }
`

export { HistoryPage }
