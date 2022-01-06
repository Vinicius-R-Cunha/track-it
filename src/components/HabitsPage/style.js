import styled from "styled-components";

const HabitsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 91px;
    padding-bottom: 105px;

    .no-habit {
        font-size: 18px;
        line-height: 22px;
        color: #666666;

        padding: 0 20px;

        margin-top: 22px;
    }
`
const MyHabits = styled.div`
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 0 18px;

    margin-bottom: 20px;

    p {
        font-size: 23px;
        color: #126BA5;
    }

    div {
        width: 40px;
        height: 35px;

        font-size: 27px;

        color: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #52B6FF;

        border-radius: 5px;
    }
`

const HabitCreator = styled.div`
    width: 90%;
    height: 180px;

    background: #FFFFFF;
    
    display: flex;
    flex-direction: column;
    align-items: center;
        
    border-radius: 7px;

    margin-bottom: 20px;

    input {
        width: 90%;
        height: 45px;

        font-size: 20px;
        line-height: 25px;
        text-indent: 11px;

        margin-top: 18px;

        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        ::placeholder {
            color: #DBDBDB;
        }
    }

    .action-buttons {
        width: 90%;

        display: flex;
        justify-content: flex-end;

        margin-top: 27px;

        button {
            width: 84px;
            height: 35px;
            
            font-family: Lexend Deca;
            font-size: 16px;
            
            border: hidden;
            border-radius: 5px;
            
            :first-child {
                background: #FFFFFF;
                color: #52B6FF;

                margin-right: 18px;
            }
            
            :last-child {
                background: #52B6FF;
                color: #FFFFFF;
            }
        }

        .opacity {
            opacity: 0.7;
        }
    }
`

const DaySelection = styled.div`
    width: 90%;
    
    display: flex;
    
    margin-top: 8px;

`

const DayBox = styled.p`
    width: 30px;
    height: 30px;
                
    font-size: 20px;

    color: ${props => props.selected ? '#FFFFFF' : '#DBDBDB'};
    
    background: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 4px;

    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
`

const Habit = styled.div`
    width: 90%;
    height: 91px;
    
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFFFFF;
    border-radius: 7px;

    position: relative;

    .titulo {
        width: 90%;

        font-size: 20px;
        line-height: 25px;
        color: #666666;

        margin-top: 13px;
    }

    ion-icon {
        font-size: 15px;

        position: absolute;
        top: 9px;
        right: 8px;
    }
`


export { HabitsDiv, MyHabits, HabitCreator, DayBox, Habit, DaySelection }