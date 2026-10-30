import "./main-layout.css";
import HeaderComponent from "../components/header/HeaderComponent.tsx";
import {Outlet} from "react-router";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop.tsx";

const MainLayout = () => {
    return (
        <div className={'main-layout'}>
            <ScrollToTop/>
            <HeaderComponent/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;