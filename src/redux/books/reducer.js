const initialState = {
  books: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_BOOKS":
      return { ...state, books: action.payload };

    default:
      return state;
  }
};
export default bookReducer;
