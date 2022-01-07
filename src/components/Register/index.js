import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import logo from '../../assets/logo.png';
import { Container, StyledButton } from '../Login/style.js';

export default function Register() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setLoading('loading');

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
            {
                email,
                name,
                image,
                password
            });

        promise.then(() => {
            setLoading();
            navigate('/');
        });
        promise.catch(() => {
            setLoading();
            alert('Preencha as informações corretamente');
        });
    }

    return (
        <Container>
            <img src={logo} alt="" />
            <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} disabled={loading} />
            <input type="password" placeholder='senha' onChange={e => setPassword(e.target.value)} disabled={loading} />
            <input type="text" placeholder='nome' onChange={e => setName(e.target.value)} disabled={loading} />
            <input type="text" placeholder='foto' onChange={e => setImage(e.target.value)} disabled={loading} />
            <StyledButton disabled={loading} onClick={(e) => handleSubmit(e)}>
                {loading ?
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={13}
                        width={51}
                        timeout={3000}
                    /> : 'Cadastrar'}
            </StyledButton>
            <Link to={loading ? '' : '/'}>Já tem uma conta? Faça login!</Link>
        </Container>
    );
}