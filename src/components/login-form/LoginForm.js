import { useState } from "react";
import Button from "../button/Button";

import styles from "./loginForm.module.css";

const LoginForm = ({ handleClick, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.login__form}>
      <input
        className={styles.login__input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className={styles.login__input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button onClick={() => handleClick(email, password)}>{title}</Button>
    </div>
  );
};
export default LoginForm;
