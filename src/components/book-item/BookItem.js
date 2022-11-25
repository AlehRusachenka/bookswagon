import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BookCover from "../book-cover/BookCover";
import BookOrder from "../book-order/BookOrder";

import styles from "./bookItem.module.css";

const BookItem = ({ id, title, formats, book }) => {
  return (
    <Col
      lg={3}
      md={4}
      sm={6}
      xs={12}
      style={{
        margin: "10px 0px",
      }}
    >
      <Card style={{ background: "var(--primary-color)" }}>
        <Link to={`${id}`} className={styles.item__link}>
          <BookCover formats={formats} />
        </Link>
        <Card.Body>
          <Card.Title className={styles.card__title}>{title}</Card.Title>
          <BookOrder book={book} />
        </Card.Body>
      </Card>
    </Col>
  );
};
export default BookItem;
