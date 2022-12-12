import axios from "axios";
import { showBooks, showOneBook } from "../redux/books/actions";

export const fetchBooks = () => {
  return function (dispatch) {
    axios.get(`https://gutendex.com/books/?`).then((response) => {
      const books = response.data.results;
      dispatch(showBooks(books));
    });
  };
};

// export const fetchOneBook = (id) => {
//   return function (dispatch) {
//     axios.get(`https://gutendex.com/books/${id}`).then((response) => {
//       const bookInfo = response.data;
//       dispatch(showOneBook(bookInfo));
//     });
//   };
// };
