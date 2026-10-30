import "./header.css";
import {Link} from "react-router";
import UserInfoComponent from "../user-info/UserInfoComponent.tsx";

const HeaderComponent = () => {


    return (
        <header>
            <div className={"container"}>
                <ul>
                    <li><Link to={'/'}>MOVIES</Link></li>
                </ul>
                <div>
                    <UserInfoComponent/>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;