import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import WishListReducer from "./WishListReducer";
import uiReducer from "./uiSlider";

const RootReducer = combineReducers({
  productData: ProductReducer,
  cartData: CartReducer,
  wishListData: WishListReducer,
  uiSlider: uiReducer,
});
export default RootReducer;
