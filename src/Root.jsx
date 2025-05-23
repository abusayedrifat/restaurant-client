import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navabar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;