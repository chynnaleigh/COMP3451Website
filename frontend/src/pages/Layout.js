import { Outlet, Link } from "react-router-dom";
import TopBar from "../components/TopBar";

const Layout = () => {
    return (
        <>
            <TopBar></TopBar>

            <Outlet />
        </>
    );
};

export default Layout;
