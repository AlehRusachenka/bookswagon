import styles from "./input.module.css";

const Input = ({ id, type, name, placeholder, value, onChange }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
};
export default Input;
