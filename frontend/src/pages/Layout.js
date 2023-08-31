import { Outlet, Link } from "react-router-dom";
import TopBar from "../components/TopBar";

const Layout = () => {
    
    const pages = [{pageName: "About", link: "/about"}];

  return (
    <>
      <TopBar pages={pages}></TopBar>

      <Outlet />
    </>
  )
};

export default Layout;