import Details from "./Details";
import Mainpage from "./Mainpage";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedPage = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}

export default ProtectedPage;