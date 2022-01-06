import Header from "../Header";
import Menu from "../Menu";
import { HistoryPage } from "./style";

export default function History() {
    return (
        <>
            <Header />
            <HistoryPage>
                <p className="history-title">Histórico</p>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </HistoryPage>
            <Menu />
        </>
    );
}