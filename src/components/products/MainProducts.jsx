import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GlobalContext } from "../../context/GlobalContext";
import {
  getProduct,
  getProductDetail,
  setLoader,
} from "../../redux/Actions/ProductsAction";
import { addToCart, addToWishList } from "../../redux/Actions/CartAction";
import Loading from "../../utils/skeleton/Loading"

const MainProducts = () => {
  const dispatch = useDispatch();
  const { isLogin } = GlobalContext();
  const [visibleProducts, setVisibleProducts] = useState(8);
  useEffect(() => {
    dispatch(getProduct(8));
    dispatch(setLoader())
  }, [dispatch]);
  const { products,loading} = useSelector(
    (state) => state?.productData
  );
  if (loading) {
    return <Loading />;
  } 
    const showMoreItems = () => {
    setVisibleProducts((prev) => prev + 8);
    dispatch(getProduct(visibleProducts));
  };
  return (
    <>
      <div className="card-body">
        <div className="row">
          {products?.products?.map((item, index) => {
            return (
                <div className="col-md-3 mb-3" key={index}>
                  <div className="card">
                    <Link
                      to="/product-Detail"
                      state={{ data: item }}
                      onClick={() => dispatch(getProductDetail(item.id))}
                    >
                      <img
                        className="card-img-top"
                        style={{ height: "160px", width: "" }}
                        src={item.thumbnail}
                        alt=""
                      />
                    </Link>
                    <div className="card-body">
                      <p className="h6">
                        <small className="text-muted">{item.brand}</small>
                        <br />
                        {item.title}
                      </p>
                      {item.rating <= 4.5 ? (
                        <p className="m-0">
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa fa-star-o" />
                        </p>
                      ) : (
                        <p className="m-0">
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                        </p>
                      )}
                      <p className="h5 m-0">${item.price}</p>
                    </div>
                    <div className="card-footer p-0">
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => {
                            dispatch(addToCart(item));
                          }}
                        >
                          <span>Add Cart</span>
                        </button>
                        <Link
                          type="button"
                          className="btn btn-light"
                          to={"/shopping-cart"}
                        >
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-shopping-cart"
                          />
                        </Link>
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => {
                            dispatch(addToWishList(item));
                          }}
                        >
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-heart"
                          />
                        </button>
                        <button type="button" className="btn btn-light">
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-exchange"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
      <button className="loadMoreButton" onClick={showMoreItems}>
        Load More
      </button>
    </>
  );
};

export default MainProducts;
