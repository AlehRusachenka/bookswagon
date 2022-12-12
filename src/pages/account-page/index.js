import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLogin } from "../../hooks/useLogin";
import { removeUser } from "../../redux/login/actions";

import styles from "./accountPage.module.css";

const AccountPage = () => {
  const dispatch = useDispatch();
  const { isLogin } = useLogin();

  return isLogin ? (
    <>
      <div className={styles.account}>
        <div className="container">
          <h1>We are glad to see you in our BooksWagon shop!</h1>
          <button onClick={() => dispatch(removeUser())}>Leave App</button>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/bookswagon/account" />
  );
};
export default AccountPage;
