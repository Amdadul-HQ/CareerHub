import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Main = () => {
    const location = useLocation()
    console.log(location);
    return (
        <main>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Main;