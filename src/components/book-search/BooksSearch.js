import styles from "./search.module.css";

import { useDispatch } from "react-redux";

import { searchReducer } from "../../redux/search/actions";

const BooksSearch = ({ bookList }) => {
  const dispatch = useDispatch();

  const searchingBook = (e) => {
    let inputValue = e.target.value;
    if (bookList) {
      let coppyBookList = [...bookList];
      if (inputValue) {
        let filterBook = coppyBookList.filter((book) => {
          return book.title.toLowerCase().includes(inputValue.toLowerCase());
        });

        dispatch(searchReducer(filterBook));
      } else {
        dispatch(searchReducer(null));
      }
    }
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search by title..."
          name="search"
          className={styles.search__input}
          onChange={searchingBook}
        />
      </div>
    </>
  );
};

export default BooksSearch;
