const InitialStore = {
  id: null,
  email: null,
  token: null,
};

const loginReducer = (state = InitialStore, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
      };

    case "REMOVE_USER":
      return { ...state, id: null, email: null, token: null };

    default:
      return state;
  }
};
export default loginReducer;
