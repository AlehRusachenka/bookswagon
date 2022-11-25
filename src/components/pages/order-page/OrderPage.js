import { useSelector } from "react-redux";
import OrderItem from "../../order-item/OrderItem";

import styles from "./orderPage.module.css";

const OrderPage = ({ formats }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return (
      <div className="container">
        <h1 className={styles.order_page_title}>There are no orders</h1>
      </div>
    );
  }
  return (
    <div className={styles.order_page}>
      <div className={styles.order_pageItem}>
        {items.map((book) => (
          <OrderItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default OrderPage;
