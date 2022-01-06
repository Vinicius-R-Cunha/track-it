import axios from "axios";
import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import { HabitsDiv, MyHabits, HabitCreator, DayBox, Habit, DaySelection } from "./style";
import Header from "../Header";
import Menu from "../Menu";
import { useState } from "react/cjs/react.development";
import Loader from "react-loader-spinner";

export default function HabitsPage() {

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


    const profile = useContext(MyContext);

    const config = {
        headers: { Authorization: `Bearer ${profile.token}` }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then(answer => setHabitsArray(answer.data));

    }, [config]);

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
        const postHabit = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { name, days }, config);
        postHabit.then(() => {
            setShowCreation(false);
            resetNameWeek();
            setLoading(false);
        });
        postHabit.catch(() => {
            alert('preencha o hábito');
            resetNameWeek();
            setLoading(false);
        });
    }

    function deleteHabit(id) {
        if (window.confirm("Quer mesmo deletar esse hábito?")) {
            const deletePromise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            deletePromise.catch(answer => console.log(answer));
        }
    }

    if (!habitsArray) {
        return (
            <h1>Carregando</h1>
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
                            <button className={loading && 'opacity'} onClick={() => setShowCreation(false)}>Cancelar</button>
                            <button className={loading && 'opacity'} onClick={saveHabit}>{loading ?
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