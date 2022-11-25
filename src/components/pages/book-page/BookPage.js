import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import Button from "../../button/Button";
import BookGenre from "../../book-genre/BookGenre";
import BookRating from "../../book-rating/BookRating";

import styles from "./bookPage.module.css";

const BookPage = () => {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState();
  let navigate = useNavigate();

  const backToHome = () => {
    navigate("/bookswagon");
  };

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
          </div>
        </div>
      )}
    </>
  );
};
export default BookPage;
