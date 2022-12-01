import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";
import Button from "../button/Button";
import styles from "./bookOrder.module.css";

const BookOrder = ({ book, bookPrice }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === book.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(book.id));
    } else {
      dispatch(setItemInCart(book));
    }
  };

  return (
    <div className={styles.book_order}>
      {/* <span>{price()}$</span> */}
      <Button
        onClick={handleClick}
        type={isItemInCart ? "secondary" : "primary"}
        children={isItemInCart ? "Remove from Cart" : "Add to Cart"}
      />
    </div>
  );
};
export default BookOrder;
