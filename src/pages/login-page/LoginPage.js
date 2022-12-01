import styles from "./loginPage.module.css";

import { Link } from "react-router-dom";
import Login from "../../components/login/Login";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className="container">
        <h1>Log In</h1>
        <Login />
        <p>
          or{" "}
          <Link to="/bookswagon/registre" className={styles.login__link}>
            Registre your account
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
