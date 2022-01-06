import { useContext } from "react";
import MyContext from "../../MyContext";
import Header from "../Header";
import Menu from "../Menu";

export default function TodayPage() {

    const profile = useContext(MyContext);

    return (
        <>
            <Header />
            <Menu />
        </>
    );
}