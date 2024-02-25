import { NavLink } from "react-router-dom";



const UserSidebar = () => {
    return (<>
        <nav className="h-full flex flex-col  bg-blue-300">
            <NavLink className=" no-underline text-white drop-shadow-sm shadow-gray-600 px-4 py-4 hover:bg-blue-200">General Information</NavLink>
            <NavLink className=" no-underline text-white drop-shadow-sm shadow-gray-600 px-4 py-4 hover:bg-blue-200">Sell products</NavLink>
            <NavLink className=" no-underline text-white drop-shadow-sm shadow-gray-600 px-4 py-4 hover:bg-blue-200">Shipping</NavLink>
            <NavLink className=" no-underline text-white drop-shadow-sm shadow-gray-600 px-4 py-4 hover:bg-blue-200">Watch list</NavLink>
            <NavLink className=" no-underline text-white drop-shadow-sm shadow-gray-600 px-4 py-4 hover:bg-blue-200">Change password</NavLink>
        </nav>
    </>)
}

export default UserSidebar;