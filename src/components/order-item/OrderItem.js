import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";

import styles from "./orderItem.module.css";

const OrderItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(book.id));
  };

  return (
    <div className="container">
      <div className={styles.order__item}>
        <div className={styles.book__cover}>
          <img
            src={book.formats["image/jpeg"]}
            className={styles.order__item_img}
            alt="pic"
          />
        </div>
        <div className={styles.text__wrap}>
          <div className={styles.order__item_title}>
            <span>{book.title}</span>
          </div>
          <AiOutlineCloseCircle
            size={25}
            className={styles.order__item_delet_icon}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
