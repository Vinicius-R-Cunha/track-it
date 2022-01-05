import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import logo from '../../assets/logo.png';
import { Container, StyledButton } from './style.js';

export default function Login() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setLoading('loading');

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
            {
                email,
                password
            });

        promise.then(() => {
            setLoading();
            navigate('/hoje');
        });

        promise.catch(() => {
            setLoading();
            alert('Usuário e/ou senha incorretos');
        });
    }

    return (
        <Container>
            <img src={logo} alt="" />
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} disabled={loading} />
            <input type="password" placeholder='senha' onChange={e => setPassword(e.target.value)} disabled={loading} />
            <StyledButton disabled={loading} onClick={(e) => handleSubmit(e)}>
                {loading ?
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={13}
                        width={51}
                        timeout={3000}
                    /> : 'Entrar'}
            </StyledButton>
            <Link to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    );
}