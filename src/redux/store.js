// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./books/reducer";
import cartReducer from "./cart/reducer";
import themeReducer from "./theme/reducer";
import searchReducer from "./search/reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: bookReducer,
    theme: themeReducer,
    search: searchReducer,
  },
});
export default store;
