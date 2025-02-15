import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={styles.authNav}>
      <NavLink to="/register" className={styles.authLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.authLink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
