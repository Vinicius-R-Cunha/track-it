import Calendar from "react-calendar";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Menu from "../Menu";
import { HistoryPage } from "./style";
import axios from "axios";
import MyContext from "../../MyContext";

export default function History() {

    const { profile } = useContext(MyContext);

    const [history, setHistory] = useState();

    const config = {
        headers: { Authorization: `Bearer ${profile.token}` }
    }

    useEffect(() => {
        renderPage();
    }, []);

    function renderPage() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config);
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
            } else if (dateWasComplete(history[i])) {
                return 'green';
            } else {
                return 'red';
            }
        }
    }

    function dateWasComplete(date) {
        let isDone = true;
        for (let i = 0; i < date.habits.length; i++) {
            if (!date.habits[i].done) {
                isDone = false;
            }
        }
        return isDone;
    }

    if (!history) {
        return (
            <></>
        );
    }

    return (
        <>
            <Header />
            <HistoryPage >
                <p className="history-title">Histórico</p>

                <Calendar
                    tileClassName={({ date }) => (handleColors(date) === 'green') ? handleColors(date) : handleColors(date)}
                    calendarType={'US'}
                />
            </HistoryPage>
            <Menu />
        </>
    );
}