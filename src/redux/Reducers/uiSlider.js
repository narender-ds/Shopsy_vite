const initialState = {
  cartDrawerVisible: false,
};

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ui/toggle':
      return {
        ...state,
        cartDrawerVisible: !state.cartDrawerVisible,
      };
    default:
      return state;
  }
};
export default uiReducer


