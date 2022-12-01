// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./books/reducer";
import cartReducer from "./cart/reducer";
import themeReducer from "./theme/reducer";
import searchReducer from "./search/reducer";
import loginReducer from "./login/reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: bookReducer,
    theme: themeReducer,
    search: searchReducer,
    login: loginReducer,
  },
});
export default store;
