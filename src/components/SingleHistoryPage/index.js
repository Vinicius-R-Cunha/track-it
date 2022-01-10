import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../../MyContext";
import Header from "../Header";
import Menu from "../Menu";
import { SingleHistoryContainer, Habit, CheckBox } from "./style";
import check from "../../assets/Vector.png";

export default function SingleHistoryPage() {

    const navigate = useNavigate();

    const { idHistorico } = useParams();
    const historyDay = JSON.parse(localStorage.getItem('history'));
    const dayProgress = JSON.parse(localStorage.getItem('day-progress'));

    useEffect(() => {
        if (historyDay.day !== idHistorico.replaceAll('-', '/')) {
            window.alert('Use o calendário para navegar para o dia desejado');
            navigate('/historico');
        }
    }, []);

    return (
        <>
            <Header />
            <SingleHistoryContainer>
                <p className="single-history-title">Histórico, dia {historyDay.day}</p>
                <p className="progress-text">Nesse dia você completou <span>{dayProgress}%</span> dos seus hábitos:</p>

                {historyDay.habits.map(habit => {
                    return (
                        <Habit key={habit.id}>
                            <p className="name-text">{habit.name}</p>
                            <CheckBox check={habit.done}><img src={check} alt="" /></CheckBox>
                        </Habit>
                    )
                })}

            </SingleHistoryContainer>
            <Menu />
        </>
    )
}