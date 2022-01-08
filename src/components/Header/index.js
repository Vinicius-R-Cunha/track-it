import { CustomHeader } from './style.js';
import MyContext from '../../MyContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const { profile } = useContext(MyContext);

    function disconnectUser() {
        if (window.confirm("Quer mesmo sair?")) {
            localStorage.clear();
            window.location.reload();
        }
    }

    return (
        <CustomHeader>
            <div>
                <ion-icon onClick={disconnectUser} name="exit-outline"></ion-icon>
                <p>TrackIt</p>
            </div>
            <img src={profile.image} alt="" />
        </CustomHeader>
    );
}