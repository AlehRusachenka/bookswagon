import { useSelector } from "react-redux";
import OrderItem from "../../components/order-item/OrderItem";
import { calcTotalPrice } from "../../components/utils";

import styles from "./orderPage.module.css";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  let totalPrice = null;
  if (items) {
    totalPrice = calcTotalPrice(items);
  }

  if (items.length < 1) {
    return (
      <div className="container">
        <h1 className={styles.order_page_title}>There are no orders</h1>
      </div>
    );
  }
  return (
    <>
      {items && (
        <div className={styles.order_page}>
          <div className="container">
            <div className={styles.order_pageItem}>
              {items.map((book) => (
                <OrderItem key={book.id} book={book} />
              ))}
            </div>
            <div className={styles.order_page__total_price}>
              <span>
                {items.length} products of sum {totalPrice}$
              </span>
              {/* {totalPrice > 0 ? (
              ) : null} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default OrderPage;
