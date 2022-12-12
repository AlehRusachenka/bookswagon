import { Link } from "react-router-dom";
import Registre from "../../components/registre/Registre";

import styles from "./registrePage.module.css";

const RegistrePage = () => {
  return (
    <div className={styles.registre}>
      <div className="container">
        <h1>Registre</h1>
        <Registre />
        <p>
          Do you have an account?{" "}
          <Link to="/bookswagon/login" className={styles.registre__link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegistrePage;
