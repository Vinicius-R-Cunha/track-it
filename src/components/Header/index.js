import { CustomHeader } from './style.js';
import MyContext from '../../MyContext';
import { useContext } from 'react';

export default function Header() {

    const profile = useContext(MyContext);

    return (
        <CustomHeader>
            <p>TrackIt</p>
            <img src={profile.image} alt="" />
        </CustomHeader>
    );
}