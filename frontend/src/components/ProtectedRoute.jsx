import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo.isAdmin ? <Outlet/> : <Navigate to='/forbidden' replace />
}

export default ProtectedRoute
