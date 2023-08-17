// Importing action types from ActionTypes.js
import * as types from "../Actions/ActionTypes";

// Initial state of the product reducer
const initialState = {
  products: [], // Array to store the fetched products
  category: [], // Array to store the fetched categories
  productDetail: typeof window!=="undefined"? JSON.parse(localStorage.getItem("productDetail")) || []:[], // Array to store the fetched product details
  loading:false// Flag to indicate whether data is loading or not
};

// ProductReducer function to handle state updates based on actions
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.Fetch_Products_Pending:
      return { ...state,
      loading:true
      };
    case types.Fetch_Products:
      // When 'Fetch_Products' action is dispatched, update the state with fetched products
      return {
        ...state,
        products: action.payload, // Setting 'products' array to the fetched data
        loading:false
        , // Set 'loading' flag to false as data has been loaded
      };
    case types.Search_results:
      // When 'Search_results' action is dispatched, update the state with search results
      return {
        ...state,
        products: action.payload, // Setting 'products' array to the search results
        loading: false, // Set 'loading' flag to false as data has been loaded
      };
    case types.Fetch_Category:
      // When 'Fetch_Category' action is dispatched, update the state with fetched categories
      return {
        ...state,
        category: action.payload, // Setting 'category' array to the fetched data
        loading: false, // Set 'loading' flag to false as data has been loaded
      };
    case types.Fetch_Category_Data:
      // When 'Fetch_Category_Data' action is dispatched, update the state with fetched category data
      return {
        ...state,
        products: action.payload, // Setting 'products' array to the fetched data
        loading: false, // Set 'loading' flag to false as data has been loaded
      };
    case types.Fetch_Product_Detail:
      // When 'Fetch_Product_Detail' action is dispatched, update the state with fetched product detail
         state.productDetail=action.payload
        localStorage.setItem("productDetail", JSON.stringify(state.productDetail));
       return {
        ...state,
      };

    default:
      // For any other action types, return the current state
      return state;
  }
};

// Exporting the ProductReducer function as the default export
export default ProductReducer;
