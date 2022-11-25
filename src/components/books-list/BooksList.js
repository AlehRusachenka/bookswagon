import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BookItem from "../book-item/BookItem";

import "bootstrap/dist/css/bootstrap.min.css";

const BooksList = ({ books }) => {
  const allBooks = books.map((book) => (
    <BookItem key={book.id} {...book} book={book} />
  ));

  return (
    <>
      <Container>
        <Row>{allBooks}</Row>
      </Container>
    </>
  );
};
export default BooksList;
