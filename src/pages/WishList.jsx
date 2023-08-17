import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "../components/Cart/CartFunctions";
import EmptyCarts from "../components/EmptyCart/EmptyCarts.jsx";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearWishList,
  removeItemFromWishList,
} from "../redux/Actions/CartAction";
import BreadCrumbs from "../components/layouts/BreadCrumbs";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../assets/css/wishList.css"
const WishList = ({ title }) => {
  useDocumentTitle(title);
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishListData?.wishList);
  return (
    <>
      <BreadCrumbs location={"WishList"} />
      {wishList?.length > 0 ? (
        <div className="cart-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-heading mb-10">My wishlist</div>
                <div className="table-wishlist">
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th width="45%">Product Name</th>
                        <th width="15%">Unit Price</th>
                        <th width="15%">Stock Status</th>
                        <th width="15%" />
                        <th width="10%" />
                      </tr>
                    </thead>
                    {wishList?.map((item) => {
                      return (
                        <>
                          <tbody>
                            <tr>
                              <td width="45%">
                                <span className="display-flex align-center">
                                  <span className="img-product">
                                    <img
                                      src={item.thumbnail}
                                      alt=""
                                      className="mCS_img_loaded"
                                    />
                                  </span>
                                  <span className="name-product">
                                    {item.title}
                                  </span>
                                </span>
                              </td>
                              <td width="15%" className="price">
                                $ {item.price}
                              </td>
                              <td width="15%">
                                <span className="in-stock-box">
                                  {item.stock}
                                </span>
                              </td>
                              <td width="15%">
                                <button
                                  className="round-black-btn small-btn"
                                  onClick={() => {
                                    dispatch(addToCart(item));
                                  }}
                                >
                                  Add to Cart
                                </button>
                              </td>
                              <td width="15%">
                                <button
                                  className="round-black-btn small-btn"
                                  onClick={() => {
                                    dispatch(removeItemFromWishList(item.id));
                                  }}
                                >
                                  Remove
                                </button>
                              </td>
                              <td width="10%" className="text-center">
                                <Link className="trash-icon">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}

                    <span className="continue__btn update__btn">
                      <Link
                      to="#"
                        onClick={() => {
                          dispatch(clearWishList());
                        }}
                      >
                        {" "}
                        Update WishList
                      </Link>
                    </span>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <EmptyCart>Your WishList is Empty</EmptyCart>
          <EmptyCarts message={"Your WishList is Empty"} />
        </>
      )}
    </>
  );
};

export default WishList;
