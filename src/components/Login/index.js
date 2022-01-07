import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, StyledButton } from './style.js';
import Loader from 'react-loader-spinner';
import logo from '../../assets/logo.png';
import MyContext from '../../MyContext.js';

export default function Login() {

    const { profile, setProfile } = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (profile !== null) {
            navigate('/hoje');
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setLoading('loading');

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
            {
                email,
                password
            });

        promise.then(answer => {
            setProfile(answer.data);
            localStorage.setItem('Saved Profile', JSON.stringify(answer.data));
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
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} disabled={loading} value={email} />
            <input type="password" placeholder='senha' onChange={e => setPassword(e.target.value)} disabled={loading} value={password} />
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
            <Link to={loading ? '' : '/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    );
}