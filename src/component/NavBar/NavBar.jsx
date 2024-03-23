import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="max-w-screen-xl mx-auto flex justify-between py-12 items-center">
            <h1 className="text-[#1A1919] text-3xl font-extrabold">CareerHub</h1>
            <ul className="text-[#757575] text-base font-medium space-x-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/appliedjobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </ul>
            <div>
                <button className="text-white text-xl font-bold px-7 py-4 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Star Applying</button>
            </div>
        </nav>
    );
};

export default NavBar;