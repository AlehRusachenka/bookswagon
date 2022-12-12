import { useSelector } from "react-redux";

export const useLogin = () => {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isLogin: !!email,
    email,
    token,
    id,
  };
};
