import classNames from "classnames";

import styles from "./button.css";

const Button = ({ children, onClick, type }) => {
  const btnClass = classNames({
    btn: true,
    "btn--primary": type === "primary",
    "btn--secondary": type === "secondary",
  });
  return (
    <>
      <button onClick={onClick} className={btnClass}>
        {children}
      </button>
    </>
  );
};
export default Button;
