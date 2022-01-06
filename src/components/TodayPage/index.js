import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import Header from "../Header";
import Menu from "../Menu";
import { TodayDiv, Task, CheckBox, Progress } from "./style";
import dayjs from "dayjs";
import check from "../../assets/Vector.png";

export default function TodayPage() {

    const weekdays = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ]
    const { profile } = useContext(MyContext);
    const [tasksArray, setTasksArray] = useState();
    const [progress, setProgress] = useState(0);

    const config = {
        headers: { Authorization: `Bearer ${profile.token}` }
    }

    useEffect(() => {
        renderPage();
    }, []);


    function renderPage() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then(answer => {
            setTasksArray(answer.data);
            setProgress(() => progressCalculation(answer.data));
        })
    }

    function progressCalculation(tasksArray) {
        let cont = 0;
        for (let i = 0; i < tasksArray.length; i++) {
            if (tasksArray[i].done) {
                cont++;
            }
        }
        const percentage = ((cont * 100) / tasksArray.length).toFixed();
        return percentage;
    }

    function handleSelection({ id, done }) {
        if (!done) {
            const select = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, true, config);
            select.then(renderPage);
            select.catch(answer => console.log(answer.response));
        } else {
            const deselect = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, false, config);
            deselect.then(renderPage);
        }
    }

    if (!tasksArray) {
        return (
            <></>
        );
    }

    return (
        <>
            <Header />

            <TodayDiv>
                <p className="today-title">{weekdays[dayjs().day()]}, {dayjs().date() < 10 ? `0${dayjs().date()}` : dayjs().date()}/{(dayjs().month() + 1) < 10 ? `0${(dayjs().month() + 1)}` : (dayjs().month() + 1)}</p>
                <Progress progress={progress}>{progress > 0 ? `${progress}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Progress>

                <div>
                    {tasksArray.map(obj => {
                        return (
                            <Task onClick={() => handleSelection(obj)} key={obj.id} >
                                <div>
                                    <p className="task-name">{obj.name}</p>
                                    <div className="task-sequence">
                                        <p>Sequência atual: <span
                                            className={obj.done ? 'green-text' : ''}>
                                            {obj.currentSequence} dias
                                        </span>
                                        </p>
                                        <p>Seu recorde: <span
                                            className={(obj.currentSequence === obj.highestSequence) &&
                                                obj.done ? 'green-text' : ''}>
                                            {obj.highestSequence} dias
                                        </span>
                                        </p>
                                    </div>
                                </div>
                                <CheckBox check={obj.done}><img src={check} alt="" /></CheckBox>
                            </Task>
                        )
                    })}
                </div>

            </TodayDiv>

            <Menu />
        </>
    );
}