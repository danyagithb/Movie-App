import {Link} from "react-router";
import UserInfoComponent from "../user-info/UserInfoComponent.tsx";

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <ul>
                <li><Link to={'/'}>MOVIES</Link></li>
            </ul>
            <div>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;