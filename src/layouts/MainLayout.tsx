import HeaderComponent from "../components/header/HeaderComponent.tsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div className={'main-layout'}>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;