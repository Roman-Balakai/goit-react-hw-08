import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return isLoggedIn ? (
    <Navigate to={location.store || "/contacts"} />
  ) : (
    children
  );
};

export default RestrictedRoute;
