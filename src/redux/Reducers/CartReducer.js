import { toast } from "react-toastify";
import * as types from "../Actions/ActionTypes";
const initialState = {
  cart: typeof window !=="undefined"? JSON.parse(localStorage.getItem("cart")) ||[] :[],
  numberCart: 0,
  loading: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.Add_To_Cart:
      const itemInCart = state?.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity === 2) {
        }
        itemInCart.quantity++;
        if (itemInCart.quantity) {
          toast.info(`Quantity of ${action.payload.title} Increased`, {
            position: "top-left",
          });
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
      };
    case types.Increase_Item:
      {
        const item = state.cart.find((item) => item.id === action.payload);
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
      return {
        ...state,
      };
    case types.Decrease_Item:
      {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
      return {
        ...state,
      };
    case types.Remove_Item:
      {
        const updatedCart = state.cart.filter((p) => p.id !== action.payload);
        state.cart = updatedCart;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
      return {
        ...state,
      };
      case types.Clear_Cart:
        state.cart=[];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      
      return{
        ...state
      }
    default:
      return state;
  }
};

export default CartReducer;
