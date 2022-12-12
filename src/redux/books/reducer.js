const initialState = {
  books: null,
  book: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_BOOKS":
      return { ...state, books: action.payload };

    case "SHOW_ONE_BOOK":
      return { ...state, book: action.payload };

    default:
      return state;
  }
};
export default bookReducer;
