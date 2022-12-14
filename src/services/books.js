import axios from "axios";
import { showBooks } from "../redux/books/actions";

export const fetchBooks = () => {
  return function (dispatch) {
    axios.get(`https://gutendex.com/books/?`).then((response) => {
      const books = response.data.results;
      dispatch(showBooks(books));
    });
  };
};
