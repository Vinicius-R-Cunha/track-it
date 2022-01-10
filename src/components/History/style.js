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

        margin-bottom: 15px;

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

        .light-green {
            background: #a6e69c;
        }

        .light-orange {
            background: #ffd324;
        }

        .orange {
            background: #f7b61e;
        }
        
        .red {
            background: #EA5766;
        }
    }

    
`

const ColorsGuide = styled.div`

    font-size: 11px;
    color: #666666;

    .guide {
        font-size: 13px;
        color: #126BA5;
        margin-bottom: 8px;
    }

    div {
        display: flex;
        align-items: center;

        .circle-guide {
            width: 20px;
            height: 20px;

            margin-left: 8px;
            margin-right: 5px;

            border-radius: 50%;
        }

        .green {
            background: #8CC655;
        }

        .light-green {
            background: #a6e69c;
        }

        .light-orange {
            background: #ffd324;
        }

        .orange {
            background: #f7b61e;
        }
        
        .red {
            background: #EA5766;
        }
    }
`

export { HistoryPage, ColorsGuide }
