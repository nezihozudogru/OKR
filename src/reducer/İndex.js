export const initialState = {
  loading: true,
  Products: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        Products: action.payload
      };
    case "SEARCH_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
