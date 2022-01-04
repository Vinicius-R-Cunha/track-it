import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './styles/reset.css';
import './styles/style.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                {/* <Route path='/cadastro' element={<Teste />} />
                <Route path='/habitos' element={<Teste />} />
                <Route path='/hoje' element={<Teste />} />
                <Route path='/historico' element={<Teste />} /> */}
            </Routes>
        </BrowserRouter>
    );
}