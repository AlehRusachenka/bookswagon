import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useLogin } from "../../hooks/useLogin";
import { removeUser } from "../../redux/login/actions";

const AccountPage = () => {
  const dispatch = useDispatch();
  //   const email = useSelector((state) => state.user.email);

  return (
    <>
      <h1>Welcome back!</h1>
      {/* <h3>We are glad to see you {email} on our site </h3> */}
      <button onClick={() => dispatch(removeUser())}>Leave App</button>
    </>
  );
  //   const { isLogin } = useLogin();

  //   return isLogin ? (
  //     <div>
  //       <h1>Welcome back!</h1>
  //       <button onClick={() => dispatch(removeUser())}>Leave App</button>
  //     </div>
  //   ) : (
  //     <Navigate to="/bookswagon/login" />
  //   );
};
export default AccountPage;
