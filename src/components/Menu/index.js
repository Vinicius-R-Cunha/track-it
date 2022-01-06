import { Link } from "react-router-dom";
import { Nav } from "./style";

export default function Menu() {
    return (
        <Nav>
            <Link to={'/habitos'}>Hábitos</Link>
            <Link to={'/hoje'}>
                <div>Hoje</div>
            </Link>
            <Link to={'/historico'}>Histórico</Link>
        </Nav>
    );
}