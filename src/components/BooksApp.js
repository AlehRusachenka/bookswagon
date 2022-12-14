import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Home from "../pages/home-page";
import BookPage from "../pages/book-page";
import OrderPage from "../pages/order-page";
import Footer from "./footer/Footer";
import Theme from "./main-theme/Theme";
import AccountPage from "../pages/account-page";
import LoginPage from "../pages/login-page";
import RegistrePage from "../pages/registre-page";

const BooksApp = () => {
  return (
    <>
      <Provider store={store}>
        <Theme />
        <Header />
        <Routes basename="/bookswagon/">
          <Route path="/bookswagon" element={<Home />} />
          <Route path="bookswagon/:id" element={<BookPage />} />
          <Route path="bookswagon/order" element={<OrderPage />} />
          <Route path="bookswagon/account" element={<AccountPage />} />
          <Route path="bookswagon/login" element={<LoginPage />} />
          <Route path="bookswagon/registre" element={<RegistrePage />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};
export default BooksApp;
