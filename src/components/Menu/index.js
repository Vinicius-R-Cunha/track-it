import axios from "axios";
import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import { Link } from "react-router-dom";
import { Nav } from "./style";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {

    const { profile, progress, setProgress } = useContext(MyContext);

    const config = {
        headers: { Authorization: `Bearer ${profile.token}` }
    }

    useEffect(() => {
        renderPage();
    }, []);

    function renderPage() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then(answer => {
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

    return (
        <Nav>
            <Link to={'/habitos'}>Hábitos</Link>
            <Link to={'/hoje'}>
                <CircularProgressbar
                    className="circle-div"
                    value={progress}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        pathTransitionDuration: 0.5,
                        backgroundColor: "#52B6FF",
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        trailColor: "transparent"
                    })}
                />
            </Link>

            <Link to={'/historico'}>Histórico</Link>
        </Nav>
    );
}