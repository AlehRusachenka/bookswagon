import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchOneBook } from "../../services/books";

import axios from "axios";
import Button from "../../components/button/Button";
import BookGenre from "../../components/book-genre/BookGenre";
import BookRating from "../../components/book-rating/BookRating";
import Socials from "../../components/socials/Socials";
// import BookQuickRead from "../../components/book-quick-read/BookQuickRead";
// import Accordion from "react-bootstrap/Accordion";

import styles from "./bookPage.module.css";

const BookPage = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState();
  let navigate = useNavigate();

  const backToHome = () => {
    navigate("/bookswagon");
  };

  // useEffect(() => {
  //   dispatch(fetchOneBook());
  // }, [id]);

  useEffect(() => {
    axios.get(`https://gutendex.com/books/${id}`).then((response) => {
      const bookInfo = response.data;
      setBookInfo(bookInfo);
    });
  }, [id]);

  return (
    <>
      {bookInfo && (
        <div className={styles.moreInfo}>
          <div className="container">
            <div className={styles.moreInfo__container}>
              <div className={styles.moreInfo__imgWrap}>
                <img src={bookInfo.formats["image/jpeg"]} alt="cover" />
              </div>
              <div className={styles.moreInfo__textWrap}>
                <h4 className={styles.moreInfo__title}>{bookInfo.title}</h4>
                <p className={styles.moreInfo__author}>
                  Authors: {bookInfo.authors[0].name}
                </p>
                <div className={styles.moreInfo__genres}>
                  {bookInfo.subjects.map((genre) => (
                    <BookGenre genre={genre} key={genre} />
                  ))}
                </div>
                <div className={styles.rating}>
                  <BookRating />
                </div>
                <div className={styles.order}></div>
              </div>
              <div className={styles.btn}>
                <Button children={"Back to Home"} onClick={backToHome} />
              </div>
            </div>
            <Socials />
          </div>
        </div>
      )}
    </>
  );
};
export default BookPage;
