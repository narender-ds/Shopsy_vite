import {
  CartContainer,
  CartClearButton,
  CartItem,
  CartProductImage,
  CartProductTitle,
  CartProductAction,
  CartProductSubtotal,
  ActionButton,
  CartProductQuantity,
  CartTotal,
  Mask,
} from "./CartFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyCartSlide from "../EmptyCart/EmptyCartSlide.jsx";
import {
  decreaseItem,
  increaseItem,
  removeItem,
  toggle,
} from "../../redux/Actions/CartAction";
const CartSlider = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state?.cartData);
  const ui = useSelector((state) => state?.uiSlider);
  const dispatch = useDispatch();
  const totalPrice = product?.cart.reduce(
    (a, c) => a + c?.quantity * c?.price,
    0
  );
  return (
    <>
      <CartContainer visible={ui?ui.cartDrawerVisible:undefined}>
        {product?.cart?.length > 0 ? (
          <div className="shopping-cart-div">
            <h4 className="shopping-cart">Shopping Cart</h4>
            <CartClearButton onClick={() => navigate("/shopping-cart")}>
              Go To Cart
            </CartClearButton>
          </div>
        ) : (
          <>
            <CartClearButton onClick={() => navigate("/shop")}>
              Shop Now
            </CartClearButton>
            <EmptyCartSlide />
          </>
        )}
        {product?.cart?.map((cartItem, index) => (
          <CartItem key={index}>
            <CartProductImage src={cartItem.thumbnail} alt={cartItem.title} />
            <div>
              <CartProductTitle>{cartItem.title}</CartProductTitle>
              <CartProductSubtotal>
                ${cartItem.quantity * cartItem.price}
              </CartProductSubtotal>
              <CartProductAction>
                <ActionButton
                  disabled={cartItem.quantity === 1}
                  onClick={() => {
                    dispatch(decreaseItem(cartItem.id));
                  }}
                >
                  -
                </ActionButton>
                <CartProductQuantity>{cartItem.quantity}</CartProductQuantity>
                <ActionButton
                  className="buttons"
                  disabled={cartItem.quantity === 10}
                  onClick={() => {
                    dispatch(increaseItem(cartItem.id));
                  }}
                >
                  +
                </ActionButton>
                <ActionButton>
                  <i
                    className="fa fa-trash"
                    onClick={() => {
                      dispatch(removeItem(cartItem.id));
                    }}
                  />
                </ActionButton>
              </CartProductAction>
            </div>
            <hr style={{ backgroundColor: "red" }}></hr>
          </CartItem>
        ))}

        {totalPrice > 0 && <CartTotal>Total ${totalPrice}</CartTotal>}
      </CartContainer>

      {ui.cartDrawerVisible && (
        <Mask
          onClick={() => {
            dispatch(toggle());
          }}
        />
      )}
    </>
  );
};

export default CartSlider;
