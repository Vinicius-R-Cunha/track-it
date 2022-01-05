import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodayPage from './components/TodayPage';
import './styles/reset.css';
import './styles/style.css';
import MyContext from './MyContext';
import { useState } from 'react/cjs/react.development';

export default function App() {

    const [profile, setProfile] = useState();

    return (
        <MyContext.Provider value={profile}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login setProfile={setProfile} />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/hoje' element={<TodayPage />} />
                    {/* <Route path='/habitos' element={<Teste />} />
                    <Route path='/historico' element={<Teste />} /> */}
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    );
}
