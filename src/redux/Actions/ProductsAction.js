// Importing axios library to make HTTP requests
import axios from "axios";

// Importing action types from ActionTypes.js
import * as types from "./ActionTypes";

// Action creator for fetching products
export const setLoader=()=>({
  type:types.Fetch_Products_Pending,
})
const fetchProducts = (products) => ({
  type: types.Fetch_Products,
  payload: products,
});

// Action creator for search results
export const searchResult = (result) => ({
  type: types.Search_results,
  payload: result,
});

// Action creator for fetching categories
const fetchCategory = (category) => ({
  type: types.Fetch_Category,
  payload: category,
});

// Action creator for fetching category data
const fetchCategoryData = (categoryData) => ({
  type: types.Fetch_Category_Data,
  payload: categoryData,
});

// Action creator for fetching product details
const fetchProductDetail = (productDetail) => ({
  type: types.Fetch_Product_Detail,
  payload: productDetail,
});

// Async action creator to fetch products based on a limit
export const getProduct = (limit) => {
  return function (dispatch) {
    // Making a GET request to the API to fetch products
    axios
      .get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => {
        // Dispatching the 'fetchProducts' action with the fetched data as payload
        dispatch(fetchProducts(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};

// Async action creator to search for products based on a searchItem
export const searchProducts = (searchItem) => {
  return function (dispatch) {
    // Making a GET request to the API to search for products
    axios
      .get(`https://dummyjson.com/products/search?q=${searchItem}`)
      .then((res) => {
        // Dispatching the 'searchResult' action with the search results as payload
        dispatch(searchResult(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};

// Async action creator to fetch all categories
export const getCategory = () => {
  return function (dispatch) {
    // Making a GET request to the API to fetch categories
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => {
        // Dispatching the 'fetchCategory' action with the fetched data as payload
        dispatch(fetchCategory(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};

// Async action creator to fetch data for a specific category
export const getCategoryData = (categoryData) => {
  return function (dispatch) {
    // Making a GET request to the API to fetch data for a specific category
    axios
      .get(`https://dummyjson.com/products/category/${categoryData}`)
      .then((res) => {
        // Dispatching the 'fetchCategoryData' action with the fetched data as payload
        dispatch(fetchCategoryData(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};

// Async action creator to fetch details of a specific product
export const getProductDetail = (id) => {
  return function (dispatch) {
    // Making a GET request to the API to fetch details of a specific product
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        // Dispatching the 'fetchProductDetail' action with the fetched data as payload
        dispatch(fetchProductDetail(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};
