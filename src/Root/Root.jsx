import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";

const Root = () => {
    return (
        <div className="">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;