import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import LoginForm from "../login-form/LoginForm";
import { setUser } from "../../redux/login/actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        navigate("/bookswagon/account");
      })
      .catch(() =>
        alert(
          "Something went wrong. Kindly check whether email or password are filled correctly."
        )
      );
  };
  return <LoginForm title="Login" handleClick={handleClick} />;
};
export default Login;
