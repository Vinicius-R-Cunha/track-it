import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import MyContext from "../../MyContext";
import Header from "../Header";
import Menu from "../Menu";
import { HabitsDiv, MyHabits, HabitCreator, DayBox, Habit, DaySelection } from "./style";

export default function HabitsPage() {

    const navigate = useNavigate();

    const { profile } = useContext(MyContext);
    const [name, setName] = useState('');
    const [habitsArray, setHabitsArray] = useState();
    const [showCreation, setShowCreation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weekDays, setWeekDays] = useState([
        { day: 'D', selected: false },
        { day: 'S', selected: false },
        { day: 'T', selected: false },
        { day: 'Q', selected: false },
        { day: 'Q', selected: false },
        { day: 'S', selected: false },
        { day: 'S', selected: false }
    ]);

    useEffect(() => {
        if (profile !== null) {
            renderPage();
        } else {
            navigate('/');
        }
    }, []);

    function renderPage() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                headers: { Authorization: `Bearer ${profile.token}` }
            });
        promise.then(answer => setHabitsArray(answer.data));
    }

    function handleSelection(clickedObject) {
        if (!loading) {
            setWeekDays(weekDays.map(currentObj => {
                if (currentObj === clickedObject) {
                    currentObj = { ...clickedObject };
                    currentObj.selected = !currentObj.selected;
                }
                return currentObj;
            }));
        }
    }

    function resetNameWeek() {
        setName('');
        setWeekDays(weekDays.map(currentObj => {
            currentObj = { ...currentObj };
            currentObj.selected = false;
            return currentObj;
        }));
        setLoading(false);
    }

    function makeDaysArray() {
        const aux = [];
        for (let i = 0; i < weekDays.length; i++) {
            if (weekDays[i].selected) {
                aux.push(i);
            }
        }
        return aux;
    }

    function saveHabit() {
        setLoading(true);

        const days = makeDaysArray();
        const postHabit = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { name, days },
            {
                headers: { Authorization: `Bearer ${profile.token}` }
            });
        postHabit.then(() => {
            setShowCreation(false);
            resetNameWeek();
            renderPage();
        });
        postHabit.catch(() => {
            alert('preencha o hábito');
            resetNameWeek();
            renderPage();
        });
    }

    function deleteHabit(id) {
        if (window.confirm("Quer mesmo deletar esse hábito?")) {
            const deletePromise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                {
                    headers: { Authorization: `Bearer ${profile.token}` }
                });
            deletePromise.then(() => renderPage());
            deletePromise.catch(answer => console.log(answer));
        }
    }

    if (!habitsArray) {
        return (
            <></>
        );
    }

    return (
        <>
            <Header />

            <HabitsDiv>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <div onClick={() => setShowCreation(true)}>+</div>
                </MyHabits>

                {showCreation &&
                    <HabitCreator>
                        <input disabled={loading} type="text" placeholder="nome do hábito" onChange={e => setName(e.target.value)} value={name} />
                        <DaySelection>
                            {weekDays.map((object, index) =>
                                <DayBox
                                    key={index}
                                    selected={object.selected}
                                    onClick={() => handleSelection(object)}>
                                    {object.day}
                                </DayBox>
                            )}
                        </DaySelection>
                        <div className="action-buttons">
                            <button className={loading ? 'opacity' : ''} onClick={() => setShowCreation(false)}>Cancelar</button>
                            <button className={loading ? 'opacity' : ''} onClick={saveHabit}>{loading ?
                                <Loader
                                    type="ThreeDots"
                                    color="#FFFFFF"
                                    height={13}
                                    width={51}
                                    timeout={3000}
                                /> : 'Salvar'}</button>
                        </div>
                    </HabitCreator>}

                {habitsArray.map(habit => {
                    return (
                        <Habit key={habit.id}>
                            <p className="titulo">{habit.name}</p>
                            <ion-icon onClick={() => deleteHabit(habit.id)} name="trash-outline"></ion-icon>
                            <DaySelection>
                                {weekDays.map((object, index) =>
                                    <DayBox
                                        key={index}
                                        selected={habit.days.includes(index) ? true : false}>
                                        {object.day}
                                    </DayBox>
                                )}
                            </DaySelection>
                        </Habit>
                    )
                })}

                {habitsArray.length === 0 &&
                    <p className="no-habit">
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>}

            </HabitsDiv>

            <Menu />
        </>
    );
}