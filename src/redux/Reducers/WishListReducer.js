import { toast } from "react-toastify";
import * as types from "../Actions/ActionTypes";
const initialState = {
  wishList:typeof window !== "undefined" ? JSON.parse(localStorage.getItem("wishList")) || [] : [],
  loading: false,
};

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.Add_To_WishList:
      const itemInWishList = state?.wishList.find(
        (item) => item.id === action.payload.id
      );
      if (itemInWishList) {
        if (itemInWishList.quantity === 2) {
        }
        itemInWishList.quantity++;
        if (itemInWishList.quantity) {
          toast.info(`Already ${action.payload.title} is in your WishList`, {
            position: "top-left",
          });
        }
      } else {
        state.wishList.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added to wishList`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
      return {
        ...state,
      };
    case types.Increase_Item:
      {
        const item = state.wishList.find((item) => item.id === action.payload);
        item.quantity++;
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
      return {
        ...state,
      };
    case types.Decrease_Item:
      {
        const item = state.wishList.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
      return {
        ...state,
      };
    case types.Remove_WishListItem:
      {
        const updatedwishList = state.wishList.filter((p) => p.id !== action.payload);
        state.wishList = updatedwishList;
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
      return {
        ...state,
      };
      case types.Clear_wishList:
        state.wishList=[];
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      
      return{
        ...state
      }
    default:
      return state;
  }
};

export default WishListReducer;
