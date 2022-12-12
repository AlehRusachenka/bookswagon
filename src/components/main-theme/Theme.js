import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { set } from "../../redux/theme/reducer";

import styles from "./theme.module.css";

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === "dark" ? "light" : "dark";
    dispatch(set(next));
  };

  return (
    <div className={styles.theme}>
      <div className="container">
        <div className={styles.switcher}>
          <label className={styles.toggle__switch}>
            <input
              type="checkbox"
              onChange={handleChange}
              // checked={}
            ></input>
            <span className={styles.switch}></span>
          </label>
          <span className={styles.toggle__switchText}>Use Dark Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Theme;
