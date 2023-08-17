import * as types from "./ActionTypes"
// Action creator for adding an item to the cart
export const addToCart = (payload) => ({
  type: types.Add_To_Cart,
  payload,
});

export const addToWishList=(payload)=>({

  type:types.Add_To_WishList,
  payload
})
export const removeItemFromWishList=(payload)=>({
  type:types.Remove_WishListItem,
  payload
})
export const clearWishList=(payload)=>({
  type:types.Clear_wishList,
  payload
})
// Action creator for removing an item from the cart
export const removeItem = (payload) => ({
  type: types.Remove_Item,
  payload,
});

export const increaseItem = (increaseData) => ({
  type: types.Increase_Item,
  payload:increaseData,
});
export const decreaseItem = (decreaseData) => ({
  type: types.Decrease_Item,
  payload:decreaseData,
});
export const clearCart=(payload)=>({
  type:types.Clear_Cart,
  payload
})
export const toggle = () => ({
  type: 'ui/toggle',
});

