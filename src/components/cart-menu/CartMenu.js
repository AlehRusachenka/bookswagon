import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import styles from "./cartMenu.module.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.cart_menu}>
      <div className={styles.cart_menuBookList}>
        {items.length > 0
          ? items.map((book) => (
              <CartItem
                key={book.id}
                authors={book.authors}
                title={book.title}
                id={book.id}
              />
            ))
          : "Empty Cart"}
      </div>
      <Button onClick={onClick} children={"Place an Order"} />
    </div>
  );
};
export default CartMenu;
