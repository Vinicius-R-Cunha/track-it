import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Container } from './style.js';

export default function Login() {

    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        console.log('não atualizou ao clicar')
        e.preventDefault();
    }

    return (
        <Container>
            <img src={logo} alt="" />
            <input type="email" placeholder='email' />
            <input type="senha" placeholder='senha' />
            {!login &&
                <>
                    <input type="text" placeholder='nome' />
                    <input type="text" placeholder='foto' />
                </>
            }
            <button onClick={(e) => handleSubmit(e)}>{login ? 'Entrar' : 'Cadastrar'}</button>
            <p onClick={() => setLogin(!login)}>{login ? 'Não tem uma conta? Cadastre-se!' : 'Já tem uma conta? Faça login!'}</p>
        </Container>
    );
}