import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

import styles from "./loginForm.module.css";

const LoginForm = ({ handleClick, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.login__form}>
      <Input
        type={"email"}
        value={email}
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"password"}
        value={password}
        placeholder={"Password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => handleClick(email, password)}>{title}</Button>
    </div>
  );
};
export default LoginForm;
