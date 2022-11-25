import styles from "./cartItem.module.css";

const CartItem = ({ title, authors }) => {
  return (
    <div>
      <div className={styles.cart_item}>
        <span className={styles.cart_item_title}>{title} </span>
        <div className={styles.cart_item_author}>
          <span>{authors[0].name}</span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
