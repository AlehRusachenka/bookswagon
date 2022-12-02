import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import LoginForm from "../login-form/LoginForm";
import { setUser } from "../../redux/login/actions";

const Registre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => console.log("Error: Something went wrong"));
  };

  return <LoginForm title="Registre" handleClick={handleClick} />;
};
export default Registre;
