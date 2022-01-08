import axios from "axios";
import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "./style";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {

    const navigate = useNavigate();

    const { profile, progress, setProgress } = useContext(MyContext);

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
        })
    }

    function progressCalculation(tasksArray) {
        if (tasksArray.length === 0) {
            return 0;
        }

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