import styles from "./bookCover.module.css";

const BookCover = ({ formats }) => {
  return (
    <>
      <img
        src={formats["image/jpeg"]}
        alt="bookcover"
        className={styles.bookCover}
      />
    </>
  );
};
export default BookCover;
