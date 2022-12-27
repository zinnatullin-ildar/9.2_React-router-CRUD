import { Outlet } from "react-router-dom";
import HeaderBar from './elements/HeaderBar';

function Main() {
    return (
        <div className={'main-container'}>
            <HeaderBar />
            <Outlet />
        </div>
    )
}

export default Main;
