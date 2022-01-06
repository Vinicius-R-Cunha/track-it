import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../MyContext";
import { Nav } from "./style";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {

    const { progress } = useContext(MyContext);

    return (
        <Nav>
            <Link to={'/habitos'}>Hábitos</Link>
            <Link to={'/hoje'}>
                <CircularProgressbar
                    className="circle-div"
                    value={progress}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        pathTransitionDuration: 0.5,
                        backgroundColor: "#52B6FF",
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        trailColor: "transparent"
                    })}
                />
            </Link>

            <Link to={'/historico'}>Histórico</Link>
        </Nav>
    );
}