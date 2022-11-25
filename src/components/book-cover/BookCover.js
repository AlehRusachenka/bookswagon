import styles from "./bookCover.module.css";

const BookCover = ({ formats }) => {
  return (
    <>
      <img
        src={formats["image/jpeg"]}
        alt="bookcover"
        className={styles.bookCover}
      />
      {/* <div
        className={styles.bookCover}
        style={{ backgroundImage: `url(${formats["image/jpeg"]})` }}
      ></div> */}
    </>
  );
};
export default BookCover;
