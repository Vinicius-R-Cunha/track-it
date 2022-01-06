import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import Header from "../Header";
import Menu from "../Menu";
import { TodayDiv, Task, CheckBox } from "./style";
import check from "../../assets/Vector.png";
import dayjs from "dayjs";

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

    const [tasksArray, setTasksArray] = useState();

    const profile = useContext(MyContext);

    const config = {
        headers: { Authorization: `Bearer ${profile.token}` }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then(answer => setTasksArray(answer.data));
    }, []);

    if (!tasksArray) {
        return (
            <h1>Carregando</h1>
        );
    }

    return (
        <>
            <Header />

            <TodayDiv>
                <p className="today-title">{weekdays[dayjs().day()]}, {dayjs().date() < 10 ? `0${dayjs().date()}` : dayjs().date()}/{(dayjs().month() + 1) < 10 ? `0${(dayjs().month() + 1)}` : (dayjs().month() + 1)}</p>
                <p className="progress">Nenhum hábito concluído ainda</p>

                <div>
                    {tasksArray.map(obj => {
                        return (
                            <Task key={obj.id}>
                                <div>
                                    <p className="task-name">{obj.name}</p>
                                    <div className="task-sequence">
                                        <p>Sequência atual: {obj.currentSequence} dias</p>
                                        <p>Seu recorde: {obj.highestSequence} dias</p>
                                    </div>
                                </div>
                                <CheckBox><img src={check} alt="" /></CheckBox>
                            </Task>
                        )
                    })}
                </div>

            </TodayDiv>

            <Menu />
        </>
    );
}