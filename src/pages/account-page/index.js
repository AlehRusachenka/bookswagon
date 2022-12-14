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
          <h1 className={styles.title}>
            We are glad to see you in our Books Wagon shop!
          </h1>
          <button
            className={styles.account__btn}
            onClick={() => dispatch(removeUser())}
          >
            Leave Shop
          </button>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/bookswagon/login" />
  );
};
export default AccountPage;
