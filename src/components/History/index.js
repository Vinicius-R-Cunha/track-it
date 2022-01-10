import Calendar from "react-calendar";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Menu from "../Menu";
import { HistoryPage, ColorsGuide } from "./style";
import axios from "axios";
import MyContext from "../../MyContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function History() {

    const navigate = useNavigate();

    const { profile, progressCalculation } = useContext(MyContext);

    const [history, setHistory] = useState();

    useEffect(() => {
        if (profile !== null) {
            renderPage();
        } else {
            navigate('/');
        }
    }, []);

    function renderPage() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
            {
                headers: { Authorization: `Bearer ${profile.token}` }
            });
        promise.then(answer => setHistory(answer.data));
    }

    function formatDate(date) {
        const day = date.getDate().toString();
        const dayF = (day.length == 1) ? '0' + day : day;
        const month = (date.getMonth() + 1).toString();
        const monthF = (month.length == 1) ? '0' + month : month;
        const yearF = date.getFullYear();
        return dayF + "/" + monthF + "/" + yearF;
    }

    function handleColors(date) {
        for (let i = 0; i < history.length; i++) {
            const isInHistory = (formatDate(date) === history[i].day && formatDate(date) !== formatDate(new Date));
            if (!isInHistory) {
                continue;
            } else if (progressCalculation(history[i].habits) >= 0 && progressCalculation(history[i].habits) < 15) {
                return 'red';
            } else if (progressCalculation(history[i].habits) < 25) {
                return 'orange';
            } else if (progressCalculation(history[i].habits) < 50) {
                return 'light-orange';
            } else if (progressCalculation(history[i].habits) < 75) {
                return 'light-green';
            } else if (progressCalculation(history[i].habits) <= 100) {
                return 'green';
            }
        }
    }

    function handleClick(date) {
        const index = clickedDayInHistory(date);
        if (index !== null) {
            localStorage.setItem('history', JSON.stringify(history[index]));
            localStorage.setItem('day-progress', JSON.stringify(progressCalculation(history[index].habits)));
            navigate(`/historico/${history[index].day.replaceAll('/', '-')}`);
        }
    }

    function clickedDayInHistory(date) {
        for (let i = 0; i < history.length; i++) {
            const isInHistory = (formatDate(date) === history[i].day && formatDate(date) !== formatDate(new Date));
            if (isInHistory) {
                return i;
            }
        }
        return null;
    }

    if (!history) {
        return (
            <div className="full-screen">
                <Loader type="TailSpin" color="#126BA5" height={150} width={150} />
            </div>
        );
    }

    return (
        <>
            <Header />
            <HistoryPage >
                <p className="history-title">Histórico</p>

                <Calendar
                    tileClassName={({ date }) => handleColors(date)}
                    calendarType={'US'}
                    onClickDay={e => handleClick(e)}
                />

                <ColorsGuide>
                    <p className="guide">Legenda:</p>
                    <div>
                        <div className="circle-guide red"></div>
                        -15%
                        <div className="circle-guide orange"></div>
                        +15%
                        <div className="circle-guide light-orange"></div>
                        +25%
                        <div className="circle-guide light-green"></div>
                        +50%
                        <div className="circle-guide green"></div>
                        +75%
                    </div>
                </ColorsGuide>
            </HistoryPage>
            <Menu />
        </>
    );
}