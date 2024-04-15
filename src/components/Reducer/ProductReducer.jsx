const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_CALL":
      const featureProducts = action.payload.filter((curEll) => {
        return curEll.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        featureProducts: featureProducts,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
   
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
        singleProduct:action.payload,
      };

      case "SET_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };

    default:
      return state;
  }
  // return state;
};

export default ProductReducer;
