import { CustomHeader } from './style.js';
import MyContext from '../../MyContext';
import { useContext } from 'react';
import photo from '../../assets/photo.png';

export default function Header() {

    const profile = useContext(MyContext);

    return (
        <CustomHeader>
            <p>TrackIt</p>
            <img src={photo} alt="" />
            {/* <img src={profile.image} alt="" /> */}
        </CustomHeader>
    );
}