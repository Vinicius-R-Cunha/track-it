import styled from "styled-components";

const TodayDiv = styled.div`
    padding: 96px 20px 105px 20px;

    .today-title {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;

        margin-bottom: 3px;
    }

    .progress {
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;

        margin-bottom: 29px;
    }
`
const Task = styled.div`
    width: 340px;
    height: 94px;

    display: flex;
    justify-content: space-between;

    padding: 0 15px;

    background: #FFFFFF;

    margin-bottom: 10px;

    box-sizing: border-box;
    border-radius: 7px;

    .task-name {
        font-size: 20px;
        line-height: 25px;
        color: #666666;

        margin-top: 13px;
    }

    .task-sequence {
        font-size: 13px;
        line-height: 16px;
        color: #666666;

        margin-top: 7px;
    }
`

const CheckBox = styled.div`
    width: 69px;
    height: 69px;

    align-self: center;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #EBEBEB;

    border: 1px solid #E7E7E7;

    box-sizing: border-box;
    border-radius: 5px;
`

export { TodayDiv, Task, CheckBox }