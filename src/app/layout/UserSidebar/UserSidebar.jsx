import { NavLink } from "react-router-dom";

import './UserSidebar.css';

const UserSidebar = () => {
    return (<>
        <nav className="flex flex-col bg-blue-300">
            <NavLink className={({isActive}) => ((isActive ? "active" : "") + " nav-linkk")} to="general-information">
            General Information
            </NavLink>
            <NavLink className={({isActive}) => ((isActive ? "active" : "") + " nav-linkk")} to="sell-products">Sell products</NavLink>
            <NavLink className={({isActive}) => ((isActive ? "active" : "") + " nav-linkk")} to={"orders"}>Orders</NavLink>
            <NavLink className={({isActive}) => ((isActive ? "active" : "") + " nav-linkk")} to={"watch-list"}>Watch list</NavLink>
            <NavLink className={({isActive}) => ((isActive ? "active" : "") + " nav-linkk")}>Change password</NavLink>
        </nav>
    </>)
}

export default UserSidebar;