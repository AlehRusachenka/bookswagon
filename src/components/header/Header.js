import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartBlock from "../cart-block/CartBlock";
import { TfiHome } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

import "./header.css";

const Header = () => {
  const [sticky, setSticky] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 170 ? "is_sticky" : null;
    setSticky(stickyClass);
  };

  const classes = `header ${sticky}`;

  const handleClick = () => {
    navigate("bookswagon/account");
  };

  return (
    <>
      <header className={classes}>
        <div className="container">
          <div className="header__container">
            <nav className="header__nav">
              <Link to="/bookswagon" className="header__home_link">
                <TfiHome size={25} className="header__icon" />
              </Link>
              <p className="header__text">Contacts</p>
              <p className="header__text">Help</p>
            </nav>
            <div className="header__client_profile">
              <Link to="/bookswagon/order" className="header__home_link">
                <div className="header__text">My orders</div>
              </Link>
              <Link to="/bookswagon/login" className="header__home_link">
                <div className="header__text">Sign in/Sign up</div>
              </Link>
            </div>
            <div className="header__cartBtnContainer">
              <VscAccount
                size={20}
                className="header__accIcon"
                onClick={handleClick}
              />
              <CartBlock />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
