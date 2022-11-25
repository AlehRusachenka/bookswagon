import styles from "./bookGenre.module.css";

const BookGenre = ({ genre }) => {
  return <span className={styles.genre}>{genre}</span>;
};
export default BookGenre;
