import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodayPage from './components/TodayPage';
import HabitsPage from './components/HabitsPage';
import History from './components/History';
import MyContext from './MyContext';
import { useState } from 'react';
import './styles/reset.css';
import './styles/style.css';

export default function App() {

    const savedProfile = JSON.parse(localStorage.getItem('Saved Profile'));

    const [profile, setProfile] = useState(savedProfile);
    const [progress, setProgress] = useState(0);

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
        <MyContext.Provider value={{ profile, setProfile, progress, setProgress, progressCalculation }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/hoje' element={<TodayPage />} />
                    <Route path='/habitos' element={<HabitsPage />} />
                    <Route path='/historico' element={<History />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    );
}
