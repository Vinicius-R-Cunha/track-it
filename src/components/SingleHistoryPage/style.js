import styled from "styled-components";

const SingleHistoryContainer = styled.div`
    padding: 96px 20px 105px 20px;

    .single-history-title {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;

        margin-bottom: 5px;
    }

    .progress-text {
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;

        margin-bottom: 15px;

        span {
            color: green;
        }
    }
`

const Habit = styled.div`
    width: 100%;
    height: 94px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    background: #FFFFFF;

    margin-bottom: 10px;

    box-sizing: border-box;
    border-radius: 7px;

    .name-text {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
`

const CheckBox = styled.div`
    width: 69px;
    height: 69px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.check ? "#8FC549" : "#EBEBEB"};

    border: 1px solid #E7E7E7;

    box-sizing: border-box;
    border-radius: 5px;
`


export { SingleHistoryContainer, Habit, CheckBox }