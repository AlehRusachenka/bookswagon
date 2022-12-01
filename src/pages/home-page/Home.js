import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../services/books";

import BookCarousel from "../../components/book-carousel/BookCarousel";
import BooksList from "../../components/books-list/BooksList";
import BooksSearch from "../../components/book-search/BooksSearch";

import styles from "./home.module.css";
import BookSubscribe from "../../components/book-subscribe/BookSubscribe";

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const searchBook = useSelector((state) => state.search.search);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (!books) {
    return (
      <div className="container">
        <h1 className={styles.home__loading}>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.home}>
        <div className="container">
          <div className={styles.home__promo}>
            <div className={styles.home__promo_container}>
              <BookCarousel />
            </div>
            <BookSubscribe />
          </div>
          <div className={styles.home__container}>
            <h1 className={styles.home__title}>Books Wagon</h1>
            <BooksSearch bookList={books} />
          </div>
          <div className={styles.home__list}>
            <BooksList books={searchBook ? searchBook : books} />
          </div>
          <div className={styles.home__btnContainer}></div>
        </div>
      </div>
    </>
  );
};
export default Home;
