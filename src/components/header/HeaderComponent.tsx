import {Link} from "react-router";

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <ul>
                <li><Link to={'/'}>MOVIES</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;