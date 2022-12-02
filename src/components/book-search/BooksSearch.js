import { useDispatch } from "react-redux";
import { searchReducer } from "../../redux/search/actions";
import Input from "../input/Input";

import styles from "./search.module.css";

const BooksSearch = ({ bookList }) => {
  const dispatch = useDispatch();

  const searchingBook = (e) => {
    let inputValue = e.target.value;
    if (bookList) {
      let coppyBookList = [...bookList];
      inputValue = inputValue.trim();
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
        <Input
          type={"text"}
          name={"search"}
          placeholder={"Search by title"}
          onChange={searchingBook}
        />
      </div>
    </>
  );
};

export default BooksSearch;
