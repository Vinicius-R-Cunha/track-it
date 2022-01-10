import axios from "axios";
import { useState, useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import Header from "../Header";
import Menu from "../Menu";
import { TodayDiv, Task, CheckBox, Progress } from "./style";
import dayjs from "dayjs";
import check from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";

export default function TodayPage() {

    const navigate = useNavigate();

    const weekdays = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ]
    const { profile, progress, setProgress, progressCalculation } = useContext(MyContext);
    const [tasksArray, setTasksArray] = useState();

    useEffect(() => {
        if (profile !== null) {
            renderPage();
        } else {
            navigate('/');
        }
    }, []);

    function renderPage() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
            {
                headers: { Authorization: `Bearer ${profile.token}` }
            });
        promise.then(answer => {
            setProgress(() => progressCalculation(answer.data));
            setTasksArray(answer.data);
        })
    }

    function handleSelection({ id, done }) {
        if (!done) {
            const select = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
                {
                    headers: { Authorization: `Bearer ${profile.token}` }
                });
            select.then(() => {
                renderPage();
            });
            select.catch(answer => console.log(answer.response));
        } else {
            const deselect = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
                {
                    headers: { Authorization: `Bearer ${profile.token}` }
                });
            deselect.then(() => {
                renderPage();
            });
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