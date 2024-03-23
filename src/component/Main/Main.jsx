import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Main = () => {
    return (
        <main className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </main>
    );
};

export default Main;