import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Home from "./pages/home-page/Home";
import BookPage from "./pages/book-page/BookPage";
import OrderPage from "./pages/order-page/OrderPage";
import Footer from "./footer/Footer";
import Theme from "./main-theme/Theme";

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
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};
export default BooksApp;
