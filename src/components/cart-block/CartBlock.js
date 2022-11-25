import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BiCartAlt } from "react-icons/bi";
import ItemsInCart from "../items-in-cart/ItemsInCart";
import CartMenu from "../cart-menu/CartMenu";

import styles from "./cartBlock.module.css";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState();
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate(`bookswagon/order`);
  }, [navigate]);

  return (
    <>
      <div className={styles.cart__block}>
        <ItemsInCart quantity={items.length} />
        <BiCartAlt
          size={25}
          className={styles.cartBlock__icon}
          onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        />
        {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
      </div>
    </>
  );
};
export default CartBlock;
