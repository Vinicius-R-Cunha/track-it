import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './styles/reset.css';
import './styles/style.css';
import TodayPage from './components/TodayPage';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/hoje' element={<TodayPage />} />
                {/* <Route path='/habitos' element={<Teste />} />
                <Route path='/historico' element={<Teste />} /> */}
            </Routes>
        </BrowserRouter>
    );
}